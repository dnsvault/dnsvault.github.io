jQuery(document).on("turbolinks:load", function(){
  $(".dropdown-navheader").hover(
      function() { $('.dropdown-menu', this).show();
      },
      function() { $('.dropdown-menu', this).hide();
  });
});