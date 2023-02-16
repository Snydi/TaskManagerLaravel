<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function readTask()
    {
        $tasks = Task::where('user_id',1)->get(); //need to change to a preferred ID
        return view('task.readTask',['tasks'=>$tasks]);
    }
    public function createTask(Request $request)
    {
        $task = new Task();
        $request->validate([
            'task' => 'required',
            ]);
        $input = $request->all();
        $task->task = $input['task'];
        $task->user_id = Auth::id();
        $task->status = 'In progress';
        $task->deadline = '2002-08-28';
        $task->save();
        return redirect('/tasks');
    }
    public function updateTask()
    {

    }
}
