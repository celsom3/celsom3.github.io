<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Ileana &amp; Celso</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="css/bootstrap.min.css">
        <style>
            body {
                padding-top: 50px;
                padding-bottom: 20px;
            }
        </style>
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/choose.css">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">

    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <link rel="shortcut icon" href="img/favicon2.ico">

    <!-- core CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <!-- Bootstrap -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- font-awesome -->
    <link href="css/jquery.vegas.css" rel="stylesheet">
    <!-- Banner BG -->
    <link type="text/css" rel="stylesheet" href="css/magnific-popup.css">
    <!-- Gallery Popup -->
    <link href="css/style.css" rel="stylesheet">
    <!-- Theme Core CSS -->
    <link href="css/animate.min.css" rel="stylesheet">
    <!-- Animations -->
    <link href="css/light.css" rel="stylesheet">
    <!-- Theme Layout -->


    <!-- Google Fonts here -->
    <link href='http://fonts.googleapis.com/css?family=Great+Vibes' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Courgette' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic' rel='stylesheet' type='text/css'>

        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <div class="choose-container">

            <div class="half-height" id="spanish">

                <div class="container text-center">
                  <h3 class="lang-option"><a href="spanish2.php" id="lang-spanish" method="POST">Espanol</a></h3>
                </div>
                
            </div>


            <div class="half-height" id="english">

                <div class="container text-center">
                  <h3 class="lang-option"><a href="english2.php" id="lang-english" method="POST">English</a></h3>
                </div>
                
            </div>

            <!--<form class="hidden" id="hidden-form" name="hidden-form" method="POST">
                <input type="text" name="decision" class="hidden">
            </form>-->
        </div>

    <div class="spanish-content" style="">  
        <?php
            $spanish = file_get_contents('spanish2.php');
            echo $spanish;
        ?>  
    </div> 

    <div class="english-content" style="">  
        <?php
            $english = file_get_contents('english2.php');
            echo $english;
        ?>  
    </div> 

  



<!-- JavaScript -->
    <script type="text/javascript" src="js/jquery-1.10.2.js"></script>
    <!-- jquery -->
    <script type="text/javascript" src="js/jquery.vegas.js"></script>
    <!-- For Banner Slider -->
    <script type="text/javascript" src="js/vegas.js"></script>
    <!-- For Banner Slider -->
    <script type="text/javascript" src="js/forms.js"></script>
    <!-- For Contact Form -->
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <!-- Bootstrap Js -->
    <script type="text/javascript" src="js/countdown.js"></script>
    <!-- Countdown Timer Js -->
    <script type="text/javascript" src="js/jquery.magnific-popup.js"></script>
    <!-- Gallery Popup Js -->
    <script type="text/javascript" src="js/jquery.appear.js"></script>
    <!-- Appears Js -->
    <script type="text/javascript" src="js/jquery.easytabs.js"></script>
    <!-- Easy tab Js -->
    <script type="text/javascript" src="js/system.js"></script>
    <!-- All the suppotive scripts included in this js -->
    

    <!-- Google Analytics Code -->
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-58155335-1', 'auto');
      ga('send', 'pageview');

    </script>

    <script src="js/choose-b.js"></script>



    </body>
</html>
