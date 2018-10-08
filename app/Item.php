<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = ['username', 'email', 'password', 'is_Parent'];
}
