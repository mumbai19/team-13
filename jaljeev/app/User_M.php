<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User_M extends Model
{
    protected $table='user__m_s';
    public $primaryKey='user_id';
    public $timestamps = true;
}
