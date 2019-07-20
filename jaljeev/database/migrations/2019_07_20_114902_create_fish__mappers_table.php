<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFishMappersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fish_mappers', function (Blueprint $table) {
            $table->bigIncrements('fm_id');
            $table->timestamps();

            $table->integer('farmer_id');

            $table->integer('fish_id');

            $table->integer('price');
            $table->integer('quantity');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fish__mappers');
    }
}
