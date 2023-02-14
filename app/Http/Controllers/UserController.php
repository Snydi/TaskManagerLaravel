<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
class UserController extends Controller
{
    public function register(Request $request)
    {
        $user = new User();
        $request->validate([
            'email' => 'required|email',
            'password' =>  ['required', Password::min(8)->letters()->mixedCase()->numbers()],
        ]);
        $input = $request->all();

        $user->email = $input['email'];
        $user->password = Hash::make($input['password']);
        $user->save();

        return redirect('/'); //Need to add success message
    }
    public function login(Request $request)
    {
        //TODO complete the login method
        $userData = User::where('email','=',  $request->input('email'))->get();
        //return redirect('/');
    }
}
