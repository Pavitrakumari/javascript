var readline=require('readline');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function hello()
{
    read.question("enter year",function(userinput)
      {
           if(isNaN(userinput))
           {
               console.log("plzz enter only numeric value");
           }
           else
           {
                if(userinput.length==4)
                {
                      if(userinput%4==0 && userinput%100!=0 || userinput%400==0)/**
            only in this 3 conditions a year can be a leap year */
                      {
                           console.log("yes...it's a leap year");
                       }
                       else
                             console.log("no.....it's not a leap year");
                }
                else
                       console.log("enter 4 digit num");
                read.close();
            }
      }
    );
}
hello();        