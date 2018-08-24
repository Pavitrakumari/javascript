var readline=require('readline');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout 
    }
);
function hello()
{
    read.question("enter a number upto which to print harmonic number",function(userinput)
    {   
        var p=1;
        for(i=2;i<=userinput;i++)
        {
             p=p+1.0/userinput;
        }
        console.log(p);
        read.close();
    }
    );
}
hello();