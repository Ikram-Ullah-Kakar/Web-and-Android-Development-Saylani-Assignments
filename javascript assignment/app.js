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



