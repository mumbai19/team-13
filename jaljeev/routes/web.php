<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::post('/regdata',array('middleware' => 'cors', 'uses' => 'DataController@user_insert'));

Route::post('/loginuser','DataController@login_user');

Route::post('/addproduct',array('middleware' => 'cors', 'uses' => 'DataController@add_product'));

Route::get('/temp','DataController@test');

Route::get('/getvendors','DataController@returnorder');

