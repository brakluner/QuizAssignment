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

        answers.addClass("ABCD" [i]);
        answers.addClass("button3");
        $("body").append(answers);
        }
    $(".button2").remove();
    $("h1").remove();
    setInterval(function () {
        --score;
      }, 1000);
    $(document).ready(function(){
        $(".button3").click(function(event) {
            if($(this).attr('class') == 'B button3'){
                score+=15;
                var audioElement2 = document.createElement("audio");
                audioElement2.setAttribute("src", "harp.wav");
                audioElement2.play();
            } else {
                score+= -15;
                var audioElement1 = document.createElement("audio");
                audioElement1.setAttribute("src", "foghorn.wav");
                audioElement1.play();
                alert("WRONG! Correct answer was... " + questions[0].answer)
            }
            
        var Quest = $("<div></div>").text(questions[1].title);
        
        Quest.addClass("form2")
        $("body").append(Quest);
    
        for (var i = 0; i < questions[1].choices.length; i++) {
            var answer = questions[1].choices[i];
    
            var answers = $("<button></button>").text(answer);
            
            answers.addClass("ABCD" [i]);
            answers.addClass("button4");
            $("body").append(answers);
            }
        $(".button3").remove();
        $(".form1").remove();
        $(document).ready(function(){
            $(".button4").click(function(event) {
                if($(this).attr('class') == 'C button4'){
                    score+=15;
                    var audioElement2 = document.createElement("audio");
                    audioElement2.setAttribute("src", "harp.wav");
                    audioElement2.play();
                } else {
                    score+= -15;
                    var audioElement1 = document.createElement("audio");
                    audioElement1.setAttribute("src", "foghorn.wav");
                    audioElement1.play();
                    alert("WRONG! Correct answer was... " + questions[1].answer)
                }
            
            var Quest = $("<div></div>").text(questions[2].title);
            
            Quest.addClass("form3")
            $("body").append(Quest);
        
            for (var i = 0; i < questions[2].choices.length; i++) {
                var answer = questions[2].choices[i];
        
                var answers = $("<button></button>").text(answer);
                
                answers.addClass("ABCD" [i]);
                answers.addClass("button5");
                $("body").append(answers);
                }
            $(".button4").remove();
            $(".form2").remove();
            $(document).ready(function(){
                $(".button5").click(function(event) {
                    if($(this).attr('class') == 'D button5'){
                        score+=15;
                        var audioElement2 = document.createElement("audio");
                        audioElement2.setAttribute("src", "harp.wav");
                        audioElement2.play();
                    } else {
                        score+= -15;
                        var audioElement1 = document.createElement("audio");
                        audioElement1.setAttribute("src", "foghorn.wav");
                        audioElement1.play();
                        alert("WRONG! Correct answer was... " + questions[2].answer)
                    }
                
                var Quest = $("<div></div>").text(questions[3].title);
                
                Quest.addClass("form4")
                $("body").append(Quest);
            
                for (var i = 0; i < questions[3].choices.length; i++) {
                    var answer = questions[3].choices[i];
            
                    var answers = $("<button></button>").text(answer);
                    
                    answers.addClass("ABCD" [i]);
                    answers.addClass("button6");
                    $("body").append(answers);
                    }
                $(".button5").remove();
                $(".form3").remove();
                $(document).ready(function(){
                    $(".button6").click(function(event) {
                        if($(this).attr('class') == 'B button6'){
                            score+=15;
                            var audioElement2 = document.createElement("audio");
                            audioElement2.setAttribute("src", "harp.wav");
                            audioElement2.play();
                        } else {
                            score+= -15;
                            var audioElement1 = document.createElement("audio");
                            audioElement1.setAttribute("src", "foghorn.wav");
                            audioElement1.play();
                            alert("WRONG! Correct answer was... " + questions[3].answer)
                        }
                    
                    var Quest = $("<div></div>").text(questions[4].title);
                    
                    Quest.addClass("form5")
                    $("body").append(Quest);
                
                    for (var i = 0; i < questions[4].choices.length; i++) {
                        var answer = questions[4].choices[i];
                
                        var answers = $("<button></button>").text(answer);
                        
                        answers.addClass("ABCD" [i]);
                        answers.addClass("button7");
                        $("body").append(answers);
                        }
                    $(".button6").remove();
                    $(".form4").remove();
                    $(document).ready(function(){
                        $(".button7").click(function(event) {
                            if($(this).attr('class') == 'C button7'){
                                score+=15;
                                var audioElement2 = document.createElement("audio");
                                audioElement2.setAttribute("src", "harp.wav");
                                audioElement2.play();
                            } else {
                                score+= -15;
                                var audioElement1 = document.createElement("audio");
                                audioElement1.setAttribute("src", "foghorn.wav");
                                audioElement1.play();
                                alert("WRONG! Correct answer was... " + questions[4].answer)
                            }
                        
                        var Quest = $("<div></div>").text(score);
                        
                        Quest.addClass("form6")
                        $("body").append(Quest);
                    
                        var submit = $("<button></button>").text("submit");
                        var inputName = $("<input></input>").text("name");
                        
                        submit.addClass("button8");
                        $("body").append(submit);
                        inputName.addClass("winner");
                        inputName.attr("placeholder", "Your Name");
                        $("body").append(inputName);
                        $(".button7").remove();
                        $(".form5").remove();
                        $(document).ready(function(){
                            $(".button8").click(function(event){
                                $(document).ready(function(){

                                var winners = [];
                                nameInput = document.querySelector(".winner");
                                    
                            winners.push(nameInput + score);

                            var winTable = $("<div></div>").text(winners);
                            winTable.addClass("form3")
                            $("body").append(winTable);
                        
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
    });
    });
});
