<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product_Mapper extends Model
{
    protected $table='Product_Mapper';
    public $primaryKey='pm_id';
    public $timestamps = true;
}
