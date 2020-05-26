   
    // take color form another square   
    class Square {
        constructor() {
            this.squares = {

                "first" : {
                    "class_name" : ".square--first",
                    "color" : $(".square--first").css("background-color"),
                },

                "second" : {
                    "class_name" : ".square--second",
                    "color" : $(".square--second").css("background-color"),
                },

                
            }
            this.onMouseEvents();

        }

        // setting new color for proper square
        set_color(square, color) {
          
          $(`.square--${square}`).css("background-color", color);
          let color_new = $(`.square--${square}`).css("background-color")
          return color_new;
          
        }



        // Events
        onMouseEvents() {

            let self = this;

            $(this.squares.first.class_name).mouseenter( ()=> {

              // check whether a square contains original color or have already changed
              switch($(this.squares.first.class_name).css("background-color")) {

                case this.squares.first.color:

                    this.set_color("first" , this.squares.second.color);
                    break;

                case this.squares.second.color:

                    this.set_color("first", this.squares.first.color)
                    break;
      
              }

            });

            $(this.squares.second.class_name).mouseenter( function(){
              
              // check whether a square contains original color or have already changed
              switch($(this).css('background-color')) {

                case self.squares.second.color:

                  self.set_color("second", self.squares.first.color);
                  break;

                case self.squares.first.color:

                  self.set_color("second", self.squares.second.color);
                  break;

                }
            })

        }

        
    }

   new Square();

// Class Constructor
// objects
// GET
// switch case

// SET
// switch case

// Events