<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $user = new User();
        $user->email = $request->input('email');
        $user->password = $request->input('password');
        $user->save();
        return redirect('/');
    }
}
