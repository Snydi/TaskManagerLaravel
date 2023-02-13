<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Controllers\TaskController;

Route::get('/tasks', [TaskController::class, 'getTasks']);

Route::get('/login', function ()
{
    return view('login');
});
Route::get('/', function ()
{
    return view('home');
});
Route::get('/register',function ()
{
    return view('register');
});
Route::post('registerForm', [UserController::class, 'register']);





