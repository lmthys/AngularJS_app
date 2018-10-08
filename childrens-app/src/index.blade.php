
<h1>Sign Up</h1>

{!! Form::open(
  array(
    'route' => 'users.store', 
    'class' => 'form')
  ) !!}

@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<div class="form-group">
    {!! Form::label('Username') !!}
    {!! Form::text('username', null, 
      array(
        'class'=>'form-control', 
        'placeholder'=>'Enter Username'
      )) !!}
	 </br>
	{!! Form::label('Password') !!}
    {!! Form::text('password', null, 
      array(
        'class'=>'form-control', 
        'placeholder'=>'Enter Password'
      )) !!}
	 </br>
	 {!! Form::label('Confirm Password') !!}
    {!! Form::text('cpassword', null, 
      array(
        'class'=>'form-control', 
        'placeholder'=>'Confirm Password'
      )) !!}
	 </br>
	 {!! Form::label('Email') !!}
    {!! Form::text('email', null, 
      array(
        'class'=>'form-control', 
        'placeholder'=>'Enter Email'
      )) !!}
	 </br>
	{!! Form::label('Phone Number') !!}
    {!! Form::text('number', null, 
      array(
        'class'=>'form-control', 
        'placeholder'=>'Enter Phone Number'
      )) !!}
	 </br>
	{!! Form::label('Parent') !!}
    {!! Form::checkbox('parent') !!}
	 </br>
</div>

<div class="form-group">
    {!! Form::submit('Submit!', 
      array('class'=>'btn btn-primary'
    )) !!}
</div>
{!! Form::close() !!}
<a href="\login">Literature {!!Session::put('username', $user);!!}</a>
</div>