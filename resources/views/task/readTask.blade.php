<x-layout>
                                    <x-slot:title>Tasks</x-slot:title>

                                    <h1 class="centered__text">Tasks</h1>

    <div class="content__wrapper">
        <a href="/create-task"> <button class="button button__create">Create task</button></a>
        <a href="/create-group"> <button class="button">Create group</button></a>

    <table class="table " >
        <thead>
        <tr>
            <th class="main__table">Task</th>
            <th class="main__table">Deadline</th>
            <th class="main__table">Status</th>
            <th class="table__buttons">Actions</th>
        </tr>
        </thead>
        <tbody>

    @foreach ($tasks as $task)
        <tr>
            <td class="centered__text td__task">{{ $task->task }}</td>
            <td class="centered__text">{{ $task->deadline }}</td>
            <td class="centered__text {{$task->status==="In progress" ? "status__inProgress" : "status__complete"}}">{{ $task->status }}</td>
            <td class="table__buttons">
                <a href="/completeTask/{{$task->id}}"> <button class="button button__table button__green"> Complete</button></a>
                <a href="/update-task/{{$task->id}}"> <button class="button button__table button__blue "> Update</button></a>
                <a href="/deleteTask/{{$task->id}}"> <button class="button button__table button__red"> Delete</button></a>
            </td>
        </tr>
    @endforeach

        </tbody>
    </table>
    </div>
</x-layout>
