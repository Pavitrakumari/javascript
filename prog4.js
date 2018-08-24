
var readLine=require('readline');
var utility=require('./utility/utility.js');
var read=readLine.createInterface(
  {
      input:process.stdin,
      output:process.stdout 
  }
);
function pfour()
{
    read.question("enter how many times to flip coin",function(userinput)
      {
        utility.pfour(userinput);
        read.close();
      }
    );
}
pfour();