// Import data students dari folder data/students.js
const students = require("../data/students");

// Membuat Class StudentController
class StudentController {
    index(req, res) {
      // Tampilkan data students
      const data = {
        message : "Menampilkan semua students",
        data: students,
      };
      res.json(data);
    }
  
    store(req, res) {
      // Tambahkan data students
      const { nama } = req.body

      students.push(nama);

      const data = {
        message: `Menambahkan data students: ${nama}`,
        data:students
      };
      res.json(data);
    }
  
    update(req, res) {
      const { id } = req.params;
      const { nama } = req.body;
    
      students[id] = nama;

      const data = {
        message: `Mengedit student id ${id}, nama ${nama}`,
        data : students
      }
    
      res.json(data);
    }
  
    destroy(req, res) {
      // Hapus data students
      const { id } = req.params;
  
    
      students.splice(id,1);

      const data = {
        message: `Menghapus student id ${id}`,
        data : students
      }
    
      res.json(data);
    }

    }

  // Membuat object StudentController
  const object = new StudentController();
  
  // Export object StudentController
  module.exports = object;