<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css.css">
</head>

<body>
    <form class="app">
        Имя <br><input type="text" name="name" class="check "> <br>
        <span class="error-name"></span><br>
        Телефон <br><input type="text" name="phone" class="check e"> <br>
        <span class="error-phone"></span><br>
        Почта <br><input type="text" name="email" class="check "> <br>
        <span class="error-email"></span><br>
        <input type="button" value="отправить" class="send">
    </form>
    <div class="answer"></div>
</body>
<script src="jquery.js"></script>
<script src="js.js"></script>

</html>