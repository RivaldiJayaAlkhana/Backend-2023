// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    if(students.length > 0) {
      const data = {
        message: "Menampilkkan semua students",
        data: students,
      };
  
      return res.status(200).json(data);
    }

    //else
    const data = {
      message: "Student is empty",
    };
    return res.status(200).json(data);
    
  }

  async store(req, res) {
    // validasi sederhana
    // handle jika salah satu data tidak dikirim

    //destructing object req.body
    const {nama, nim, email, jurusan} = req.body;

    //jika data undefined maka kirim response error
    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: "Semua data harus dikirim",
      };

      return res.status(422).json(data);
    }

    // else
    const student = await Student.create(req.body);

    const data = {
      message: "Menambahkan data student",
      data: student,
    };

    return res.status(201).json(data);
  }

  async update(req, res) {
    const { id } = req.params;
    const studentToUpdate = await Student.find(id);
  
    if (!studentToUpdate) {
      const data = {
        message: `Student tidak ditemukan`,
      };
      return res.status(404).json(data);
    }
  
    const updatedStudent = await Student.update(id, req.body);
    const data = {
      message: `Mengedit data student`,
      data: updatedStudent,
    };
  
    res.status(200).json(data);
  }
  

  async destroy(req, res) {
    const { id } = req.params;
    const studentToDelete = await Student.find(id);
  
    if (!studentToDelete) {
      const data = {
        message: `Student tidak ditemukan`,
      };
      return res.status(404).json(data);
    }
  
    await Student.delete(id);
  
    const data = {
      message: `Menghapus data student`,
    };
  
    res.status(200).json(data);
  }
  

  async show(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);
  
    if (!student) {
      const data = {
        message: `Student tidak ditemukan`,
      };
      return res.status(404).json(data);
    }
  
    const data = {
      message: `Menampilkan detail students`,
      data: student,
    };
  
    res.status(200).json(data);
  }
  
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;