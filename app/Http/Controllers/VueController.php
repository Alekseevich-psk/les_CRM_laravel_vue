<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VueController extends Controller
{
    public function startVue()
    {
        return ['яблоко', 'груша', 'банан'];
    }

    public function chartData()
    {
        return [
            'labels' => [1, 2, 3, 4],
            'datasets' => [
                [
                    'label' => 'Продажи',
                    'backgroundColor' => '#F26202',
                    'data' => [15000, 5000, 10000, 30000],
                ]
            ]
        ];
    }
}
