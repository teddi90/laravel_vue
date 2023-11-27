<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['namespace'=>'App\Http\Controllers\Person','prefix'=>'people'],function (){
    Route::post('/','StoreController');
    Route::get('/','IndexController');
    Route::get('/{person}','ShowController');
    Route::patch('/{person}','UpdateController');
    Route::delete('/{person}','DeleteController');
});

