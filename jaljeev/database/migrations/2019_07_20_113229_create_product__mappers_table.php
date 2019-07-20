<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductMappersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product__mappers', function (Blueprint $table) {
            $table->bigIncrements('pm_id');
            $table->timestamps();
            $table->integer('vendor_id');
           

            $table->integer('product_id');

            $table->integer('quantity');

            $table->integer('price');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product__mappers');
    }
}
