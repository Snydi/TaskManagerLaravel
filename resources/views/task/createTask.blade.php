<x-layout>
                            <x-slot:title>Create task</x-slot:title>

                            <h1 class="centered__text">Create task</h1>
    <div class="form__wrapper">
        <form action="{{url('createTaskForm')}}" method="POST">
            @csrf
            <label class="">
                <input name="task" placeholder="Task:" type="text" value="" >
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
