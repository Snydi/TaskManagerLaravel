<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function readTask()
    {
        $tasks = Task::where('user_id',1)->get(); //TODO need to change to a preferred ID
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
    public function fillUpdateForm($id)
    {
        $task = Task::find($id);
        return view('task.updateTask')->with('task', $task);
    }
    public function updateTask(Request $request, $id)
    {
        $task = Task::find($id);
        $request->validate([
            'task' => 'required',
        ]);

        $input = $request->all();
        $task->task = $input['task'];
        $task->status = $input["status"];
        $task->deadline = $input['deadline'];
        $task->save();
        return redirect('/tasks');
    }
    public function deleteTask($id)
    {
        $task = Task::find($id);
        $task->delete();
        return redirect('/tasks');
    }
    public function completeTask($id)
    {
        $task = Task::find($id);
        $task->status = "Complete";
        $task->save();
        return redirect('/tasks');
    }

    //TODO make a completeTask button, recolor buttons, add a <hr> to create button, optimize queries, fix a shitton of errors
}
