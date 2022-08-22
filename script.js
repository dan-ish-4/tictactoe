console.log("welcome to tic tac toe");
let click = new Audio("click.mp3");
let gameover = new Audio("gameover.mp3");
let winsound = new Audio("winsound.mp3");
let turn = "x";
let isgameover =false;
let Reset = document.getElementById('btn');

// function to change the turn.........
const changeturn = () => {
    return turn === "x" ? "o" : "x";


}

//function to check win....
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2,0,0,0],
        [3, 4, 5,0,8,0],
        [6, 7, 8,0,17,0],
        [0, 3, 6,-9,8,90],
        [1, 4, 7,0,11,90],
        [2, 5, 8,8,8,90],
        [0, 4, 8,1,9,44],
        [2, 4, 6,-2,10,136],

    ]
    win.forEach(e => {
        if ((boxtext[e[0]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')){
            document.querySelector('.info').innerText= 'CONGRATULATIONS '+ boxtext[e[0]].innerText +' won';
            isgameover=true;
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '150px';
            document.querySelector(".line").style.transform = `translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width="375px";


        }

         
    })

}

//game logic......
let box = document.getElementsByClassName("box");
let button = document.getElementById('btn');
Array.from(box).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            click.play()
            boxtext.innerText = turn;
            turn = changeturn();
            click.play();
            checkwin();
            if(!isgameover){
            document.getElementsByClassName('info')[0].innerText = turn + " turn";
            }
        }

    })
    

});

Reset.addEventListener('click',()=>{
  let boxtext = document.querySelectorAll('.boxtext');
  Array.from(boxtext).forEach(element=>{
      element.innerText="";
      
  })
   turn ="x";
  isgameover=false;
  document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px';
  document.getElementsByClassName('info')[0].innerText=turn +' turn';
  document.querySelector(".line").style.width="0px";

})
