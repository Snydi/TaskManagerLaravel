<x-layout>
                                        <x-slot:title>Login</x-slot:title>
                                        <h1 class="centered__text">Login</h1>
    <div class="form__wrapper">
        <form action="{{url('loginForm')}}" method="POST">
        @csrf
            <div class="form__flex">

                <input class="" name="email" placeholder="Email:" type="text" value="" >

                <input class="" name="password" placeholder="Password:" type="password" value="" >
            </div>
            <button class="button width100" type="submit" value= "submit" > Submit</button>
        </form>
    </div>

    @if ($errors->any())
            <ul class = "error__list centered__text">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
    @endif

</x-layout>
