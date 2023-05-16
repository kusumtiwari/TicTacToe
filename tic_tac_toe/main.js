//storing stuffs in variables
const players = document.querySelector(".players");
const p2pbtn = document.querySelector(".p2p");
const gameBoard = document.querySelector(".gameboard");
const buttonDiv = document.querySelector(".buttons");
const container = document.querySelector(".container");
const gbSection = document.querySelectorAll(".gb-section");
const startBtn = document.querySelector('.start');
const playerNames = document.querySelectorAll('.player-name');
const challenge = document.querySelector('.challenge');
const h1 = document.querySelector('.challenge h1');
const turnWise = document.querySelector('.turn-wise');
const turnNames = document.querySelector('.turn-wise h1');
const congrats = document.querySelector('.winner h1');
const winnerDiv = document.querySelector('.winner');
let names;

//constructor function
function Players(firstplayer,secplayer)
{
  this.firstplayer = firstplayer;
  this.secplayer = secplayer;
  this.displayName = function()
  {
    players.style.display = "none";
    h1.textContent = `${firstplayer} Vs ${secplayer}`;
    challenge.style.display = "block";
    setTimeout(function(){
        challenge.style.display = "none";
        container.classList.remove('opacity');
        turnNames.textContent = `${firstplayer}'s turn`;
        turnWise.style.display = "block";
    },1500);
    display(firstplayer,secplayer);
  }   
}

//interactivity when player to player btn is clicked
p2pbtn.addEventListener('click', ()=> {
    buttonDiv.style.display = "none";
    players.style.display = "flex";
    container.classList.add('opacity');
})

//interactivity when start btn is clicked
startBtn.addEventListener('click',storeName);
//form validation for players name
function storeName(e)
{
 if(playerNames[0].value !== "" && playerNames[1].value !== "")
 {
    e.preventDefault();
    names = new Players(playerNames[0].value,playerNames[1].value);
    //object's function being invoked
    names.displayName();
 }
}

function display(player1,player2){
  for(let i=0; i<gbSection.length; i++)
      {
        gbSection[i].addEventListener('click', () => {
        //counters to keep record of the text content in grid boxes
        let count1 = 0;
        let count2 = 0;
        if(gbSection[i].textContent == "")
        {
          //counting length of "X" and "O" in whole gridbox
          for(let i=0; i<gbSection.length; i++)
          {
            if(gbSection[i].textContent == "X")
            {
              count1++;
            }
            if(gbSection[i].textContent == "O")
            {
              count2++;
            }
          }
          //condition to put either "X" or "O" in clicked gridsection box
          if(count1 > count2)
          {
             gbSection[i].textContent = "O";
             check(player1, player2);
             turnNames.textContent = `${player1}'s turn`;
          }
          if(count1 == count2)
          {
           gbSection[i].textContent = "X";
           check(player1,player2);
           turnNames.textContent = `${player2}'s turn`;
          }
        }
       })
    }
}
//winner or tie match
function check(winner1, winner2)
{
  for(let i=0; i<=6; i+=3)
  {
    if(gbSection[i].textContent !== "")
    {
      if((gbSection[i].textContent == gbSection[i+1].textContent) && (gbSection[i].textContent == gbSection[i+2].textContent))
      {
        if(gbSection[i].textContent == "X")
        {
          congrats.textContent = `${winner1} won`;
        }
        else{
          congrats.textContent = `${winner2} won`;
        }
        container.classList.add('opacity');
        winnerDiv.style.display = "flex";
        turnWise.style.display = "none";
      }
    }
  }

  for(let i=0; i<=gbSection.length/3; i++)
  {
    if(gbSection[i].textContent !== "")
    {
      if((gbSection[i].textContent == gbSection[i+3].textContent) && (gbSection[i].textContent == gbSection[i+6].textContent))
      {
        if(gbSection[i].textContent == "X")
        {
          congrats.textContent = `${winner1} won`;
        }
        else{
          congrats.textContent = `${winner2} won`;
        }
        container.classList.add('opacity');
        winnerDiv.style.display = "flex";
        turnWise.style.display = "none";
      }
    }
  }

  if(gbSection[0].textContent !== "")
    {
      if((gbSection[0].textContent == gbSection[4].textContent) && (gbSection[0].textContent == gbSection[8].textContent))
      {
        if(gbSection[0].textContent == "X")
        {
          congrats.textContent = `${winner1} won`;
        }
        else{
          congrats.textContent = `${winner2} won`;
        }
        container.classList.add('opacity');
        winnerDiv.style.display = "flex";
        turnWise.style.display = "none";
      }
    }

    if(gbSection[2].textContent !== "")
    {
      if((gbSection[2].textContent == gbSection[4].textContent) && (gbSection[2].textContent == gbSection[6].textContent))
      {
        if(gbSection[2].textContent == "X")
        {
          congrats.textContent = `${winner1} won`;
        }
        else{
          congrats.textContent = `${winner2} won`;
        }
        container.classList.add('opacity');
        winnerDiv.style.display = "flex";
        turnWise.style.display = "none";
      }
    }

  }




