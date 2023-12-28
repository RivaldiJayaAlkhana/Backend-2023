// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  /**
   Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static create(data) {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      // Query SQL untuk menyisipkan data mahasiswa ke dalam tabel "students"
      const sql = "INSERT INTO students (nama, nim, email, jurusan) VALUES (?, ?, ?, ?)";

      // Parameter untuk menggantikan placeholder pada query
      const params = [data.nama, data.nim, data.email, data.jurusan];

      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan parameter untuk menggantikan placeholder
       * Callback function akan dipanggil setelah query selesai dieksekusi.
       */
      db.query(sql, params, (err, results) => {
        // Jika terjadi error, reject Promise dengan pesan error
        if (err) {
          reject(err);
        } else {
          // Jika query berhasil, resolve Promise dengan data mahasiswa yang baru diinsert
          const newStudent = {
            nama: data.nama,
            nim: data.nim,
            email: data.email,
            jurusan: data.jurusan,
            id: results.insertId, // ID mahasiswa yang baru diinsert
          };
          resolve(newStudent);
        }
      });
    });
  }
}

// export class Student
module.exports = Student;