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


Route::get('/', function ()
{
    return view('home');
});
Route::get('/tasks', [TaskController::class, 'readTask']);

Route::get('/create-task',function ()
{
    return view('task.createTask');
});
Route::post('/create-task-submit', [TaskController::class, 'createTask']);


Route::get('/update-task/{id}', [TaskController::class, 'fillUpdateForm']);
Route::post('/update-task-submit/{id}', [TaskController::class, 'updateTask']);



Route::get('/completeTask/{id}', [TaskController::class, 'completeTask']);
Route::get('/deleteTask/{id}', [TaskController::class, 'deleteTask']);





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




