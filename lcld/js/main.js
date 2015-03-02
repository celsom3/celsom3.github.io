$(document).ready(function(){

  $('.navbar-nav li > a').each(function(){
    // Get window url
    var currentURL = location.pathname.slice(1);
    console.log(currentURL);

    // Get menu link href attribute
    var menuLink = $(this).attr('href');
    console.log(menuLink);

    // Check if the url is the same as the objects href attribute
    if(currentURL == menuLink){
      console.log('Found a match!');
      // Adds class 'active' to the parent li element
      $(this).parent('li').addClass('active');

      // Find the main menu item and add 'active' class
      $(this).parent('li').parent('ul').parent('li').addClass('active');

    }else{
      $(this).parent('li').removeClass('active');
    }

  });

});