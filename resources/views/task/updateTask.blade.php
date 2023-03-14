<x-layout>
    <x-slot:title>Update task</x-slot:title>

                                <h1 class="centered__text">Update task</h1>
    <div class="form__wrapper">
        <form action="{{url('update-task-submit', ['id' => $task->id])}}" method="POST">
            @csrf
            <div class="form__flex">
                <label for="task">Task:</label>
                    <input class="form__input" name="task"  type="text" value="{{$task->task}}" >

                <label for="deadline">Task must completed before:</label>
                    <input class="form__input" type="date" name="deadline" value="{{$task->deadline}}">
                <label for="status">Current status of a task:</label>

                    <select name="status" class="form__select" >

                        <option selected="selected">{{$task->status}}</option>

                        <option value="{{$task->status==="In progress" ? "Complete" : "In progress"}}">
                            {{$task->status==="In progress" ? "Complete" : "In progress"}}
                        </option>

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
