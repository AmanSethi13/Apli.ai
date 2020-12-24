$(document).ready(function () {
     var rating = {};
    function pageDisplay() {
        var page = parseInt($('ul#pageNo').find('li.active').attr('value'));
        console.log(page);

        return page;
    }
    var comment = [];
    $('.submitbutton').click(function () {
        var page = pageDisplay();
        comment[page] = $('#comment').val();
        $('input[type="text"]').val("");
        console.log(comment);
    })

    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function () {
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function (e) {
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function () {
        $(this).parent().children('li.star').each(function (e) {
            $(this).removeClass('hover');
        });
    });
  
      var stars = {};
    /* 2. Action to perform on click */
    $('#stars li').on('click', function () {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
         stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }

        // JUST RESPONSE (Not needed)
        var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
        var msg = "";
    
            msg = " You rated this " + ratingValue + " stars.";
        $('.success-box div.text-message').html("<span>" + msg + "</span>");
        var page = pageDisplay();
        rating[page] = ratingValue; 
        

    });
   
    $('.next').click(function() {
        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }
        $('.success-box div.text-message').empty();
            var page = pageDisplay();
        var msg = "";
        
           if(page<5){
                $('.pagination').find('.pagenumber.active').next().addClass('active');
               $('.pagination').find('.pagenumber.active').prev().removeClass('active');
               var res = pageDisplay();
               msg = "Question " + res;
               $('.box div.pageDisplay').html("<span>" + msg + "</span>");
               $('div.res').hide();
               $('div.ques').show();
               $('div.feedback').show();
           }
          if(page===5){
              
            $('div.res').show();
            $('div.ques').hide();
            $('div.feedback').hide();
            for(var i=1;i<=5;i++){
                $('.r'+i).html(rating[i]);
              console.log("Ques" + i +" = " + rating[i]);
            }
              for (var i = 1; i <= 5; i++) {
                  $('.c' + i).html(comment[i]);
                  
              }
           
          }
        
       
    })
    $('.prev').click(function () {
        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }
        $('.success-box div.text-message').empty();
        var page = pageDisplay();
        var msg = "";
       
        console.log(page);
        if (page > 1){

            $('.box div.pageDisplay').html("<span>" + msg + "</span>");
        $('.pagination').find('.pagenumber.active').prev().addClass('active');
        $('.pagination').find('.pagenumber.active').next().removeClass('active');
            var res = pageDisplay();
            msg = " Question " + res;
            $('.box div.pageDisplay').html("<span>" + msg + "</span>");
            $('div.res').hide();
            $('div.ques').show();
            $('div.feedback').show();
     }
    })

});


