@extends('layouts.index-lt')

@section('title', 'Laravel + Vue')

@section('content')

<section>

    <div id="app" class="uk-container">
        <header-component></header-component>
        <main style="margin-top: 20px;">
            <div class="uk-container">
                <router-view></router-view>
            </div>
        </main>
    </div>

</section>

@endsection