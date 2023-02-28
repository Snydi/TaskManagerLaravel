<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use App\Models\User;
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
        $task->deadline = $input['deadline'];
        $task->save();
        return redirect('/tasks');
    }
    public function updateTask(Request $request)
    {
        $id = Task::where('user_id', Auth::id())->value('id'); //TODO 2 queries to db for 1 action good job:)
        $task = Task::find($id);

        $request->validate([
            'task' => 'required',
        ]);

        $input = $request->all();
        $task->task = $input['task'];
        $task->status = 'In progress';
        $task->deadline = $input['deadline'];
        $task->save();
        return redirect('/tasks');
    }
}
