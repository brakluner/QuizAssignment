$(document).ready(function(){
    $('.button2 a').hover(function(){
    $(this).stop().animate({'opacity' : '0'}, 500);
    }, function(){$(this).stop().animate({'opacity' : '1'}, 500);});
});
$(document).ready(function(){
    $('.button3 a').hover(function(){
    $(this).stop().animate({'opacity' : '0'}, 500);
    }, function(){$(this).stop().animate({'opacity' : '1'}, 500);});
});

var score = 75

$(document).ready(function(){
    $("#start").click(function(event) {
    var Quest = $("<div></div>").text(questions[0].title);
    
    Quest.addClass("form1")
    $("body").append(Quest);

    for (var i = 0; i < questions[0].choices.length; i++) {
        var answer = questions[0].choices[i];

        var answers = $("<button></button>").text(answer);

        answers.addClass("button3");
        $("body").append(answers);
        }
    $(".button2").remove();
    $("h1").remove();
    $(document).ready(function(){
        $(".button3").click(function(event) {
            if (choices = answers) {
                (score += 5);
            } else (score - 5)
        var Quest = $("<div></div>").text(questions[1].title);
        
        Quest.addClass("form2")
        $("body").append(Quest);
    
        for (var i = 0; i < questions[1].choices.length; i++) {
            var answer = questions[1].choices[i];
    
            var answers = $("<button></button>").text(answer);
    
            answers.addClass("button4");
            $("body").append(answers);
            }
        $(".button3").remove();
        $(".form1").remove();
        $(document).ready(function(){
            $(".button4").click(function(event) {
            var Quest = $("<div></div>").text(questions[2].title);
            
            Quest.addClass("form3")
            $("body").append(Quest);
        
            for (var i = 0; i < questions[2].choices.length; i++) {
                var answer = questions[2].choices[i];
        
                var answers = $("<button></button>").text(answer);
        
                answers.addClass("button5");
                $("body").append(answers);
                }
            $(".button4").remove();
            $(".form2").remove();
            $(document).ready(function(){
                $(".button5").click(function(event) {
                var Quest = $("<div></div>").text(questions[3].title);
                
                Quest.addClass("form4")
                $("body").append(Quest);
            
                for (var i = 0; i < questions[3].choices.length; i++) {
                    var answer = questions[3].choices[i];
            
                    var answers = $("<button></button>").text(answer);
            
                    answers.addClass("button6");
                    $("body").append(answers);
                    }
                $(".button5").remove();
                $(".form3").remove();
                $(document).ready(function(){
                    $(".button6").click(function(event) {
                    var Quest = $("<div></div>").text(questions[4].title);
                    
                    Quest.addClass("form5")
                    $("body").append(Quest);
                
                    for (var i = 0; i < questions[4].choices.length; i++) {
                        var answer = questions[4].choices[i];
                
                        var answers = $("<button></button>").text(answer);
                
                        answers.addClass("button7");
                        $("body").append(answers);
                        }
                    $(".button6").remove();
                    $(".form4").remove();
                    $(document).ready(function(){
                        $(".button7").click(function(event) {
                        var Quest = $("<div></div>").text(score);
                        
                        Quest.addClass("form6")
                        $("body").append(Quest);
                    
                        var submit = $("<button></button>").text("submit");
                    
                        submit.addClass("button8");
                        $("body").append(submit);
                        $(".button7").remove();
                        $(".form5").remove();
                        });
                    });
                    });
                });
                });
            });
            });
        });
        });
    });
    });
});
