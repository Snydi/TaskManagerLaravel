<x-layout>
                                    <x-slot:title>Tasks</x-slot:title>

                                    <h1 class="centered__text">Tasks</h1>

    <div class="content__wrapper">
        <a href="/createTask"> <button class="button">Create task</button></a>
    <table class="table ">
        <thead>
        <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Deadline</th>
            <th>Complete</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
    @foreach ($tasks as $task)
        <tr>
            <td class="centered__text">{{ $task->task }}</td>
            <td class="centered__text">{{ $task->status }}</td>
            <td class="centered__text">{{ $task->deadline }}</td>
            <td> <a href="/updateTask"> <button class="button"> Update task</button></a> </td>
        </tr>
    @endforeach
        </tbody>
    </table>
    </div>
</x-layout>
