<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $table='products';
    public $primaryKey='product_id';
    public $timestamps = true;
}
