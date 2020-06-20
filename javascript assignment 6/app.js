document.writeln("<h1>Chapter 21-25</h1>");


            document.writeln("<h1>Q1</h1>");
            var first=prompt("enter your first name "),last=prompt("enter your last name ");
            var fullName=first +" "+last;
            document.writeln("<p> Welcome to the page "+fullName+"</p>");


            document.writeln("<h1>Q2</h1>");
            var b=prompt("input your favorite mobile phone model.");
            document.writeln("<p> My  favorite mobile is: "+b+"</p>");
            document.writeln("<p> Length of string: "+b.length+"</p>");



            document.writeln("<h1>Q3</h1>");
            var b="Pakistani";
            document.writeln("<p> String: "+b+"</p>");
            document.writeln("<p>index of n is: "+b.indexOf("n")+"</p>");


            document.writeln("<h1>Q4</h1>");
            var b="Hello World";
            document.writeln("<p> String: "+b+"</p>");
            document.writeln("<p>index of n is: "+b.lastIndexOf("l")+"</p>");

            document.writeln("<h1>Q5</h1>");
            var b="Pakistani";
            document.writeln("<p> String: "+b+"</p>");
            document.writeln("<p>character at index 3: "+b[3]+"</p>");

            document.writeln("<h1>Q6</h1>");
            var first=prompt("enter your first name "),last=prompt("enter your last name ");
            var fullName=first.concat(" ",last);
            document.writeln("<p> Welcome to the page "+fullName+"</p>");

            document.writeln("<h1>Q7</h1>");
            var b="Hyderabad";
            document.writeln("<p> city: "+b+"</p>");
            document.writeln("<p>after replacment: "+b.replace("Hyder","Islam")+"</p>");


            document.writeln("<h1>Q8</h1>");
            var message = "Ali and Sami are best friends. They play cricket and football together.";
            document.writeln("<p> message: "+message+"</p>");
            document.writeln("<p>after replacment: "+message.replace(/and/g,"&")+"</p>");

            document.writeln("<h1>Q9</h1>");
            var b="472";
            document.writeln("<p> value: "+b+"</p>");
            document.writeln("<p>type: "+typeof(b)+"</p>");
            document.writeln("<p> value: "+Number(b)+"</p>");
            document.writeln("<p>type: "+typeof(Number(b))+"</p>");



            document.writeln("<h1>Q10</h1>");
            var b=prompt("input any text.");
            document.writeln("<p> text entered: "+b+"</p>");
            document.writeln("<p> uppercase: "+b.toUpperCase()+"</p>");


            document.writeln("<h1>Q11</h1>");
            var b=prompt("input any text.");
            document.writeln("<p> text entered: "+b+"</p>");
            document.writeln("<p> title case: "+b[0].toUpperCase()+b.slice(1,)+"</p>");


            document.writeln("<h1>Q12</h1>");
            var num = 35.36 ,s=num.toString(); 
            document.writeln("<p> number: "+num+"</p>");
            document.writeln("<p> result: "+s.slice(0,2)+s.slice(3,)+"</p>");


            document.writeln("<h1>Q13</h1>");
            var a=prompt("enter your username"); 
            while(/[@.,!]/.test(a)){a=prompt("enter correct username",a); }
            document.writeln("<p> username: "+a+"</p>");




            document.writeln("<h1>Q14</h1>");
            var A = ["cake", "apple pie", "cookie", "chips", "patties"];
            var b=prompt("welcome to backery want some order ");
            var regex = new RegExp(b , "i");
            if(regex.test(A)){
                document.writeln("<p>"+b+" is available at "+A.indexOf(b)+"</p>");
            }
            else{
                document.writeln("<p> Sorry "+b+" is not available in our bakery</p>");
            }

            document.writeln("<h1>Q15</h1>");
            var b=prompt("enter your password");
            var regex = /[a-z][0-9]/i;
            if(!b.length<6){
                if(regex.test(b)){
                document.writeln("<p>password entered "+b+"</p>");
            }
                else{
                prompt("enter a valid password");
                }}
            else{
                prompt("enter a valid password");
            }



            document.writeln("<h1>Q16</h1>");
            var university = "University of Karachi";
            for (var i = 0; i < university.length; i++) {
                document.writeln("<p>"+university.charAt(i)+"</p>");;
                }


            document.writeln("<h1>Q17</h1>");
            var b=prompt("input any text.");
            document.writeln("<p> text entered: "+b+"</p>");
            document.writeln("<p> last character: "+b[b.length-1]+"</p>");



            document.writeln("<h1>Q18</h1>");
            var b="The quick brown fox jumps over the lazy dog"
            document.writeln("<p> text: "+b+"</p>");
            document.writeln("<p> there are "+b.match(/the/ig).length+" of the word 'the'</p>");





document.writeln("<h1>Chapter 26-30</h1>");
            document.writeln("<h1>Q1</h1>");
                    var a=+prompt("enter any positive number");
                    document.writeln("<p> number: "+a+"</p>");
                    document.writeln("<p> rounded: "+Math.round(a)+"</p>");
                    document.writeln("<p> ceil: "+Math.ceil(a)+"</p>");
                    document.writeln("<p> floor: "+Math.floor(a)+"</p>");




            document.writeln("<h1>Q2</h1>");
                    var a=+prompt("enter any negative floating-point number");
                    document.writeln("<p> number: "+a+"</p>");
                    document.writeln("<p> rounded: "+Math.round(a)+"</p>");
                    document.writeln("<p> ceil: "+Math.ceil(a)+"</p>");
                    document.writeln("<p> floor: "+Math.floor(a)+"</p>");





            document.writeln("<h1>Q3</h1>");
                    var a=+prompt("enter any number to find its absolute");
                    document.writeln("<p> absolute value of: "+a+" is "+Math.abs(a)+"</p>");





            document.writeln("<h1>Q4</h1>");
                    var dice=[1,2,3,4,5,6];
                    document.writeln("<p> random dice value: "+dice[Math.floor(Math.random() * dice.length)]+"</p>");


            document.writeln("<h1>Q5</h1>");
                    if(Math.ceil(Math.random() * 2)==1){
                        document.writeln("<p> 1</p>");
                        document.writeln("<p> random dice value: Tails</p>");
                    }else{
                        document.writeln("<p> 2</p>");
                        document.writeln("<p> random dice value: Heads</p>");
                    }
                    



            document.writeln("<h1>Q6</h1>");
                    document.writeln("<p> random value b/w 1 and 100: "+Math.ceil(Math.random() * 100)+"</p>");




            document.writeln("<h1>Q7</h1>");
                    var weight=prompt("enter your weight in kgs");
                    document.writeln("<p> weight of user is :  "+weight.slice(0,weight.search(/[a-z]/))+" kilograms</p>");
                    





            document.writeln("<h1>Q8</h1>");
                    var num = Math.ceil(Math.random() * 10);
                    const gnum = prompt('Guess the number between 1 and 10');
                    if (gnum == num)
                    document.writeln("<p> congratulations you guessed correct</p>");
                    else
                    document.writeln("<p>sorry try again. correct number was "+num+"</p>");
        






document.writeln("<h1>Chapter 31-34</h1>");
            document.writeln("<h1>Q1</h1>");
            var d= new Date();
            document.writeln("<p>"+d.constructor()+"</p>");



            document.writeln("<h1>Q2</h1>");
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            document.writeln("<p>"+months[d.getMonth()]+"</p>");      




            document.writeln("<h1>Q3</h1>");
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            document.writeln("<p>"+days[d.getDay()]+"</p>");    


            document.writeln("<h1>Q4</h1>");
                if(d.getDay()===0||d.getDay()===6){
                    document.writeln("<p>It's fun day</p>");   
                }

            document.writeln("<h1>Q5</h1>");
                if(d.getDate()<16){
                    document.writeln("<p>First fifteen days of the month</p>");   
                } 
                else{
                    document.writeln("<p>Last days of the month</p>");   
                }


            document.writeln("<h1>Q6</h1>");
            document.writeln("<p>current date: "+d.constructor()+"</p>");       
            document.writeln("<p>time elapsed in milliseconds 1 jan 1970: "+d.getTime()+"</p>");   
            document.writeln("<p>time elapsed in minutes since 1 jan 1970: "+d.getTime()/1000/60+"</p>");   


            document.writeln("<h1>Q7</h1>");
                if(d.getHours()<12){
                    alert("it's AM")
                    document.writeln("<p>it's AM</p>");   
                } 
                else{
                    alert("it's PM")
                    document.writeln("<p>it's PM</p>");   
                }



            document.writeln("<h1>Q8</h1>");
                var date=new Date(2020, 11, 31, 0, 0, 0, 0);
                document.writeln("<p>current date: "+date+"</p>");       




            document.writeln("<h1>Q9</h1>");
                var date=new Date(2015, 05, 18, 0, 0, 0, 0),diff=d.getTime()-date.getTime();

                document.writeln("<p>"+Math.floor(diff/1000/3600/24)+" days have been passed since 1st ramazan 2015</p>");


            document.writeln("<h1>Q10</h1>");
                var date=new Date(2015, 0, 1, 0, 0, 0, 0),diff=d.getTime()-date.getTime();
                document.writeln("<p>"+Math.floor(diff/1000)+" seconds have been passed since 1st jan 2015</p>");

            document.writeln("<h1>Q11</h1>");
                    var d = new Date();
                    d.setHours(d.getHours()+1);
                    document.writeln("<p>current time: "+d+"</p>"); 
                    d.setHours(d.getHours()-1);
                    document.writeln("<p>1 hour ago it was: "+d+"</p>"); 

            document.writeln("<h1>Q12</h1>");
                var d = new Date();
                var d1=new Date();   
                document.writeln("<p>current date: "+d+" </p>");
                d.setFullYear(d.getFullYear()-100);
                document.writeln("<p>100 years ago it was "+d+" </p>");
                alert("current date: "+d1+"\n 100 years ago it was "+d);


            document.writeln("<h1>Q13</h1>");
                var age=+prompt("enter your age ");
                var d=new Date();
                var ageYear=d.getFullYear()-age;   
                document.writeln("<p>your age is: <strong>"+21+"</strong></p>");
                document.writeln("<p>your birth year is: <strong>"+ageYear+"</strong></p>");



            document.writeln("<h1>Q14</h1>");
                document.writeln("<h1>K-electric Bill</h1>");
                document.writeln("<p>Customer name: <strong>Ikram Ullah Kakar</strong></p>");
                var d=new Date();
                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                document.writeln("<p>Month: <strong>"+months[d.getMonth()]+"</strong></p>");
                var units=410,charges=16,netcharges=units*charges,surcharge=350,grosscharge=netcharges+surcharge;
                document.writeln("<p>number of units: <strong>"+units+"</strong></p>");
                document.writeln("<p>charges per unit: <strong>"+charges+"</strong></p>");
                document.writeln("<p>number of units: <strong>"+netcharges+"</strong></p>");
                document.writeln("<p>charges per unit: <strong>"+surcharge+"</strong></p>");
                document.writeln("<p>charges per unit: <strong>"+grosscharge+"</strong></p>");



document.writeln("<h1>Chapter 35-38</h1>");

            document.writeln("<h1>Q1</h1>");
                function date(){
                    var d= new Date();
                    return document.writeln("<p>"+d.constructor()+"</p>");
                }
                date();

            
            document.writeln("<h1>Q2</h1>");
                function name(first,last){
                    
                    return document.writeln("<p>Welcome to the page "+(first+last)+"</p>");
                }
                name("Ikram", "Kakar");
            
            
            
            
            document.writeln("<h1>Q3</h1>");
                function add(first,last){
                    
                    return document.writeln("<p> "+first+" + "+last+" = "+(first+last)+"</p>");
                }
                var a=+prompt("enter first number"),b=+prompt("enter 2nd number to sum");
                add(a, b);
            
            
            document.writeln("<h1>Q4</h1>");
                function calculator(a,b,op){
                    if(op==="+"){
                        return a+b;
                    }
                    else if(op==="-"){
                        return a-b;
                    }
                    else if(op==="*"){
                        return a*b;
                    }
                    else if(op==="/"){
                        return a/b;
                    }
                    
                }
                var a=+prompt("enter first number"),b=+prompt("enter 2nd number to sum"),op=prompt("enter the operator to perform");
                var result=calculator(a,b,op);
                document.writeln("<p> "+a+" "+op+" "+b+" = "+result+"</p>");
                
            
            document.writeln("<h1>Q5</h1>");
                function square(a){
                    
                    return document.writeln("<p> "+a+" square  = "+(a*a)+"</p>");
                }
                var a=+prompt("enter a number to find its square");
                square(a);
            
            document.writeln("<h1>Q6</h1>");
            function fact(a){
                    var fact=1;
                    for(var i=1;i<=a;i++){
                        fact=fact*i;
                    }
                    return fact;
                }
                var a=+prompt("enter a number to find its factorial");
                var res=fact(a);
                document.writeln("<p>factorial of "+a+" is= "+res+"</p>");
            
            
            document.writeln("<h1>Q7</h1>");
            function count(first,last){
                var count=first;
                    for(var i=first;i<=last;i++){
                        document.writeln("<p> counting from "+first+" to "+last+" = "+(count)+"</p>");
                        count=count+1;
                        
                    }
                }
                var a=+prompt("enter a number to start counting from"),b=+prompt("enter a number to count till");
                count(a, b);
            
            
            
            document.writeln("<h1>Q8</h1>");
                function calculateHypotenuse(a,b){
                        function calculateSquare(a1){                
                            return a1*a1;
                        }
                        return Math.sqrt(calculateSquare(a)+calculateSquare(b));
                    
                }
                var a=+prompt("enter value of base"),b=+prompt("enter value of perpendicular");
                document.writeln("<p> hypotenuse of triangle is "+calculateHypotenuse(a,b)+"</p>");
                


            document.writeln("<h1>Q9</h1>");
                function area(a,b){
                    return a*b;           
                }
                var h=+prompt("enter height of rectangle"),w=+prompt("enter width for rectangle");
                document.writeln("<p> area of rectangle is "+area(3,3)+"    (arguments by value)</p>");
                document.writeln("<p> area of rectangle is "+area(h,w)+"    (arguments by variables)</p>");
            
            
            document.writeln("<h1>Q10</h1>");
            
                function pelindrome(a){
                    var x="";
                        for (var i=a.length-1;i>=0;i--) {
                            x=x+a[i];
                        }
                        if(a===x){
                            return document.writeln("<p>"+a+" is a pelindrome</p>");
                        }
                        else{
                            return document.writeln("<p>"+a+" is not a pelindrome</p>");
                        }
                }
                var a=prompt("enter string to check for pelindrome");
                pelindrome(a);
            
            document.writeln("<h1>Q11</h1>");
                function capitalize(a){
                    var c='';
                        var b=a.split(" ");
                        b.forEach(value=>{c=c+value[0].toUpperCase()+value.slice(1,)+" "});
                        return c;
                }var a=prompt("enter string to capatilize 1st character of each word");
                document.writeln("<p>"+capitalize(a)+" </p>");
                
                    
            
            document.writeln("<h1>Q12</h1>");
                function long_string(a){
                    
                        var b=a.split(" ");
                        var max = b[0];
                        var maxIndex = 0;

                    for (var i = 1; i < b.length; i++) {
                        if (b[i].length > max.length) {
                            maxIndex = i;
                            max = b[i];
                        } }
                    return max;
                }

                var a=prompt("enter a sentence to find longest word");
                document.writeln("<p>"+long_string(a)+" </p>");
                
            
            
            document.writeln("<h1>Q13</h1>");
                function occur(a,char){
                    
                    var b=new RegExp(char,'ig');
                    return document.writeln("<p> there are "+a.match(b).length+" occurences of the character "+char+"</p>");
                    
                }
                var a=prompt("enter any word/sentence");
                var b=prompt("enter a character to find tis occurences ");
                occur(a,b);
                
            
            document.writeln("<h1>Q14</h1>");
                function calcCircumference(r){
                    return document.writeln("<p> the circumference of the circle is "+(2*Math.PI*r)+"</p>");
                }
                function calcArea(r){
                    return document.writeln("<p> the area of the circle is "+(r*r)+"</p>");       
                    }
                var r=+prompt("enter radius of the circle ");
                calcCircumference(r);
                calcArea(r);






