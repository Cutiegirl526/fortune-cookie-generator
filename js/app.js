var quotes = new Array(16) // Add your quotes below
  quotes[0]="Doom will come ahead for you.";
  quotes[1]="Your loved one is looking for you now.";
  quotes[2]="Only you can shape your future";
  quotes[3]="Happiness seeks for you";
  quotes[4]="Your friends are using you for food and money";
  quotes[5]="You will be wealthy";
  quotes[6]="You're changing for the worst";
  quotes[7]="People will love you for you not as a different person.";
  quotes[8]="If they asks you for something, they're not your friend";
  quotes[8]="You will become the president of 2050";
  quotes[9]="You'll become like Kanye";
  quotes[10]="You care for anyone and anything.";
  quotes[11]="You haven't failed until you give up.";
  quotes[12]="Your ability to juggle many tasks will take you far.";
  quotes[13]="You are strong minded";
  quotes[14]="Start a new page everyday until the chapter is over.";
  quotes[15]="You'll find $20 on the floor";

function fortune(objID) {
  console.log("here");
  var rand_int = Math.floor(Math.random()*16);
  document.getElementById(objID).innerHTML=(quotes[rand_int]);
}
function numbers(objID) {
  var space = ('      ') // Spacer for between numbers
  var rand_inta = Math.floor(Math.random()*100); // Get first number
  var rand_intb = Math.floor(Math.random()*100); // Get second number
  var rand_intc = Math.floor(Math.random()*100); // Get third number
  var rand_intd = Math.floor(Math.random()*100); // Get fourth number
  var rand_inte = Math.floor(Math.random()*100); // Get fifth number
  document.getElementById(objID).innerHTML=(rand_inta+space+rand_intb+space+rand_intc+space+rand_intd+space+rand_inte);
}
