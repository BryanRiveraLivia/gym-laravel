<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Clientes extends Model
{
    protected $fillable = ['nombre','ape_pa','ape_ma','fec_nac'];
}
