var car = $('car');

          
$(document).ready(function() {
    
    var angle;
    const forward = $("#up-button")
    const right = $("#right-button");
    const left = $("#left-button");
    const back = $("#down-button");
    $("#game").append(car);    
    

    const commandLog = $("#command-log");
    const currentDirection = $("#compass");

    $(".arrow-btn").click(function() {
        var name = $(this).attr("name");
        var direction = $(this).attr("data-direction");
        var degrees = $(this).attr("data-degrees");
            console.log("clicked: " + name + "\ndirection: " + direction + "\ndegrees: " + degrees);
        var metaSample = ("<div> <br> clicked: "   + name + "<br> direction: " + direction + "<br> degrees: "   + degrees + "<br> </div>");
            // PUSH THIS DATA TO DATABASE
        
        var glyph = $("<span id='glyph-" + direction + "'r class='glyphicon glyphicon-arrow-" + direction + " glyph-" + direction+"'></span>");
                    $("#compass").empty().append(glyph).addClass("compass-glyph");;
                    $("#command-log").append(metaSample);
                })

        var direction = $(this).attr("data-direction");
            car.stop(1);
            switch (direction){
            case 'up':
              car.animate({top:'-=30'});
              console.log(direction);
              break;
            case 'down':
              car.animate({top:'+=30'});
              console.log(direction);
              break;
            case 'left':
              car.animate({left:'-=30'});
              console.log(direction);
              break;
            case 'right':
              car.animate({left:'+=30'});
              console.log(direction);
              break;
          }
        });
        
console.log("drive safe ;p")


        // $('#left-button').click(function() {
        //     var clicker = $(this).attr('data-point');
        //     var clicker = $(this).attr('data-point');
        //     console.log(clicker);
        // })