<x-layout>
                            <x-slot:title>Create task</x-slot:title>

                            <h1 class="centered__text">Create task</h1>
    <div class="form__wrapper">
        <form action="/create-task-submit" method="POST">
            @csrf
            <div class="form__flex">

                <label for="task">Task:</label>
                <input class="form__input" name="task"  type="text" value="" >

                <label for="deadline">Task must completed before:</label>
                <input class="form__input" type="date" name="deadline" value="{{date('Y-m-d')}}">

                <select name="group" class="form__select" >
                    @foreach($groups as $group)
                        <option value="{{$group->id}}">
                            {{$group->group}}
                        </option>
                    @endforeach
                </select>



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
