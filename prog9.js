var readLine=require('readline');
var utility=require('./utility/utility.js');
var read=readLine.createInterface(
  {
      input:process.stdin,
      output:process.stdout 
  }
);
function pnine()
{

    read.question("enter startime: ",function(startime) {
      read.question("enter endtime: ",function(endtime) {
            utility.pnine(startime,endtime);
            read.close();
          });

      
    } );

}
pnine();