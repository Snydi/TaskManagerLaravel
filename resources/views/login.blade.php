<x-layout>
                                        <x-slot:title>Login</x-slot:title>
                                        <h1 class="centered__text">Login</h1>
    <div class="form__wrapper">
        <form action="{{url('loginForm')}}" method="POST">
        @csrf
            <div class="form__flex">

                <label for="email">Email:</label>
                    <input class="form__input"  name="email" placeholder="Email:" type="text" value="" >

                <label for="password">Password:</label>
                    <input class="form__input"  name="password" placeholder="Password:" type="password" value="" >

                <button class="button width100" type="submit" value= "submit" > Submit</button>

            </div>

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
