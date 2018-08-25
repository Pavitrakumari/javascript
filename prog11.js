var readLine=require('readline');
var utility=require('./utility/utility.js');
var read=readLine.createInterface(
  {
      input:process.stdin,
      output:process.stdout 
  }
);
function pele()
{

    read.question("enter temperature 't'(in fahrenheit) value less than or equal to 50: ",function(t) {
      read.question("enter wind speed 'v'(miles per hour) value between 3 & 120: ",function(v) {
            utility.pele(t,v);
            read.close();
          });

      
    } );

}
pele();