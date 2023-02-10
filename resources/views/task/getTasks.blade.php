<x-layout>
    @foreach ($tasks as $item)
        <div>
            <h2>{{ $item->task }}</h2>

        </div>
    @endforeach
</x-layout>
