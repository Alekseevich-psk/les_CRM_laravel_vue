<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class VueController extends Controller
{
    private $labels;
    private $data;

    public function startVue()
    {
        return ['яблоко', 'груша', 'банан'];
    }

    public function chartLine(Request $request)
    {
        $this->labels = $request->labels;
        $this->data = $request->chData;

        return $this->regArrForChartLine($request->message);
    }

    private function regArrForChartLine($param)
    {

        if (isset($param) && $param != 0) {
            array_push($this->data, $param);
            $index = end($this->labels);
            $index++;
            array_push($this->labels, $index++);
        }

        return [
            'labels' => $this->labels,
            'datasets' => [
                [
                    'label' => 'Продажи',
                    'backgroundColor' => '#F26202',
                    'data' => $this->data,
                ]
            ],
            'shData' => $this->data
        ];
    }
}
