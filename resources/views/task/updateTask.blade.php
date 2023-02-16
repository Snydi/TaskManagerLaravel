<x-layout>
    <x-slot:title>Update task</x-slot:title>

    <h1 class="centered__text">Update task</h1>
    <div class="form__wrapper">
        <form action="{{url('updateTaskForm')}}" method="POST">
            @csrf
            <div class="form__flex">
                <input name="task" placeholder="Task:" type="text" value="" >
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
