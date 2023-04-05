<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\Group;
use Illuminate\Http\Request;
use App\Models\Task;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{

    public function index() //this function deviates from standard due to the fact that user may only see their tasks
    {
        $user = User::find(Auth::id());
        return view('task.index',['tasks'=>$user->tasks]);
    }
    public function store(Request $request)
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
        if ($request->user()->cannot('create', $task))
        {
            abort(403);
        }
        $task->save();

        return redirect('/tasks');
    }
    public function edit($id)
    {
        $task = Task::find($id);
        return view('task.edit')->with('task', $task);
    }
    public function create()
    {
        $user = User::find(Auth::id());
        return view('task.create')->with('groups',  $user->groups);
    }
    public function update(Request $request, $id)
    {
        $task = Task::find($id);
        $request->validate([
            'task' => 'required',
        ]);

        $input = $request->all();
        $task->task = $input['task'];
        $task->status = $input["status"];
        $task->deadline = $input['deadline'];
        if ($request->user()->cannot('update', $task)) {
            abort(403);
        }
        $task->save();

        return redirect('/tasks');
    }
    public function delete($id)
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
