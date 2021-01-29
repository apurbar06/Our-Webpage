$(document).ready(function () {
    'use strict';

    //********* Animated Headline

    $('.animate-rotate-3').animatedHeadline({
        animationType: 'rotate-3'
    });

    //********** menu background color change while scroll

    $(window).on('scroll', function () {
        var menu_area = $('.nav-area');
        if ($(window).scrollTop() > 200) {
            menu_area.addClass('sticky_navigation');
        } else {
            menu_area.removeClass('sticky_navigation');
        }
    });

    //********** menu hides after click (mobile menu)

    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });

    //*********** scrollspy js

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });

    //************ smooth scroll js

    $('a.smooth-menu,a.custom-btn').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
    });


    //************* Timeout for loder
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 1000);


      //************ contact start
      var input = $(".validate-input .input100");
      $(".validate-form").on("submit", function (e) {

        e.preventDefault();

        var check = true;
        for (var i = 0; i < input.length; i++) {
          if (validate(input[i]) == false) {
            showValidate(input[i]);
            check = false;
          }
        }

        if(check == true) {
         sendMail(input);
        }  
  
        return check;
      });

      $(".validate-form .input100").each(function () {
        $(this).focus(function () {
          hideValidate(this);
        });
      });

      function validate(input) {
        if ($(input).attr("type") == "email" || $(input).attr("name") == "email") {
          if (
            $(input)
              .val()
              .trim()
              .match(
                /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
              ) == null
          ) {
            return false;
          }
        } else {
          if ($(input).val().trim() == "") {
            return false;
          }
        }
      }

      function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass("alert-validate");
      }

      function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass("alert-validate");
      }

      function sendMail(input) {
        var name = $(input[0]).val().trim();
        var email = $(input[1]).val().trim();
        var msg = $(input[2]).val().trim();
        var body = "Name : "+ name + " Email : "+ email +" Message : " + msg;

        $('.validate-form').trigger("reset");

        Email.send({
          SecureToken : "70d2c70f-8f80-4873-8a70-5ee935836eee",
          To : 'myebook711@gmail.com',
          From : "apurbar06@gmail.com",
          Subject : "This mail is regarding Our Webpage",
          Body : body
        }).then(
          //  message => alert(message)
          alert("Email sent successfully.")
        );
      }
      
      //**************** contact end

      
});
