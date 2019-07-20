<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FishTransaction extends Model
{
    protected $table='fish_transations';
    public $primaryKey='ft_id';
    public $timestamps = true;
}
