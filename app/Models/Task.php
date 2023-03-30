<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = ['task', 'group_id', 'status', 'deadline'];

    public function task()
    {
        return $this->belongsTo(Group::class);
    }

    public $timestamps = false; //disabling Laravel timestamp requirement
}
