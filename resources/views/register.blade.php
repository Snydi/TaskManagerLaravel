<x-layout>
                                            <h1>Register</h1>
    <h1>Password must have at least 8 characters, Uppercase letter and number</h1>
<form action="{{url('registerForm')}}" method="POST">
    @csrf
<label class="">
    <input class="" name="email" placeholder="Email:" type="text"
           value="" >
</label>

<label class="">
    <input class="" name="password" placeholder="Password:" type="password"
           value="" >
</label>

    <button type="submit" value= "submit" > Submit</button>
</form>
    @if ($errors->any())
        <div class="">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
</x-layout>
