var readLine=require('readline');
var utility=require('./utility/utility.js');
var read=readLine.createInterface(
  {
      input:process.stdin,
      output:process.stdout 
  }
);
function peight()
{
    read.question("enter stake : ",function(stake) {
      read.question("enter goal: ",function(goal) {
          read.question("enter no.of times: ",function(num) {
            utility.peight(stake,goal,num);
            read.close();
          });

      } );
    } );

    
}
      
peight();