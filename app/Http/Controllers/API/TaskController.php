<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function getUserTasks($id)
    {
        $user = User::find($id);
        return TaskResource::collection($user->tasks);
    }
}
