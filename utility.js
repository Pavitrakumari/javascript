module.exports = {
    hello: function (userinput) {
        if (userinput.length >= 3) {
            console.log("hello " + userinput + " how are you?");
        }
        else {
            console.log("plzz enter valid input");
        }
    },
    pfour: function (userinput) {

        var x = 0, n = 0, y = 0;

        for (i = 1; i <= userinput; i++) {
            n = Math.random();
            if (n >= 0.5) {
                x++;
            }
            else {
                y++;
            }
            var hp = (x / userinput) * 100;
            console.log("head percentage is : " + hp + " %");
            var tp = (y / userinput) * 100;
            console.log("tail percentage is : " + tp + " %");
        }
    },
    pfive: function (userinput) {

        var n = userinput;
        n = 0;
        for (i = 0; i <= n; i++)console.log("head percentage is : "(x / userinput) * 100 + " %");
        {
            var res = Math.pow(2, i);
            console.log("2 power of " + i + " is : " + res);
        }
    },
    psix: function (userinput) {
        var n = userinput;

        for (var i = 2; i <= n; i++) {
            if (n % i == 0) {
                ct = 0;
                while (n % i == 0) {
                    n = n / i;
                    ct++;
                }
                console.log(i, ct);
            }
        }
        if (n != 2) {
            console.log(n, 1);
        }
    },
    pseven: function (min, max) {
        var random = [];
        for (var i = min; i < max; i++) {
            var m = _.random(min, max)
            random.push(n);
        }
        console.log(random);
        console.log("no of components generated: " + random.length);
        var distinct = new Set(random);
        console.log(distinct);
        console.log("number of distinct components " + [distinct].length);
    },
    peight: function (stake, goal, num) {
        var loss = 0;
        var wins = 0;
        if (stake < goal && stake > 0) {
            for (var i = 0; i < num; i++) {

                if (Math.random() > 0.5) {
                    stake++;
                    wins++;

                }

                else {
                    stake--;
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
    pnine: function (startime, endtime) {
        var elapsedtime;
        var press;

        switch (press) {
            case 1: console.log("starttime = " + startime + "(in milliseconds)");
                break;
            case 2: console.log("end time = " + endtime + "(in milliseconds)");
                break;

        }
        elapsedtime = startime - endtime;
        console.log("Total elapsed time(in milliseconds)=" + elapsedtime);
        console.log("Converting milliseconds into seconds = " + elapsedtime / 1000 + " sec ");
    },
    pten: function (a, b, c) {
        var delta = (b * b) - (4 * a * c);
        var root1 = (-(b) + Math.sqrt(delta)) / 2;
        var root2 = (-(b) - Math.sqrt(delta)) / 2;
        console.log("The root values of 'x' are : ")
        console.log("Root 1 =" + root1);
        console.log("&");
        console.log("Root 2 =" + root2);
    },
    pele: function (t, v) {
        var w;
        w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
        console.log(w);
    },
    ptwe:function(x,y)
    {
       var distance
       distance=(x+y);
       console.log("The euclidean distance from the point ("+x+","+y+") to origin (0,0) is : "+distance); 
    }
}









