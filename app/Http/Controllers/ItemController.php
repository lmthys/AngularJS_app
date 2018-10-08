<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function store(Request $request) 
	{
		
		$request->validate([
                'user_name'    => 'required|alpha_num|unique:items,username',
                'user_email'       => 'required|email|unique:items,email',
				'user_password'    => 'required',
				
        ]);
		$item = new \App\Item([
			'username' => $request->get('user_name'),
			'email' => $request->get('user_email'),
			'password' => $request->get('user_password'),
			'is_Parent' => $request->get('parent')
		]);
		$item->save();
		return response()->json('Successfully added');
	}
			
}
