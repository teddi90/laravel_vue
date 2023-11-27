<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Person;

class IndexController extends Controller
{
    public function __invoke()
    {
        return view('index');
    }
}
