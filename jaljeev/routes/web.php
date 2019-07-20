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

Route::get('/temp','DataController@tutorial');

Route::get('/getvendors','DataController@returnorder');

Route::get('/getfishordors','DataController@fishorder');

Route::post('/sendtrans','DataController@transaction_pending');

Route::post('/activetrans','DataController@transaction_active');

Route::post('/sendfishtrans','DataController@fish_transaction_pending');

Route::post('/activefishtrans','DataController@fish_transaction_active');

<<<<<<< HEAD
Route::get('/allurl','DataController@geturl');
=======
Route::post('/addfarm','DataController@add_farm');
>>>>>>> 348967f30212c27bcfc7c07f165f3e9550e49c2c
