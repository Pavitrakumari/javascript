var readline=require('readline');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function hello()
{
    read.question("enter your name",function(userinput)
      {
        console.log("hello "+userinput+" how are you?");
        read.close();
      }
    );
}
hello();
