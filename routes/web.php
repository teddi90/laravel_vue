<?php

use Illuminate\Support\Facades\Route;



Route::get('/', function () {
    return view('index');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/{page}', [\App\Http\Controllers\Post\IndexController::class, '__invoke'])->where('page','.*');


