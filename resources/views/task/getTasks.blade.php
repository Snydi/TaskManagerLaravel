<x-layout>
                                    <x-slot:title>Tasks</x-slot:title>

                                    <h1 class="centered__text">Tasks</h1>
    @foreach ($tasks as $item)
        <div>
            <h2 class="centered__text">{{ $item->task }}</h2>
        </div>
    @endforeach
</x-layout>
