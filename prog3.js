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
        res=1;
        for(var i=1;i<=userinput;i++)
        {
            res=res*i;
        }
        var p=0;
        for(j=1;j<=userinput;j++)
        {
             p=p+res/j;
        }
        console.log(p+"/"+res);
        read.close();
    }
    );
}
hello();