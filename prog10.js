var readLine=require('readline');
var utility=require('./utility/utility.js');
var read=readLine.createInterface(
  {
      input:process.stdin,
      output:process.stdout 
  }
);
function pten()
{
    read.question("enter the value of 'a' : ",function(a) {
      read.question("enter the value of 'b' : ",function(b) {
          read.question("enter the value of 'c': ",function(c) {
                
                    utility.pten(a,b,c);
                    read.close();
          });

       });
    });

}
pten();