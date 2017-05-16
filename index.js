$(document).ready(function(){

var nbaTeams = [];
 

function teamFactory(name,wins,losses){
    var obj = {};
    obj.name= name;
    obj.wins= wins;
    obj.losses=losses;
    obj.printOut=function(){
        $('#main tbody').append('<tr><td>'+ obj.name + '</td><td>' + obj.wins + '</td><td>' + obj.losses + '</td></tr>');
    };
    return obj;

};



var warriors = teamFactory('Golden State Warriors', 67, 15);
var jazz = teamFactory('Utah Jazz', 51, 31);
var bucks = teamFactory('Milwaukee Bucks',42,40);
var wizards = teamFactory('Washington Wizards',49,33);
var bulls = teamFactory('Chicago Bulls',41,41);



/*warriors.printOut();
jazz.printOut();
bucks.printOut();
wizards.printOut();
bulls.printOut();*/

nbaTeams.push(warriors);
nbaTeams.push(jazz);
nbaTeams.push(bucks);
nbaTeams.push(wizards);
nbaTeams.push(bulls);

for (i=0; i < nbaTeams.length; i++){
        nbaTeams[i].printOut();
    }



/* figure out where the for loop goes */

//use a for loop to go through the nbateams array and print out the teams.
//to access the correct function it will look like this:  nbaTeams[i].printOut();


//if you finish early, google how to sort javascript array of objects

});
 


/* if (nbaTeams[i].name === name){
if (nbaTeams[i].hasOwnProperty(wins)){
if (nbaTeams[i].hasOwnProperty(losses)){
    return nbaTeams[i][wins][losses];
   }else{
       return "No such team";
    }
  }
} */