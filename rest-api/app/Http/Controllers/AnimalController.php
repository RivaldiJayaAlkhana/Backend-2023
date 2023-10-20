<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    // property animals
    public $animals = ['kucing','ayam'];

    // method untuk menampilkan semua hewan
    public function index() {
        echo "Menampilkan Data Animal <br>";

        // loop property animal
        foreach($this->animals as $animal){
            echo "- $animal <br>";
        }
    }
    // method untuk menambahkan data hewan
     public function store(Request $request) {
        echo "Menampilkan Hewan Baru <br>";

        // menambahkan data ke property animals
        array_push($this->animals, $request->animal);

        // panggil method index
        $this->index();
    }
 
    // method untuk mengedit data hewan

    public function update($id, Request $request) {
        echo "Mengupdate Data Hewan ID $id. <br>";

        // update data di property animals
        $this->animals[$id] = $request->animal;

        // panggil method index
        $this->index();
    }

    // method untuk menghapus data hewan
    public function destroy($id) {
        echo "Menghapus Data Hewan ID $id <br>";

        unset($this->animals[$id]);

        // panggil method index

        $this->index();
    }
}
