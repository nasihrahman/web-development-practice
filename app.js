let maximum=parseInt(prompt("Enter a number"));

while(!maximum){
    maximum=parseInt(prompt("Enter a  valid number"));
}

const targetNum=Math.floor(Math.random()*maximum)+1;
console.log(targetNum);


let guess=parseInt(prompt("Enter your first guess"));
let attempts=1;
while(parseInt(guess)!==targetNum){
    if(guess==='q') break;
    attempts++;
    if(guess>targetNum){
        guess=prompt("Too high!! Enter your new  guess");
    }
    else{
        guess=prompt("Too low!! Enter your new  guess");

    }
}


console.log(`you got it it took you ${attempts} guesses`);
