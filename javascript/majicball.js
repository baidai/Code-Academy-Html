let userName;

userName !== undefined ? console.log(`Hello ${userName}!`): console.log(`Hello!`)

let userQuestion = 'Lets Party!';

console.log(`${userName} says ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall;

switch(randomNumber){
  	case 0:
    	eightBall = 'It is certain';
    	break;
  	case 1:
    	eightBall = 'It is decidedly so';
    	break;
  	case 2:
    	eightBall = 'Reply hazy try again';
    	break;
  	case 3:
    	eightBall ='Cannot predict now';
    	break;
    case 4:
    	eightBall = 'Do not count on it';
    	break;
  	case 5:
    	eightBall = 'It is certain';
    	break;
  case 6:
    eightBall ='My sources say no';
    	break;
  case 7:
    	eightBall = 'Outlook not so good';
    	break;
  case 8:
    	eightBall = 'Signs point to yes';
    	break;
}

console.log(eightBall)

