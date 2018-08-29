var readline=require('readline');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout 
    }
);
function hello()
{
    read.question("enter a number upto which to print harmonic number : ",function(userinput)
    {   
      var  res=0;
      /**
       * to run the loop
       */
        for(var i=1;i<=userinput;i++)
        {
            res=res+(1/i);
        }
        /**
         * to print the result
         */
        console.log(res);
        read.close();
    });
}
/**
 * function call
 */
hello();