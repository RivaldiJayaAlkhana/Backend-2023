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
  static async create(data, callback) {
    // Promise 1: melakukan insert data ke database
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";
      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });

    //refactor promise 2: get data by id
    const student = this.find(id);
    return student;
  }


// mengupdate data student
static async update(id, data) {
  // membuat query SQL
  const sql = "UPDATE students SET ? WHERE id = ?";

  // mengeksekusi query dengan parameter
  await db.query(sql, [data, id]);

  // mengembalikan data yang baru diupdate
  const student = await this.find(id);
  return student;
}




static delete(id) {
  return new Promise ((resolve, reject) => {
    const sql = "DELETE FROM students WHERE id = ?";
    db.query(sql, id, (err, results) => {
      resolve(results);
    });
  });
}




static find(id) {
  const sql = "SELECT * FROM students WHERE id = ?";

  return new Promise((resolve, reject) => {
    db.query(sql, id, (err, results) => {
      if (err) {
        console.error(err);
        reject(new Error('Gagal mencari data student'));
      } else {
        const [student] = results;
        resolve(student);
      }
    });
  });
}
}

// export class Student
module.exports = Student;