<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VideoTutorials extends Model
{
    protected $table='video_tutorials';
    public $primaryKey='v_id';
    public $timestamps = true;
}
