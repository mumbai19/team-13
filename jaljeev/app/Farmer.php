<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Farmer extends Model
{
    protected $table='farmers';
    public $primaryKey='farmer_id';
    public $timestamps = true;
}
