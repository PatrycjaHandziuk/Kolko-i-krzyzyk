//MENU

const save = document.getElementById("save");

save.addEventListener("click", ()=> {SaveIt()});


function SaveIt(){
    let nick_1 = document.getElementById("nick-1").value;
    let nick_2 = document.getElementById("nick-2").value;
    let color_1 = document.getElementById("color-1").value;
    let color_2 = document.getElementById("color-2").value;

    //SPRAWDZ WYBOR
    if (color_1===color_2){
        return alert("Kolory muszą być różne");
    }

    if (nick_1 ==="" && nick_2 ===""){
        return alert("Graczom brakuje imion");
    }

    if (nick_1===""){
        return alert("Gracz 1 nie ma imienia :C");
    }

    if (nick_2===""){
        return alert("Gracz 2 nie ma imienia :C");
    }

    if (nick_1===nick_2){
        return alert("Nicki muszą być różne");
    }

    //WYŚWIETLANIE GRY
    $("#round").html("Teraz kolej: "+ nick_1);
    $(".input-panel").css('display', 'none');
    $("#game").css('display', 'inline-block');
    $("#vs").html("Zwycięstwa <br>" + nick_1+":"+gracz1_wins+ " vs "+nick_2+":"+gracz2_wins);

}

//POLA DO GRY

const pole1 = document.getElementById("index-1");
const pole2 = document.getElementById("index-2");
const pole3 = document.getElementById("index-3");

const pole4 = document.getElementById("index-4");
const pole5 = document.getElementById("index-5");
const pole6 = document.getElementById("index-6");

const pole7 = document.getElementById("index-7");
const pole8 = document.getElementById("index-8");
const pole9 = document.getElementById("index-9");

let toggle_choose = false;
let toggle_lock = false;

//NASŁUCHIWACZE
pole1.addEventListener("click", ()=>{writeSign(1);});
pole2.addEventListener("click", ()=>{writeSign(2);});
pole3.addEventListener("click", ()=>{writeSign(3);});

pole4.addEventListener("click", ()=>{writeSign(4);});
pole5.addEventListener("click", ()=>{writeSign(5);});
pole6.addEventListener("click", ()=>{writeSign(6);});

pole7.addEventListener("click", ()=>{writeSign(7);});
pole8.addEventListener("click", ()=>{writeSign(8);});
pole9.addEventListener("click", ()=>{writeSign(9);});

function writeSign(nr){

    if (toggle_choose === false){
        //ZNAK I KOLOR KÓŁKO
        if(document.getElementById("index-"+nr).className === 'cell'){
            let color_1 = document.getElementById("color-1").value;
            let nick_2 = document.getElementById("nick-2").value;
            toggle_choose = true;


            if (color_1 == '#000000'){
                $("#index-"+nr).css('color', 'white')};
                $("#index-"+nr).html("O");
                $("#index-"+nr).css('background-color', color_1);
                $("#index-"+nr).css('opacity', '0.9');
                $("#round").html("Teraz kolej gracza: "+ nick_2);
                $("#index-"+nr).addClass('cellA');
                $("#index-"+nr).removeClass('cell');
        }

        GameEngineO();
        let nick_1 = document.getElementById("nick-1").value;
        let nick_2 = document.getElementById("nick-2").value;
        $("#vs").html("Zwycięstwa <br>" + nick_1+":"+gracz1_wins+ " vs "+nick_2+":"+gracz2_wins);
    }
    else (toggle_choose === true)
        //ZNAK I KOLOR KRZYŻYK
        if(document.getElementById("index-"+nr).className === 'cell'){
            let color_2 = document.getElementById("color-2").value;
            let nick_1 = document.getElementById("nick-1").value;
            toggle_choose = false;

            if (color_2 == '#000000'){
                $("#index-"+nr).css('color', 'white')};
                $("#index-"+nr).html("X");
                $("#index-"+nr).css('background-color', color_2);
                $("#index-"+nr).css('opacity', '0.9');
                $("#round").html("Teraz kolej gracza: "+ nick_1);
                $("#index-"+nr).addClass('cellA');
                $("#index-"+nr).removeClass('cell');
        }
        GameEngineX();
        let nick_1 = document.getElementById("nick-1").value;
        let nick_2 = document.getElementById("nick-2").value;
        $("#vs").html("Zwycięstwa <br>" + nick_1+":"+gracz1_wins+ " vs "+nick_2+":"+gracz2_wins);
};

//ZWYCIĘSTWA

let gracz1_wins = 0;
let gracz2_wins = 0;

//SILNIK 

function GameEngineX(){

    let p1 = document.getElementById("index-1").innerHTML;
    let p2 = document.getElementById("index-2").innerHTML;
    let p3 = document.getElementById("index-3").innerHTML;

    let p4 = document.getElementById("index-4").innerHTML;
    let p5 = document.getElementById("index-5").innerHTML;
    let p6 = document.getElementById("index-6").innerHTML;

    let p7 = document.getElementById("index-7").innerHTML;
    let p8 = document.getElementById("index-8").innerHTML;
    let p9 = document.getElementById("index-9").innerHTML;

    let nick_2 = document.getElementById("nick-2").value;


    if(p1 == "X" && p2 == "X" && p3 == "X"){
        alert("Wygrał "+ nick_2);
        etTimeout(() => {  CleanTable(); }, 1000);
        return gracz2_wins++;
    }

    if(p4 == "X" && p5 == "X" && p6 == "X"){
        alert("Wygrał "+ nick_2);
        setTimeout(() => {  CleanTable(); }, 1000);
        return gracz2_wins++;
    };
    if(p7 == "X" && p8 == "X" && p9 == "X"){
        alert("Wygrał "+ nick_2);
        setTimeout(() => {  CleanTable(); }, 1000);
        return gracz2_wins++;
    };

    if(p1 == "X" && p4 == "X" && p7 == "X"){
        alert("Wygrał "+ nick_2);
        setTimeout(() => {  CleanTable(); }, 1000);
        return gracz2_wins++;
    };
    if(p2 == "X" && p5 == "X" && p8 == "X"){
        alert("Wygrał "+ nick_2);
        setTimeout(() => {  CleanTable(); }, 1000);
        return gracz2_wins++;
    };
    if(p3 == "X" && p6 == "X" && p9 == "X"){
        alert("Wygrał "+ nick_2);
        setTimeout(() => {  CleanTable(); }, 1000);
        return gracz2_wins++;
    };

    if(p1 == "X" && p5 == "X" && p9 == "X"){
        alert("Wygrał "+ nick_2);
        setTimeout(() => {  CleanTable(); }, 1000);
        return gracz2_wins++;
    };
    if(p3 == "X" && p5 == "X" && p7 == "X"){
        alert("Wygrał "+ nick_2);
        setTimeout(() => {  CleanTable(); }, 1000);
        return gracz2_wins++;
    };

    checkWin(gracz1_wins, gracz2_wins);
    checkFull();

};

function GameEngineO(){

    let p1 = document.getElementById("index-1").innerHTML;
    let p2 = document.getElementById("index-2").innerHTML;
    let p3 = document.getElementById("index-3").innerHTML;

    let p4 = document.getElementById("index-4").innerHTML;
    let p5 = document.getElementById("index-5").innerHTML;
    let p6 = document.getElementById("index-6").innerHTML;

    let p7 = document.getElementById("index-7").innerHTML;
    let p8 = document.getElementById("index-8").innerHTML;
    let p9 = document.getElementById("index-9").innerHTML;

    let nick_1 = document.getElementById("nick-1").value;

    if(p1 == "O" && p2 == "O" && p3 == "O"){
        alert("Wygrał "+ nick_1)
        setTimeout(() => {  CleanTable(); }, 1000);
        return gracz1_wins++;
    }
    if(p4 == "O" && p5 == "O" && p6 == "O"){
        alert("Wygrał "+ nick_1)
        setTimeout(() => {  CleanTable(); }, 1000);
        return gracz1_wins++;
    }
    if(p7 == "O" && p8 == "O" && p9 == "O"){
        alert("Wygrał "+ nick_1)
        setTimeout(() => {  CleanTable(); }, 1000);
        return gracz1_wins++;
    }

    if(p1 == "O" && p4 == "O" && p7 == "O"){
        alert("Wygrał "+ nick_1)
        setTimeout(() => {  CleanTable(); }, 1000);
        return gracz1_wins++;
    }
    if(p2 == "O" && p5 == "O" && p8 == "O"){
        alert("Wygrał "+ nick_1)
        setTimeout(() => {  CleanTable(); }, 1000);
        return gracz1_wins++;
    }
    if(p3 == "O" && p6 == "O" && p9 == "O"){
        alert("Wygrał "+ nick_1)
        setTimeout(() => {  CleanTable(); }, 1000);
        return gracz1_wins++;
    }

    if(p1 == "O" && p5 == "O" && p9 == "O"){
        alert("Wygrał "+ nick_1)
        setTimeout(() => {  CleanTable(); }, 1000);
        return gracz1_wins++;
    }
    if(p3 == "O" && p5 == "O" && p7 == "O"){
        alert("Wygrał "+ nick_1)
        setTimeout(() => {  CleanTable(); }, 1000);
        return gracz1_wins++;
    }

    checkWin(gracz1_wins, gracz2_wins);
    checkFull();
};

//CZYSZCZENIE TABLICY

function CleanTable(){
    let numbers = [1,2,3,4,5,6,7,8,9];

    for (const number of numbers){
        $("#index-"+number).css('color', 'black');
        $("#index-"+number).html("");
        $("#index-"+number).addClass('cell');
        $("#index-"+number).removeClass('cellA');
        $("#index-"+number).css('background-color', 'linen');
    }
};

function checkFull(){
    let p1 = document.getElementById("index-1").className;
    let p2 = document.getElementById("index-2").className;
    let p3 = document.getElementById("index-3").className;

    let p4 = document.getElementById("index-4").className;
    let p5 = document.getElementById("index-5").className;
    let p6 = document.getElementById("index-6").className;

    let p7 = document.getElementById("index-7").className;
    let p8 = document.getElementById("index-8").className;
    let p9 = document.getElementById("index-9").className;


    if(p1 == "cellA" && p2 == "cellA" && p3 == "cellA" && p4 == "cellA" && p5 == "cellA" && p6 == "cellA" && p7 == "cellA" && p8 == "cellA" && p9 == "cellA"){
        setTimeout(() => {  CleanTable(); }, 1000);
    }
};

//SIDENAV

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }
  
function closeNav() {
    closeWin();
    closeOgrze();
    document.getElementById("mySidenav").style.width = "0";

  } 

//USTAWIENIE WARUNKU ZWYCIESTWA
var maxScore = 5;
let toggle_open = false; 
const win_save = document.getElementById("win-save");
win_save.addEventListener("click", ()=> {winSave()});

function winSave(){
    var win_input = document.getElementById("win-input").value;
    maxScore = parseInt(win_input);
    var checkNaN = isNaN(maxScore);
    console.log(checkNaN);

    if(checkNaN == true || maxScore == 0){
        maxScore = 5;
    }
    console.log(maxScore);
    return maxScore
}

function openWin() {
    if (toggle_open == false){
        $("#win-points").css('display', 'inline-block');
        return toggle_open = true;
    }
    else 
        $("#win-points").css('display', 'none');
        return toggle_open = false;
  }
  
function closeWin() {
    $("#win-points").css('display', 'none');
  } 

//WARUNEK ZWYCIESTWA


function checkWin(gracz1_wins, gracz2_wins){
    if(gracz1_wins == maxScore){
        return WinO();
    }
    if(gracz2_wins == maxScore){
        return WinX();
    }
}

function WinO(){
    let nick_1 = document.getElementById("nick-1").value;
    $(".game-container").css('display', 'none');
    $("#vs").css('display', 'none');
    $("#round").css('display', 'none');
    $("#win-panel").css('display', 'inline-block');
    $("#win").html("Brawo, wygranko gracza "+nick_1+"<br><br>");
}

function WinX(){
    let nick_2 = document.getElementById("nick-2").value;
    $(".game-container").css('display', 'none');
    $("#vs").css('display', 'none');
    $("#round").css('display', 'none');
    $("#win-panel").css('display', 'inline-block');
    $("#win").html("Brawo, wygranko gracza "+ nick_2+ "<br><br>");
}

//O GRZE 

let toggle_open2 = false;

function openOgrze() {
    if (toggle_open2 == false){
        $("#ogrze").css('display', 'inline-block');
        return toggle_open2 = true;
    }
    else 
        $("#ogrze").css('display', 'none');
        return toggle_open2 = false;
  }
  
  function closeOgrze() {
    $("#ogrze").css('display', 'none');
  } 