<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GroupController extends Controller
{
    //TODO add more methods here
    public function create(Request $request)
    {
        $group = new Group();
        $request->validate([
            'group' => 'required',
        ]);

        $input = $request->all();
        $group->group = $input['group'];
        $group->user_id = Auth::id();
        $group->save();

        return redirect('/tasks');
    }

}
