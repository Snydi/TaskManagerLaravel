<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasks')->insert([
            'task' => 'Make a Laravel TaskManager',
            'user_id' => '1',
            'status' => 'In progress',
            'deadline' => '2023-06-01',
        ]);
    }
}
