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

Route::get('/getfishorders','DataController@fishorder');

Route::post('/sendtrans','DataController@transaction_pending');

Route::post('/activetrans','DataController@transaction_active');

Route::post('/sendfishtrans','DataController@fish_transaction_pending');

Route::post('/activefishtrans','DataController@fish_transaction_active');

Route::post('/addfarm','DataController@add_farm');

Route::get('/retrieve_farmers','DataController@retrieve');
Route::get('/allurl','DataController@geturl');
Route::post('/addfarm','DataController@add_farm');

Route::get('/webfish','DataController@pendingfish');
Route::get('/rejectproduct','DataController@transaction_act');
Route::get('/rejectfish','DataController@fish_transaction_act');
