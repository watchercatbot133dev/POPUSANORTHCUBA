var img = document.getElementById("popcat1");
var count = document.getElementById("score");
var malaysiaScore = document.getElementById('my_score');
var score = 0;
var MyScore = 10000;
var audio = new Audio('pop.mp3');
var CN_score = 1000, Id_score = 430, th_score = 200, jp_score = 150, CU_score = 250, hk_score = 100, sg_score = 500, br_score = 280, tw_score=590, KH_score=319, sr_score = 300; 

// mouseclick event
img.addEventListener("mousedown", function(){
    increaseScore();
    img.src = 'popcat2.png';
    audio.play();
});
    
img.addEventListener("mouseup", function(){
    img.src = 'popcat1.png';
    audio.play();
});

// touch event
img.addEventListener("touchstart", function(){
    increaseScore();
    img.src = 'popcat2.png';
    audio.play();
});

img.addEventListener("touchmove", function(){
    img.src = 'popcat1.png';
     audio.play();
});


// Score on leaderboard
setInterval(startCountCN, 1);

function startCountCN(){
    CN_score++;
    document.getElementById("table").rows[1].cells.item(3).innerHTML = CN_score;
}

setInterval(startCountId, 20);

function startCountId(){
    Id_score++;
    document.getElementById("table").rows[2].cells.item(3).innerHTML = Id_score;
}

setInterval(startCountTh, 25);

function startCountTh(){
    th_score++;
    document.getElementById("table").rows[3].cells.item(3).innerHTML = th_score;
}

setInterval(startCountJp, 40);

function startCountJp(){
    jp_score++;
    document.getElementById("table").rows[4].cells.item(3).innerHTML = jp_score;
}

setInterval(startCountCu, 34);

function startCountCu(){
    Cu_score++;
    document.getElementById("table").rows[6].cells.item(3).innerHTML = CU_score;
}

setInterval(startCountHk, 20);

function startCountHk(){
    hk_score++;
    document.getElementById("table").rows[7].cells.item(3).innerHTML = hk_score;
}

setInterval(startCountSg, 15);

function startCountSg(){
    Sg_score++;
    document.getElementById("table").rows[8].cells.item(3).innerHTML = Sg_score;
}

setInterval(startCountBr, 31);

function startCountBr(){
    br_score++;
    document.getElementById("table").rows[9].cells.item(3).innerHTML = br_score;
}

setInterval(startCountTw, 29);

function startCountTw(){
    tw_score++;
    document.getElementById("table").rows[10].cells.item(3).innerHTML = tw_score;
}

setInterval(startCountKH, 70);

function startCountKH(){
    KH_score++;
    document.getElementById("table").rows[11].cells.item(3).innerHTML = KH_score;
}

setInterval(startCountRu, 5);

function startCountRu(){
    ru_score++;
    document.getElementById("table").rows[12].cells.item(3).innerHTML = ru_score;
}

function increaseScore(){
    score++;
    MyScore++;
    count.innerHTML = score;
    malaysiaScore.innerHTML = MyScore;
    document.getElementById("table").rows[5].cells.item(3).innerHTML = MyScore;
}
