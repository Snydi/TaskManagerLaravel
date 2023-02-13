<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function getTasks()
    {
        $tasks = Task::where('user_id',1)->get(); //need to change to a preferred ID
        return view('task.getTasks',['tasks'=>$tasks]);
    }
}
