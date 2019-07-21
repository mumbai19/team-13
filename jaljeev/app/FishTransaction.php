<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FishTransaction extends Model
{
    protected $table='fish_transactions';
    public $primaryKey='ft_id';
    public $timestamps = true;
}
