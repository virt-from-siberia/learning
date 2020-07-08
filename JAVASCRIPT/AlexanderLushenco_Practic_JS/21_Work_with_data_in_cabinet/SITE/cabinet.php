<?php
// var_dump($_COOKIE);
if (!isset($_COOKIE['email']) or trim($_COOKIE['email']) == '') {
    header("Location: index.html");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>User Page</h1>
    <button class="btn">Log Out</button>



    <form method="">
        <div>name: <input type="text" name="name" id="signup-name"></div>
        <div>password: <input type="text" name="pass" id="signup-pass"></div>
        <div>birthday: <input type="text" name="birthday" id="signup-birthday"></div>
        <input type="submit" value="update" id="signup-submit">
    </form>



    <script src="script/ajax.js"></script>
    <script src="script/get_user_data.js"></script>
    <script src="script/cabinet.js"></script>
</body>

</html>