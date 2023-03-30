<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Group;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index() //this function deviates from standard due to the fact that user may only see their groups
    {
        $user = User::find(Auth::id());
        return response()->json($user->groups);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $group = Group::create($request->json()->all());
        if ($request->user()->cannot('create', $group))
        {
            abort(403);
        }
        return response()->json(['message' => 'Group added successfully'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request $request)
    {
        $group = Group::find($id);
        if ($request->user()->cannot('view', $group))
        {
            abort(403);
        }
        return $group;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $group = Group::find($id);
        if ($request->user()->cannot('update', $group))
        {
            abort(403);
        }
        $input = $request->json()->all();
        $group->group = $input['group'];
        $group->user_id = $input['user_id']; //TODO need to restrict this field so user can't change user_id in a way that unbinds it from him
        $group->save();
        return response()->json(['message' => 'Group updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id, Request $request)
    {
        $group = Group::find($id);
        if ($request->user()->cannot('delete', $group))
        {
            abort(403);
        }
        $group->delete();
        return response()->json(['message' => 'Group deleted successfully']);
    }
}
