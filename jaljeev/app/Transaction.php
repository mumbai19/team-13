<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $table='transactions';
    public $primaryKey='t_id';
    public $timestamps = true;
}
