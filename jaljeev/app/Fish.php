<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fish extends Model
{
    protected $table='fish';
    public $primaryKey='fish_id';
    public $timestamps = true;
}
