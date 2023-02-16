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
        </tr>
        </thead>
        <tbody>
    @foreach ($tasks as $item)
        <tr>
            <td class="centered__text">{{ $item->task }}</td>
            <td class="centered__text">{{ $item->status }}</td>
            <td class="centered__text">{{ $item->deadline }}</td>
        </tr>
    @endforeach
        </tbody>
    </table>
    </div>
</x-layout>