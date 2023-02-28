<x-layout>
    <x-slot:title>Update task</x-slot:title>

    <h1 class="centered__text">Update task</h1>
    <div class="form__wrapper">
        <form action="{{url('updateTaskForm')}}" method="POST">
            @csrf
            <div class="form__flex">

                <input class="form__input" name="task" placeholder="Task:" type="text" value="" >
                <input class="form__input" type="date" name="deadline" value="">

                <select  class="form__select">
                    <option value="In progress" class="form__option">In progress</option>
                    <option value="Done" class="form__option">Done</option>
                </select>

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
