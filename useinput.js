var readline=require('readline');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function hello()
{
    read.question("enter your name : ",function(userinput)
      {

          

          if(isNaN(userinput))
          {
              if(userinput.length<3)//name should be greater than 3 characters
              {
                   console.log("name should have more than 3 characters");
              }
        
               else
               {
                   console.log("hello  " + userinput + "....... how are you ?");
                }
            }
           else
            {
                console.log("enter only string ");
            }

        
        read.close();
        }
        
      
   );
}

hello();
