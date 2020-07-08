<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title-block')</title>
    <link rel="stylesheet" href="./css/app.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

</head>

<body>
    @include('includes.header')

    @if(Request::is('/'))
    @include('includes.hero')
    @endif

    <div class="container mt-5">
        <div class="row">
            <div class="col-8">
                @yield('content')
            </div>
            <div class="col-4">
                @include('includes.aside')
            </div>
        </div>
    </div>
    @include('includes.footer')
</body>

</html>