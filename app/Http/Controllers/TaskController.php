<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\Request;
use App\Models\Task;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function readTask()
    {
        $user = User::find(Auth::id());

        return view('task.readTask',['tasks'=>$user->tasks]);
    }
    public function createTask(Request $request)
    {
        $task = new Task();
        $request->validate([
            'task' => 'required',
            ]);

        $input = $request->all();
        $task->task = $input['task'];
        $task->group_id = $input['group'];
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
    public function fillGroupSelect()
    {
        $user = User::find(Auth::id());
        return view('task.createTask')->with('groups',  $user->groups);
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
}
