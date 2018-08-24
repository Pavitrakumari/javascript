module.exports={
    hello : function(userinput)
    {
        if(userinput.length>=3)
        {
          console.log("hello "+userinput+" how are you?");
        }
        else
        {
           console.log("plzz enter valid input"); 
        }
    },
    pfour : function(userinput)
    {
        
        var x=0,n=0,y=0;
    
        for(i=1;i<=userinput;i++)
        {
            n=Math.random();
            if(n>=0.5)
            {
                x++;   
            }
            else
            {
                y++;
            }
            var hp=(x/userinput)*100;
            console.log("head percentage is : "+hp+" %");
            var tp=(y/userinput)*100;
            console.log("tail percentage is : "+tp+" %");
        }
    },
    pfive:function(userinput)
    {
           
        var n=userinput;
        n=0;
        for(i=0;i<=n;i++)console.log("head percentage is : "(x/userinput)*100+" %");
        {
            var res=Math.pow(2,i);
            console.log("2 power of "+i+" is : "+res);
        }
    },
    psix:function(userinput)
    {
        var n=userinput;
        
        for(i=2;i<=n;i++)
        {
            if(n%i==0)
            {
                ct=0;
                while(n%i==0)
                {
                    n=n/i;
                    ct++;
                }
                console.log(i,ct);
            }
        }
        if(n!=2)
        {
            console.log(n,1);
        }
            

    }    
}    
