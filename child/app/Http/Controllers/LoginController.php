<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function store(Request $request) {
		\Session::put('pass', \App\Item::where('username', $request->get('user_name'))->pluck('password')->first());
		Validator::extend('pass', function($attribute, $value, $parameters)
		{
			$captcha = \Session::get('pass');
			return $value == $captcha;
		}, 'Your password is wrong, try again');
	    $request->validate([
			'user_name'    => 'required|exists:items,username',
			'user_password' => 'required|pass'
		]);
		return response()->json('Successfully added');
		
	}
}
