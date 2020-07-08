@extends('layouts.app')
@section('title-block')
Список контактов
@endsection

@section('content')
<h1>Список контактов</h1>

{{-- //NOTE/:if--}}
@if($errors->any())
    <div class="alert alert-danger">

        <ul>
            {{-- //NOTE/:foreach --}}
            @foreach($errors->all() as $error)
            <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<form action="{{route('contact-form')}}" method="post">
    {{-- //TODO: Securetu key --}}
    @csrf

    <div class="form-group">
        <label for="name">Введите имя</label>
        <input class="form-control" type="text" name="name" placeholder="Введите имя" id="name">
    </div>

    <div class="form-group">
        <label for="name">Email</label>
        <input class="form-control" type="text" name="email" placeholder="Введите email" id="email">
    </div>


    <div class="form-group">
        <label for="subject">Темя сообшения</label>
        <input class="form-control" type="text" name="subject" placeholder="Темя сообшения" id="subject">
    </div>
    <div class="form-group">
        <label for="message">Сообщение</label>
        <textarea name="message" id="message" class="form-control " placeholder="Введите сообщение"></textarea>
    </div>

    <button type=" submit" class="btn btn-success">Отправить</button>


</form>
@endsection
