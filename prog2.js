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
        
        if(userinput.length==4)
        {
            if(userinput%4==0 && userinput%100!=0 || userinput%400==0)
             {
                 console.log("yes");
             }
             else
                  console.log("no");
        }
        else
        console.log("enter 4 digit num");
        read.close();
      }
    );
}
hello();        