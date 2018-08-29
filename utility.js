const _=require('lodash');
var prompt=require('prompt-sync')();
module.exports = {
    hello: function (userinput) {
        if (userinput.length >= 3) {
            console.log("hello " + userinput + " how are you?");
        }
        else {
            console.log("plzz enter valid input");
        }
    },







    /**FLIP COIN & PRINT PERCENTAGE OF HEADS & TAILS
    
     */
    pfour: function (userinput) {

        var x = 0, n = 0, y = 0;

        for (i = 1; i <= userinput; i++) {
            n = Math.random();/**
            generates random input & stores that random input in 'n' variable */
            if (n >= 0.5) {
                x++;//head count
            }
            else {
                y++;//tailcount
            }
        }
            var hp = (x / userinput) * 100;
            console.log("head percentage is : " + hp + " %");
            var tp = (y / userinput) * 100;
            console.log("tail percentage is : " + tp + " %");
        
    },






    /**
     * POWER OF 2
     */
    pfive: function (userinput) {

        var n = userinput;
        
        for (i = 0; i <= n; i++)
        {
            var res = Math.pow(2, i);/**
             * function to find power of a given number
             */
            console.log("2 power of " + i + " is : " + res);
        }
    },







/**
 * PRIME FACTORIZATION
 */
    psix: function (userinput) {
        var n = userinput;

        for (var i = 2; i <= n; i++) //for loop to iterate
        {
            if (n % i == 0)
             {
                ct = 0;
                while (n % i == 0)
                 {
                    n = n / i;
                    ct++;
                }
                console.log(i+"^"+ct);
            }
        }
        if (n != 2) {
            console.log(n+"^"+1);
        }
    },







    /**
     *COUPON NUMBER
     */
    pseven: function (min, max) {
        var random = [];
        var m;
        for (var i = min; i< max; i++) {
            var m = _.random(min, max)
            random.push(m);/**
            Push all the numbers between min & max using push function */
        }
        console.log(random);
        console.log("no of coupons generated: " + random.length);/**
         * prints all the numbers between min & max
         */
        var distinct = new Set(random);/**set function doesnot allow duplicate values */
        console.log("distinct components are : "+[...distinct]);/**
        prints all the distinct numbers between min & max  */
        console.log("number of distinct components " + [...distinct].length);/**
        dispaly the length of distinct coupon numbers
         */
    },









    /*PROGRAM FOR GAMBLER */
    peight: function (stake, goal, num) {
        var loss = 0;
        var wins = 0;
        if (stake < goal && stake > 0) {
            for (var i = 0; i < num; i++) {

                if (Math.random() > 0.5) {
                
                   wins++;

                }

                else {
                
                    loss++;
                }


            }
            console.log(wins + " out of " + num);
            console.log("Percentage of winning = " + (wins / num) * 100);
            console.log("Percentage of loosing = " + (loss / num) * 100);
        }

        else {
            console.log("plzz give goal greater than stake to gamble......")
        }
    },







    

    /*QUADRATIC EQUATION ROOTS*/
    pten: function (a, b, c) {
        var delta = (b * b) - (4 * a * c);
        var root1 = (-(b) + Math.sqrt(delta)) / 2;
        var root2 = (-(b) - Math.sqrt(delta)) / 2;
        console.log("The root values of 'x' are : ")
        console.log("Root 1 =" + root1);
        console.log("&");
        console.log("Root 2 =" + root2);
    },




    /*PROGRAM FOR WINDCHILL*/
    pele: function (t, v) {
        var w;
        if(t>50 || v<3 || v>120)
        {
            console.log("please enter valid 't' & 'v' values...")
        }
        else{
        w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);/**
        FORMULA FORCALCULATING WINDCHILL (effective temperature) */
        
        console.log(w);
        }
    },






    /**
     * DISTANCE IN JS
     */
    ptwe:function(x,y)
    {
       var distance
       distance=Math.pow(((x*x)+(y*y)),1/2);/**
       MATH.POW IS USED TO CALCULATE THE SQUARE ROOT  */
       console.log("The euclidean distance from the point ("+x+","+y+") to origin (0,0) is : "+distance); 
    },








    /*PROGRAM FOR TWO DIMENSIONAL ARRAY*/
    array:function(row)
    {
        var arr=new Array(row);
        var coloumn=prompt('enter no of coloumns');
        for(var i=0;i<row;i++)
        {
            arr[i]=new Array(coloumn);
            for(var j=0;j<coloumn;j++)
            {    
                arr[i][j]=prompt('enter element');

            }

        }
        console.log(arr);
    },









    /**PROGRAM FOR TRIPLETS*/
    
triplets:function(rows) {
    var arr = new Array(rows);//CREATES ARRAY FOR ROW
    var array1 = new Array();//CREATING EMPTY ARRAY
    //  var res='';
    for (var index = 0; index < rows; index++)
     {
        arr[index] = prompt("enter element now  : ");

    }
    for (var i = 0; i < arr.length-2; i++) {
        for (var j = i + 1; j < arr.length-1; j++) {
            for (var k = j + 1; k < arr.length; k++) {
                var sum =Number( arr[i]) +Number (arr[j]) +Number (arr[k]);//NUmber is a object allowing u to work with numerical value
                if (sum == 0) {
                    array1.push(arr[i] + ' , ' + arr[j] + ' , ' + arr[k]);

                }
            }
        }
    }
    
     var unique=new Set(array1);
    

     console.log("unique triplets are : [ "+[...unique]+" ] ");
},










/**
 * STRING PERMUTATIONS*/    
swap:function(starray,index1,index2)
{
    var temp=starray[index1];
    starray[index1]=starray[index2];
    starray[index2]=temp;
    return starray;
},
permute:function(starray,firstindex,endindex)
{
    if(firstindex===endindex)//it is a controlling statement
    {
        console.log(starray.join(''));/**
        join function is used to join character */
    }
    else
    {
        
        for(var i=firstindex;i<=endindex;i++)/**
        iteration starts  */
        {
            this.swap(starray,firstindex,i);
            this.permute(starray,firstindex+1,endindex);
            this.swap(starray,i,firstindex);//backtrack
        }
    }
    
},




}







