<?php

use Illuminate\Http\Request;
use App\Http\Controllers\VueController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/get', [VueController::class, 'startVue']);
Route::any('/chart-line', [VueController::class, 'chartLine']);
Route::any('/chart-cb', [VueController::class, 'getCbData']);
