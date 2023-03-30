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
use App\Http\Controllers\GroupController;
//TODO refacttor all of these routes so they are in check with convention and also proper methods

Route::get('/', function ()
{
    return view('home');
});

Route::get('/tasks', [TaskController::class, 'index']);
Route::get('/create-task', [TaskController::class, 'create']);
Route::post('/create-task-submit', [TaskController::class, 'store']);
Route::get('/update-task/{id}', [TaskController::class, 'edit']);
Route::post('/update-task-submit/{id}', [TaskController::class, 'update']);

Route::get('/completeTask/{id}', [TaskController::class, 'completeTask']);
Route::get('/deleteTask/{id}', [TaskController::class, 'deleteTask']);


Route::post('/create-group-submit', [GroupController::class, 'create']);
Route::get('/create-group',function ()
{
    return view('group.create');
});


Route::get('/register',function ()
{
    return view('register');
});
Route::post('register-form', [UserController::class, 'register']);


Route::get('/login', function ()
{
    return view('login');
});
Route::post('login-form', [UserController::class, 'login']);
Route::get('/logout', [UserController::class, 'logout']);




