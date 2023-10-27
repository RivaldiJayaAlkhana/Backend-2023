<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index () {
        // mendapatkan semua data students
        $students = Student::all();

        $data = [
            "message" => "Get all resource",
            "data" => $students
        ];

        

        // kirim data(json) dan response code
        return response()->json($data, 200);
    }

    public function store (Request $request) {
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $students = Student::create($input);

        $data = [
            'message' => 'Student is created succesfully',
            'data' => $students,
        ];

        return response()->json($data, 201);
    }

    
    public function update($id, Request $request) {
    $student = Student::find($id);

    if (!$student) {
        return response()->json(['error' => "Siswa dengan ID $id tidak ditemukan"], 404);
    }

    $input = [
        'nama' => $request->nama,
        'nim' => $request->nim,
        'email' => $request->email,
        'jurusan' => $request->jurusan
    ];

    $student->update($input);

    $data = [
        'message' => "Mengupdate Data Siswa ID $id",
        'data' => $student,
    ];

    return response()->json($data, 200);
}

public function destroy($id) {
    $student = Student::find($id);

    if (!$student) {
        return response()->json(['error' => "Siswa dengan ID $id tidak ditemukan"], 404);
    }

    $student->delete();

    $data = [
        'message' => "Menghapus Data Siswa ID $id",
    ];

    return response()->json($data, 200);
}

    


}
