<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKatakanaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('katakana', function (Blueprint $table) {
            $table->id();
            $table->string('character');
            $table->string('pronunciation', 5);
            $table->enum('type', ['single', 'combo', 'dakuten']);
            $table->enum('show', ['true', 'false'])->default('true');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('katakana');
    }
}
