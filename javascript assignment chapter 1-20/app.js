document.writeln("<h1>Chapter 1</h1>");

        //q1
        alert("Welcome to page");
        //q2
        alert("Error! please enter a valid password");
        //q3
        alert("Welcome to JS Land \nHappy Coding!");
        //q4
        alert("Welcome to JS Land ");
        //q5
        alert("Happy Coding!");
        q//6
        console.log(alert("Hello! i can use JS in console"))
        //q7
        alert("before html")  // written inplace in html file
        alert("mid of html")
        alert("after html")


document.writeln("<h1>Chapter 2</h1>");
        //q1
        var username;
        //q2
        var myName="ikram kakar";
        //q3
        var message="Hello World";
        alert(message);
        //q4
        var name=prompt("your name"),age=prompt("your age");
        alert(name);
        alert(age+" years old");
        alert("certified web developer")
        //q5
        var a="PIZZA";
        alert(a+"\n"+a.slice(0,a.length-1)+"\n"+a.slice(0,a.length-2)+"\n"+a.slice(0,a.length-3)+"\n"+a.slice(0,a.length-4));
        //q6
        var email="ikram_kakar1@yahoo.com";
        alert("your email is "+email);
        //q7
        var book="i am trying to learn from the book 'A smarter way to learn JavaScript'";
        alert(book);
        //q8
        document.writeln("<p>Yeah I can write HTML through JS</p>");
        //q9
        alert("==================@#<>#@==================");



document.writeln("<h1>Chapter 3</h1>");

        document.writeln("<h1>Q1</h1>");
        var age;
        age=20;
        alert("your age is "+age);

        document.writeln("<h1>Q2</h1>");
        var visit=0;
        visit+=1;
        alert("you visited this site "+visit+" times");

        document.writeln("<h1>Q3</h1>");
        var birthYear=21;
        document.writeln("<p>my birth year is "+birthYear+"</p><p>Data type of declared variable is number </p>" );

        document.writeln("<h1>Q4</h1>");
        var name=prompt("enter your name"),product=prompt("enter product name"),quantity=prompt("enter number of items");
        document.writeln("<strong>"+name+"</strong> ordered <strong>"+quantity+" "+product+"</strong> on XYZ Clothing store");

       

document.writeln("<h1>Chapter 4</h1>");

        document.writeln("<h1>Q1</h1>");
        document.writeln("<p><strong>var</strong> name , age , designation ;</p>");
        var name,age,designation;


        document.writeln("<h1>Q2</h1>");
        document.writeln("<h4>legal variables</h4>");
        document.writeln("<p><strong>var</strong> price , $price , _price , pricePak , price_pak1 ;</p>");

        document.writeln("<h4>illegal variables</h4>");
        document.writeln("<p><strong>var</strong> pri ce , 1price , var , price&Pak , price-pak1 ;</p>");
        

        document.writeln("<h1>Q3</h1>");
        document.writeln(`<h1>Rules for naming JS variables</h1>
            <p></p>
            <p>variable names can only contain letters, numbers, _ , and $ signs.   For example $my_1stVariable</p>
            <p>variable names must begin with a letter, $ and _ . For example $name, _name or name</p>
            <p>variable names are case sensitive</p>
            <p>variable names should not be JS keywords</p>`);




document.writeln("<h1>Chapter 5</h1>");

    document.writeln("<h1>Q1</p>");

        var a=prompt("enter any integer "),b=prompt("enter second integer ");
        document.writeln("<p>the sum of "+a+" and "+b+" is "+(a+b)+"</p>");


        document.writeln("<h1>Q2</p>");

        document.writeln("<p>the substraction of "+a+" and "+b+" is "+(a-b)+"</p>");
        document.writeln("<p>the multiplication of "+a+" and "+b+" is "+(a*b)+"</p>");
        document.writeln("<p>the division of "+a+" and "+b+" is "+(a/b)+"</p>");
        document.writeln("<p>the modulus of "+a+" and "+b+" is "+(a%b)+"</p>");


        document.writeln("<h1>Q3</p>");
        
            var a;
            document.writeln("<p>Value after variable declaration is:"+a+"</p>");
            a=5;
            document.writeln("<p>initial Value is:"+a+"</p>");
            a+=1;
            document.writeln("<p>Value after increment is:"+a+"</p>");
            a+=7;
            document.writeln("<p>Value after addition is:"+a+"</p>");
            a-=1;
            document.writeln("<p>Value after decrement is:"+a+"</p>");
            a/=3;
            document.writeln("<p>The remainder is:"+a+"</p>");
            


        document.writeln("<h1>Q4</p>");
        
        var a=600;
        document.writeln("<p>Total cost to buy 5movie tickets are:"+a*5+"PKR</p>");



        document.writeln("<h1>Q5</h1>");

        a=prompt("enter any number to show its table ");
        document.writeln("<p>table for "+a+" is:</p>");
        for (var i=1;i<=10;i++) {
            document.writeln("<p>"+a+" * "+i+" ="+a*i+"</p>");
        };


        document.writeln("<h1>Q6</h1>");

        a=prompt("enter temperature in degree Celsius ");
        document.writeln("<p>"+a+"`F is: "+((9/5*a)+32)+"</p>");
        a=prompt("enter temperature in Fahrenheit ");
        document.writeln("<p>"+a+"`C is: "+(5/9*(a-32))+"`F</p>");

        
        document.writeln("<h1>Q7</h1>");

        var p1=900,p2=800,q1=8,q2=3,Shipping=100;
        document.writeln("<h1>Shopping cart</h1>");
        document.writeln("<p>Price of item 1 is: "+p1+"</p>");
        document.writeln("<p>Ordered quantity of item 1 is: "+q1+"</p>");
        document.writeln("<p>Price of item 2 is: "+p2+"</p>");
        document.writeln("<p>Ordered quantity of item 2 is: "+p1+"</p>");
        document.writeln("<p>Shipping charges are: "+Shipping+"</p>");
        document.writeln("<p>total cost of your order is: "+((p1*q1)+(p2*q2)+Shipping)+"</p>")

        
        document.writeln("<h1>Q8</h1>");

        var total=+prompt("enter total marks of subject");
        var marks=+prompt("enter marks obtained in subject ");
        document.writeln("<h1>Marks Sheet</h1>");
        document.writeln("<p>total marks: "+total+"</p>");
        document.writeln("<p>marks obtained: "+marks+"</p>");
        document.writeln("<p>Your percentage marks are : <strong>"+(marks/total*100)+"%"+"</strong></p>");
        

        document.writeln("<h1>Q9</h1>");
        
        var dollars=10,riyals=25;
        document.writeln("<h1>currency in PKR</h1>");
        document.writeln("<p>total currency in PKR is : "+((dollars*104.80)+(riyals*28))+"</p>");



        document.writeln("<h1>Q10</h1>");
        
        var s=10;
        document.writeln("<p>result of (number+5)*10/2 is : "+((s+5)*10/2)+"</p>");



        document.writeln("<h1>Q11</h1>");
        
        var current=2020,birth=1998;
        document.writeln("<h1>Age Calculator</h1>");
        document.writeln("<p>current year is : "+current+"</p>");
        document.writeln("<p>birth year is : "+birth+"</p>");
        document.writeln("<p>your age is : "+(current-birth)+"</p>");



        document.writeln("<h1>Q12</h1>");
        
        var radius=prompt("enter radius of circle");
        document.writeln("<h1>Geometrizer</h1>");
        document.writeln("<p>radius of circle is : "+radius+"</p>");
        document.writeln("<p>circumference of circle is : "+(2*3.14*radius)+"</p>");
        document.writeln("<p>area of circle is : "+(3.14*radius*radius)+"</p>");


        document.writeln("<h1>Q13</h1>");
        
        var snack="chips",age=22,max=60,item=3;
        document.writeln("<h1>Lifetime Supply Calculator</h1>");
        document.writeln("<p>favorite snack is : "+snack+"</p>");
        document.writeln("<p>current age is : "+age+"</p>");
        document.writeln("<p>maximum age is : "+marks+"</p>");
        document.writeln("<p>estimated snacks per day : "+item+"</p>");
        document.writeln("<p>You will need "+((max-age)*item)+" "+snack+" to last you until the ripe old age of  "+max+"</p>");






document.writeln("<h1>Chapter 6-9</h1>");

        document.writeln("<h1>Q1</h1>");
        var a=prompt("enter any integer value");
        
        document.writeln("<p>Result:</p><br><p><p>the value of a is: "+a+"</p>");
        document.writeln("<br>");
        document.writeln("<p>the value of ++a is: "+(++a)+"</p>");
        document.writeln("<p>Now the value of a is: "+a+"</p>");
        document.writeln("<br>");
        document.writeln("<p>the value of a++ is: "+(a++)+"</p>");
        document.writeln("<p>Now the value of a is: "+a+"</p>");
        document.writeln("<br>");
        document.writeln("<p>the value of --a is: "+(--a)+"</p>");
        document.writeln("<p>Now the value of a is: "+a+"</p>");
        document.writeln("<br>");
        document.writeln("<p>the value of a-- is: "+(a--)+"</p>");
        document.writeln("<p>Now the value of a is: "+a+"</p>");
        
        document.writeln("<h1>Q2</h1>");
        var a = 2, b = 1; 
        var result = --a - --b + ++b + b--;
        document.writeln("<p>output in variable a= "+a+"</p>");
        document.writeln("<p>output in variable b= "+b+"</p>");
        document.writeln("<p>output in variable result= "+result+"</p><br>");
        document.writeln(`<p>output of <strong>--a</strong> is 1</p>
            <p>output of <strong>--a - --b</strong> is 1</p>
            <p>output of <strong> --a - --b + ++b</strong> is 2</p>
            <p>output of <strong>--a - --b + ++b + b--</strong> is 3</p>`);


    document.writeln("<h1>Q3</h1>");
        var uname=prompt("what is your name ");
        alert("welcome "+uname);

        document.writeln("<h1>Q5</h1>");
        var a=prompt("enter any number to display its multiplication table",5);
        for (var i=1;i<=10;i++) {
            document.writeln("<p>"+a+" * "+i+" = "+a*i+"</p>");
        };

        document.writeln("<h1>Q6</h1>");
        var sub1=prompt("enter your subject 1"),sub2=prompt("enter your subject 2"),sub3=prompt("enter your subject 3");
        var total=prompt("enter total marks of subject");
        var marks1=prompt("enter marks obtained in "+sub1),marks2=prompt("enter marks obtained in "+sub2),marks3=prompt("enter marks obtained in "+sub3);

        document.writeln(`<table>
        <tr>
            <th>Subjects</th>
            <th>Total marks</th>
            <th>Obtained marks</th>
            <th>Percentage</th>
        </tr>
        <tr>
            <td>`+sub1+`</td>
            <td>`+total+`</td>
            <td>`+marks1+`</td>
            <td>`+marks1/total*100+"%"+`</td>
        </tr>
        <tr>
            <td>`+sub2+`</td>
            <td>`+total+`</td>
            <td>`+marks2+`</td>
            <td>`+marks2/total*100+"%"+`</td>
        </tr>
        <tr>
            <td>`+sub3+`</td>
            <td>`+total+`</td>
            <td>`+marks3+`</td>
            <td>`+marks3/total*100+"%"+`</td>
        </tr>
        <tr>
            <td></td>
            <td><strong>`+total*3+`</strong></td>
            <td><strong>`+(marks1+marks2+marks3)+`</strong></td>
            <td><strong>`+((marks1/total*100)+(marks2/total*100)+(marks3/total*100))/3+"%"+`</strong></td>
        </tr>
    </table>`);



document.writeln("<h1>Chapter 9-11</h1>");

            document.writeln("<h1>Q1</h1>");
            var a=prompt("enter name of a city").toLowerCase();
            if(a==="karachi"){
                alert("welcome to the city of lights");
            }



            document.writeln("<h1>Q2</h1>");
            var a=prompt("enter your gender").toLowerCase();
            if(a==="male"){
                document.writeln("Good Morning Sir");
            }
            if(a==="female"){
                document.writeln("Good Morning Ma`am");
            }




            document.writeln("<h1>Q3</h1>");
            var a=prompt("enter color of road traffic signal").toLowerCase(),message;
            if(a==="red"){
                message="Must stop";
            }
            if(a==="green"){
                message="Move now";
            }
            if(a==="yellow"){
                message="Ready to move";
            }
            document.writeln(message)



            document.writeln("<h1>Q4</h1>");
            var a=+prompt("enter remaining fuel in liters");
            if(a<0.25){
                document.writeln("<p>Please refill the fuel in your car</p>");
            }




            document.writeln("<h1>Q5</h1>");

            var a = 4; 
            if (++a === 5){ alert("given condition for variable a is true"); }

            var b = 82; 
            if (b++ === 83){ alert("given condition for variable b is true");}

            var c = 12; 
            if (c++ === 13){ alert("condition 1 is true"); } 
            if (c === 13){ alert("condition 2 is true"); } 
            if (++c < 14){ alert("condition 3 is true"); } 
            if(c === 14){ alert("condition 4 is true"); }

            var materialCost = 20000; 
            var laborCost = 2000; 
            var totalCost = materialCost + laborCost; 
            if (totalCost === laborCost + materialCost){ alert("The cost equals"); }

            if (true){ alert("True"); }
            if (false){ alert("False");}

            if("car" < "cat"){ alert("car is smaller than cat");}


            document.writeln("<h1>Q6</h1>");


            var total=+prompt("enter total marks of subject");
            var marks=+prompt("enter marks obtained in subject "),percentage=marks/total*100,grade,remarks;
            document.writeln("<h1>Marks Sheet</h1>");
            document.writeln("<p>total marks: "+total+"</p>");
            document.writeln("<p>marks obtained: "+marks+"</p>");
            document.writeln("<p>Your percentage marks are : <strong>"+percentage+"%"+"</strong></p>");
            if(percentage>=80){
                grade="A-one";
                remarks="Excellent";
            }else if(percentage>=70){
                grade="A";
                remarks="Good";
            }else if(percentage>=60){
                grade="B";
                remarks="You need to improve";
            }else if(percentage<60){
                grade="fail";
                remarks="sorry";
            }
            document.writeln("<p>Grade: "+grade+"</p>");
            document.writeln("<p>Remarks: "+remarks+"</p>");



            document.writeln("<h1>Q7</h1>");

            var secret=8;
            var guess=+prompt("guess any number b/t 0-10");

                if(guess===secret){
                    document.writeln("<p>you guessed the correct number : "+secret+"</p>");
            }
            else {
                document.writeln("<p>you guessed a wrong number : "+guess+"</p>");
            }


            document.writeln("<h1>Q8</h1>");

            var num=+prompt("enter any number");

            if(num%3==0){
                document.writeln("<p>number is divisible by 3 </p>");
            }
            else{
                document.writeln("<p>number is not divisible by 3 </p>");
            }

            document.writeln("<h1>Q9</h1>");

            var num=+prompt("enter any number");

            if(num%2==0){
                document.writeln("<p>number is even </p>");
            }
            else{
                document.writeln("<p>number is odd </p>");
            }


            document.writeln("<h1>Q10</h1>");

            var num=+prompt("enter temperature");
            if(num>40){document.writeln("<p>It is too hot outside </p>");}
            else if(num>30){document.writeln("<p>The Weather today is Normal</p>");}
            else if(num>20){document.writeln("<p>Today’s Weather is cool </p>");}
            else if(num>40){document.writeln("<p>OMG! Today’s weather is so Cool</p>");}



            document.writeln("<h1>Q11</h1>");

            var num1=+prompt("enter first number");
            var num2=+prompt("enter second number");
            var op=prompt("enter operator + - * / % ");
            if(op==="+"){document.writeln("<p>"+num1+" "+op+" "+num2+" is "+num2+num1+"</p>");}
            else if(op==="-"){document.writeln("<p>"+num1+" "+op+" "+num2+" is "+num2-num1+"</p>");}
            else if(op==="*"){document.writeln("<p>"+num1+" "+op+" "+num2+" is "+num2*num1+"</p>");}
            else if(op==="/"){document.writeln("<p>"+num1+" "+op+" "+num2+" is "+num2/num1+"</p>");}
            else if(op==="%"){document.writeln("<p>"+num1+" "+op+" "+num2+" is "+num2%num1+"</p>");}




document.writeln("<h1>Chapter 12-13</h1>");


        document.writeln("<h1>Q1</h1>");
        var match_u_case=/[A-Z]/,match_l_case=/[a-z]/,match_number=/[0-9]/;
        var inp=prompt("enter any character (string/number)");
        if(!inp.search(match_u_case)){
            document.writeln("<p>you entered a upper case letter</p>");
        }
        if(!inp.search(match_l_case)){
            document.writeln("<p>you entered a lower case letter</p>");
        }
        if(!inp.search(match_number)){
            document.writeln("<p>you entered a number</p>");
        }


        document.writeln("<h1>Q2</h1>");
        var a=prompt("enter first integer"),b=prompt("enter second integer");
        if(a===b){
            document.writeln("<p>both numbers are equal</p>");
        }
        if(a<b){
            document.writeln("<p>largest number is "+b+"</p>");
        }
        if(a>b){
            document.writeln("<p>largest number is "+a+"</p>");
        }


        document.writeln("<h1>Q3</h1>");
        var a=+prompt("enter any integer");
        if(a===0){
            document.writeln("<p>number is zero</p>");
        }
        else if(a<0){
            document.writeln("<p> "+a+" is negative number</p>");
        }
        else{
            document.writeln("<p> "+a+" is positive number</p>");
        }
        

        document.writeln("<h1>Q4</h1>");
        var match=/[AEIOU]/i;
        var inp=prompt("enter any character (string)");
        if(!inp.search(match)){
            document.writeln("<p>character is a vowel</p>");
        }
        else{
            document.writeln("<p>character is not a vowel</p>");
        }



        document.writeln("<h1>Q5</h1>");
        var match_pass="kakar1";
        var pass=prompt("enter the correct password");
        while(pass===""){
            pass=prompt("enter the correct password","please enter your password");
        }
        if(pass===match_pass){
            alert("you entered the correct password");
        }
        else{
            alert("you entered a wrong password");
        }


        document.writeln("<h1>Q6</h1>");
        var greeting; 
        var hour = 13; 
        if (hour < 18) { greeting = "Good day"; 
    }
        else{ greeting = "Good evening";
        }
        document.writeln("<p>"+greeting+"</p>");


        document.writeln("<h1>Q7</h1>");
        var message; 
        var time = +prompt("enter time in 24 hour format i.e 1900=7pm"); 
        if (time>=0000&&time<1200) { message = "Good morning!"; 
        }
        else if (time>=1200&&time<1700) { message = "Good afternoon"; 
        }
        else if (time>=1200&&time<1700) { message = "Good afternoon"; 
        }
        else if (time>=1700&&time<2100) { message = "Good evening"; 
        }else if (time>=2100&&time<2359) { message = "Good night"; 
        }
        document.writeln("<p>"+message+"</p>");




document.writeln("<h1>Chapter 14-16</h1>");






document.writeln("<h1>Chapter 17-20</h1>");


        document.writeln("<h1>Q1</h1>");
        var a=[[]]; 
        document.writeln("<p>"+a+"</p>");

        document.writeln("<h1>Q2</h1>");
        var b=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
        document.writeln("<p>"+b[0]+"</p><p>"+b[1]+"</p><p>"+b[2]+"</p>");

        document.writeln("<h1>Q3</h1>");
        var x=[1,2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (const c of x) {
            document.writeln("<p>"+c+"</p>");
        };

        document.writeln("<h1>Q4</h1>");
        var a=prompt("enter any number to find its table");
        var b=prompt("enter lenght for the table");
        for (var i=1;i<=b;i++) {
            document.writeln("<p>"+a+" * "+i+" ="+a*i+"</p>");
        };

        document.writeln("<h1>Q5</h1>");
        var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
        for (const c of fruits) {
            document.writeln("<p>"+c+"</p>");
        };
        document.writeln("<br>");
        for (const c in fruits) {
            document.writeln("<p>element at index "+c +" is "+fruits[c]+"</p>");
        };

        document.writeln("<h1>Q6</h1>");
        document.writeln("<h3>counting</h3>");
        for (var i=1;i<=15;i++) {
            document.writeln(i+", ");
        };
        document.writeln("<h3>reverse counting</h3>");
        for (var i=10;i>=1;i--) {
            document.writeln(i+", ");
        };
        document.writeln("<h3>even numbers</h3>");
        for (var i=0;i<=20;i++) {
            if(i%2==0){
                document.writeln(i+", ");
            }
        };
        document.writeln("<h3>odd numbers</h3>");
        for (var i=0;i<=20;i++) {
            if(i%2!=0){
                document.writeln(i+", ");
            }
            
        };
        document.writeln("<h3>series numbers</h3>");
        for (var i=1;i<=20;i++) {
            if(i%2==0){
                document.writeln(i+"k, ");
            }
        };

        document.writeln("<h1>Q7</h1>");
        var A = ["cake", "apple pie", "cookie", "chips", "patties"];
        var b=prompt("enter to check for availibility of item");
        
        if(A.indexOf(b)===-1){
            document.writeln("<p>"+b+" is not available in bakery</p>");
        }else{  
            document.writeln("<p>"+b+" is available at index "+A.indexOf(b)+" in bakery</p>");
        }
        
        document.writeln("<h1>Q8</h1>");
        var A = [24, 53, 78, 91, 12],b=0;
        document.writeln("<p>Array items "+A+" </p>");
        for(x of A){
            if(x>b){
                b=x;
            }
        }document.writeln("<p>"+b+" is the largest number </p>");

        document.writeln("<h1>Q9</h1>");
        var A = [24, 53, 78, 91, 12],b=999999;
        document.writeln("<p>Array items "+A+" </p>");
        for(x of A){
            if(x<b){
                b=x;
            }
        }document.writeln("<p>"+b+" is the smallest number </p>");

        document.writeln("<h1>Q10</h1>");
        for (var i=1;i<=20;i++) {
            document.writeln(5*i+",");
        };



