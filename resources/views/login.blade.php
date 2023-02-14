<x-layout>
                                        <h1>Login</h1>
    <form action="{{url('loginForm')}}" method="POST">
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
</x-layout>
