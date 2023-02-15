<x-layout>
                                    <x-slot:title>Register</x-slot:title>

                                    <h1 class="centered__text">Register</h1>

            <h4 class="centered__text">Password must have at least 8 characters, 1 uppercase letter and a number</h4>

    <div class="form__wrapper">
        <form action="{{url('registerForm')}}" method="POST">
            @csrf
            <label class="">
                <input name="email" placeholder="Email:" type="text" value="" >
            </label>

            <label class="">
                <input name="password" placeholder="Password:" type="password" value="" >
            </label>

            <button type="submit" value= "submit" > Submit</button>
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
