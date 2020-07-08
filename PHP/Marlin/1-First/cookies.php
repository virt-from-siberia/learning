<?php

session_start();

$_SESSION['name'] = 'Marlin';

echo $_SESSION['name'];
