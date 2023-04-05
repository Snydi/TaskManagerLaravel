<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index() //this function deviates from standard due to the fact that user may only see their tasks
    {
        $user = User::find(Auth::id());
        return response()->json($user->tasks);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {}

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $task = Task::create($request->json()->all());
        if ($request->user()->cannot('create', $task))
        {
            $task->delete(); // TODO maybe optimize it later so there won't be as many queries
            abort(403);
        }
        return response()->json($task, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id,Request $request)
    {
        $task = Task::find($id);
        if ($request->user()->cannot('view', $task))
        {
            abort(403);
        }
        return $task;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $task = Task::find($id);
        $input = $request->json()->all();
        $task->task = $input['task'];
        $task->status = $input["status"];
        $task->deadline = $input['deadline'];
        $task->group_id = $input['group_id'];
        if ($request->user()->cannot('update', $task)) {
            abort(403);
        }
        $task->save();

        return response()->json(['message' => 'Task updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id,Request $request)
    {
        $task = Task::find($id);
        if ($request->user()->cannot('delete', $task))
        {
            abort(403);
        }
        $task->delete();
        return response()->json(['message' => 'Task deleted successfully']);
    }
}
