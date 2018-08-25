var readLine=require('readline');
var utility=require('./utility/utility.js');
var read=readLine.createInterface(
  {
      input:process.stdin,
      output:process.stdout 
  }
);
function pseven()
{
    read.question("enter min value : ",function(min){
      read.question("enter max value :  ",function(max){
      
           utility.pseven(min,max);
           read.close();
      });
    });
}
pseven();
