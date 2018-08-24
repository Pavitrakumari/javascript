var readLine=require('readline');
var utility=require('./utility/utility.js');
var read=readLine.createInterface(
  {
      input:process.stdin,
      output:process.stdout 
  }
);
function psix()
{
    read.question("enter a number : ",function(userinput)
      {
        utility.psix(userinput);
        read.close();
      }
    );
}
psix();