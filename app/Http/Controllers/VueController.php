<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VueController extends Controller
{
    public function startVue()
    {
        return ['яблоко', 'груша', 'банан'];
    }
}
