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
    <title>User Cabinet</title>
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection" />
    <!--Let browser know website is optimized for mobile-->
    <link type="text/css" rel="stylesheet" href="css/main.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" href="favicon.png" />
</head>

<body>

    <div class="container">
        <div class="row ">
            <div class="col l12 s12 center-align">
                <h1 class=" user-cabinet-header">User Page</h1>
            </div>
            <div class="col l12 s12 center-align">
                <a class="waves-effect waves-light btn   btn-large green accent-4"><i class="material-icons right">assignment_returned</i>Logout</a>
            </div>
        </div>

        <div class="row">
            <div class="input-field">
                <form>
                    <div class="input-field col l4 s12">
                        <input value="enter your name" id="signup-name" type="text" class="validate">
                        <label class="active" for="signup-name"> Name</label>
                    </div>
                    <div class="input-field col l4 s12">
                        <input value="enter your name" id="signup-pass" type="text" class="validate">
                        <label class="active" for="signup-pass">Password</label>
                    </div>
                    <div class="input-field col l4 s12">
                        <input value="enter your name" id="signup-birthday" type="text" class="validate datepicker">
                        <label class="active" for="signup-birthday">Birthday</label>
                    </div>
                    <div class="input-field col l12 s12">
                        <input value="enter your name" id="signup-time" type="text" class="validate timepicker">
                        <label class="active" for="signup-birthday">Time</label>
                    </div>

                </form>
            </div>
        </div>
        <div class="row ">
            <div class="col l12 s12 center-align">
                <a class="waves-effect waves-light btn btn-large deep-purple darken-4" id="signup-submit"><i class="material-icons right">assignment_returned</i>Update</a>
            </div>
        </div>


    </div>











    <script src="script/ajax.js"></script>
    <script src="script/get_user_data.js"></script>
    <script src="script/materialize.js"></script>
    <script src="script/cabinet.js"></script>
</body>

</html>