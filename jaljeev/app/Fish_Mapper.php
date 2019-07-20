<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fish_Mapper extends Model
{
    protected $table='fish_mappers';
    public $primaryKey='fm_id';
    public $timestamps = true;
}
