<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use Illuminate\Support\Facades\DB;
use App\Models\Task;

class TaskController extends Controller
{
    public function getTasks()
    {
        $tasks = Task::where('user_id',1)->get();
        return view('task.getTasks',['tasks'=>$tasks]);
    }
}
