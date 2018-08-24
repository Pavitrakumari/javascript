        
var readLine=require('readline');
var utility=require('./utility/utility.js');
var read=readLine.createInterface(
  {
      input:process.stdin,
      output:process.stdout 
  }
);
function pfive()
{
    read.question("enter number upto which to print power",function(userinput)
      {
        utility.pfive(userinput);
        read.close();
      }
    );
}
pfive();