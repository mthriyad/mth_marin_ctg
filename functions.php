<?php 
    define("TITLE", "Welcome to seagull marine bd");
  
    if ($_SERVER['REQUEST_URI'] == '/Client_Projects/seagullmarinebd.com/') {
        define ("VERSION", time());
    } else{
        define ("VERSION", "1.0.0");
    }