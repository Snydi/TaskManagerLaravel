<x-layout>
    <x-slot:title>Create group</x-slot:title>

    <h1 class="centered__text">Create group</h1>
    <div class="form__wrapper">
        <form action="/create-group-submit" method="POST">
            @csrf
            <div class="form__flex">

                <label for="group">Group:</label>
                <input class="form__input" name="group"  type="text" value="" >

                <button class="button width100" type="submit" value= "submit" > Submit</button>
            </div>
        </form>

        @if ($errors->any())
            <ul class = "error__list centered__text">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
    @endif
</x-layout>
