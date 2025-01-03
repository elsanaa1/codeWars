
// """""""""""""""""""""""""""""Wharming Up"""""""""""""""""""""""""""""""""""
//Vowel count:
//  Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// Solution:
function countv(word){
    let tab=word.split("")
    let count=0
    for( let c of tab){
      if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u')
        { count++;}
    }
   return count;

}



// Even or odd:
// Create a function that takes
// an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// Solution:
function ev_odd(num){

if(num%2==0){
    return "Even"
}else{
    return "odd"
}

}

// Get the middle caracter:
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Solution:
function middchar(word){
    let len=word.length;
    let div=len/2;
    if(Number.isInteger(div)){
        let midd=word[Math.trunc(div)-1]
        let midd2=word[Math.trunc(div)]
        return midd+","+midd2
    }else{
            let midd=word[Math.trunc(div)]
             return midd
    }
}


// Opposite number:
// Very simple, given a number (integer / decimal / both depending on the language),
//  find its opposite (additive inverse).
// Solution:

function opposNum(num){
    let sign=Math.sign(Number(num))
    if(sign==0)
    {
         return num;
    }else if(sign==1){
        return "-"+num;
    }
    else{
        return Math.abs(Number(num));
    }
}

// Mumbling:
//his time no story, no theory. The examples below show you how to write function accum:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(word){
    let newWord="";
    let resultTab=[];//table of mumbling words
   for(let i=1;i<=word.length;i++){
        // repeat i times every caracter
        for(let j=1;j<=i;j++){
            if(j==1)
             {
                newWord+=word[i-1].toUpperCase()
             }else{
              newWord+=word[i-1]
              }
       }
       resultTab.push(newWord)
       newWord=""

    }

     let resultWord=resultTab.join("-")
     return resultWord

}

//You're a square!:
// Given an integral number, determine if it's a square number:
function isSquare(num){

let sq=Math.sqrt(Number(num));
if(Number.isInteger(sq)){
    return true
 }else{
     return false
 }
}


// Disemvowel Trolls:
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.
function trollF(word){
let regex=new RegExp("[aeiuoAOIUO]",'g')
let res=word.replace(regex,'')
return res;
}


// Highest and Lowest:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Output string must be two numbers separated by a single space, and highest number is first.

function highLow(w){
    let tab=w.split(" ")
    for(let i=0;i<tab.length;i++){
        tab[i]=Number.parseInt(tab[i]);
    }
    let max= Math.max(...tab)
    let min= Math.min(...tab)
    return max+" "+min;
    }


    // Exes and Ohs:
    // Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.
    //  The string can contain any char.
    //  Examples input/output: XO("ooxx") => true
    function exesOhs(w){
        let countX=0;
        let countO=0;
        for ( let i=0;i<=w.length-1;i++){

            if(w[i]=='o' || w[i] == 'O') {countO++}
            if( w[i]=='x' ||w[i]=='X') {countX++}
        }
        if(countX == countO ){ return true}
        else{ return false }
        }

        // Square Every Digit:
        function squarDigits(word){
            let tab=word.split("")
            let tabRes=[]
            for(let e of tab){
                tabRes.push(Number(e)*Number(e));
            }
            let resWord=tabRes.join("")
            return resWord
        }

        // Shortest Word  :
        // Simple, given a string of words, return the length of the shortest word(s).
        function shortestW(s){
            let tabWords=s.split(" ")
            let tabLengths=[]
            for(e of tabWords ){
                tabLengths.push(e.length);
            }
            let  minLenght=Math.min(...tabLengths)
            return minLenght
        }

        // Complementary DNA:
        // Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the
        // "instructions" for the development and functioning of living organisms."ATTGC" --> "TAACG"
        function compDNA(w){
            let complW=""
            for (let i=0;i<=w.length;i++){
                if(w[i]=='A'){complW+='T'}
                else if(w[i]=='T'){complW+='A'}
                else if(w[i]=='C'){complW+='G'}
                else if(w[i]=='G'){complW+='C'}
            }
            return complW;
        }
        // Descending Order:
        // Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
        // Essentially, rearrange the digits to create the highest possible number.
        function descendOrder(w){
            let tab = w.toString().split("")
            tab.sort(function(a,b){return b-a })
            let res=tab.join("")
            return res;
                    }

        // Sum of positive :
        // You get an array of numbers, return the sum of all of the positives ones.
        function sumPosit(arrNum){
           let sum=0
                 for(e of arrNum){
                            if (Math.sign(e)==1){
                                sum+=e;
                            }
                 }
             return sum;
        }
        //Isograms :

        // An isogram is a word that has no repeating letters, consecutive or non-consecutive.
        // Implement a function that determines whether a string that contains only letters is an isogram.
        // Assume the empty string is an isogram. Ignore letter case.
        function isogrF(w){
            let sortedtab=w.split('')
            for(let i=0;i<=sortedtab.length-1;i++){
            sortedtab[i]=sortedtab[i].toLowerCase()
            }
        sortedtab.sort()
            console.log(sortedtab)
            for(let i=0;i<=sortedtab.length-1;i++){
            if(sortedtab[i]==sortedtab[i-1] ||sortedtab[i]==sortedtab[i+1]){
                    return false
                }
            }
            return true
        }

        // List Filtering:
        // In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
        function listFilter(lis){
            let intList=[]
            for(e of lis){
                if(Number.isInteger(e)){
                    intList.push(e)
                }
            }
            return intList
        }

        //Find the smallest integer in the array
        function smallestInt(lis){
            let min=Math.min(...lis)
            return min;
        }

        // Sum of two lowest positive integers
        // Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
        //  No floats or non-positive integers will be passed.
        function sumTwoLowest(arr){
            let min=Math.min(...arr)
            let indx=arr.indexOf(min)
            arr.splice(indx,1)
           let min2=Math.min(...arr)
           return min+min2
        }
        // Growth of a Population:
        // p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
        // the function nb_year should return n number of entire years needed to get a population greater or equal to p.
        // aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
        // Examples:
        // nb_year(1500, 5, 100, 5000) -> 15

        function nb_year(p0, percent, aug,p){
            let nbr_p=p0;
            percent=percent/100;
            let nb_y=0
            while(nbr_p<p){
                nbr_p=nbr_p+ nbr_p *percent+ aug
                nb_y++;
            }
            return nb_y;

        }
        // String repeat,
        // Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
        function repeatS(s,n){
            let i=1
            let sum=""
         while(i<=n){
            sum=s+sum
            i++
        }
         return sum
        }
        // """"""""""""""""""""""Algorithms""""""""""""""""""""""""""""""""
        // Is this a triangle?
        function isTriangle(a,b,c){
            if(a+b>c &&b+c>a&& a+c>b){return true}
            return false
        }
        // Find the next perfect square!
        function findNextSquare(num){
            if (Number.isInteger(Math.sqrt(num))){
                   let next= Math.sqrt(num) + 1
                   next=next * next;
                    return next
            }
            else
             { return -1}

            }


            // Credit Card Mask:

            function maskify(num){
                let tab=num.split("")
                 let newNum=[];
                for ( let i= tab.length-1 ;i>=0;i--){
                    if (i==tab.length-1 || i==tab.length-2||i==tab.length-3||i==tab.length-4){

                       newNum.unshift(tab[i])
                    }
                    else{
                          newNum.unshift("#")

                    }
                }
                    return newNum.join("")
                }



                // Sum of odd numbers
                function sumOddTrian(n){
    
                        let firstN=n*(n-1)+1
                        let sum=firstN
                        // rest n-1 numbre
                        let newNbre=firstN;
                        for(let i=2;i<=n;i++){
                        newNbre=newNbre+2
                        sum+=newNbre
                        }
                        return sum
                    }

                // Find the divisors!
                function divisors(n){

                    let tabRes = [];
                     for(let i = 2; i < n; i++) {
                        if( n % i == 0) {
                         tabRes.push(i)
                         }
                     }
                     if(tabRes.length==0){ return n+" is prime";}
                     else{
                        tabRes.sort((a, b) => a - b);
                        return tabRes
                       }
                    }
    //    """"""""""""""""""""""""" Data types """"""""""""""""""""""
    // Return Negative:
    function returNegativ(num){
        let sign=Math.sign(Number(num))
        if(sign==0)
        {
             return num;
        }else if(sign==1){
            return "-"+num;
        }
        else{
            return Math.abs(Number(num));
        }
    }

    // Remove First and Last Character:
    function removFirstLast(s){
        let tabS=s.split("")
        tabS.splice(tabS.length-1,1);
        tabS.splice(0,1);
       return tabS.join("")
    }
    // Remove String Spaces
    // Write a function that removes the spaces from the string, then return the resultant string.
    function removWhiteSpace(s){
        let tabS=""
        for(let i=0;i<=s.length-1;i++){
            if(s[i]==" "){}
            else{tabS+=s[i] }
        }

       return tabS
    }
    // Convert boolean values to strings 'Yes' or 'No'.
    function boolConv(bool){
        if(bool==true){ return "Yes"}
        else if(bool==false){return "No"}
    }
    // Convert a Number to a String!
    function numToS(num){
        let s=num.toString()
        return s
    }

    // """""""""""""""""""""""""""""""""NUmbers"""""""""""""""""""""
    // Basic Mathematical Operations
    function mathOper(a,b,op){
        if(op=='+'){return a+b}
        else if(op=='-'){return a-b}
        else if(op=='*'){return a*b}
        else if(op=='/'){return a/b}
        }

        // Sum of the first nth term of Series

        function mathOper(ser,n)
        {
            let tabSr=ser.split("+")
            let sum=0
            var myArray = [];
            for(var i = 0; i < n; i++){
              myArray.push(tabSr[i]);
           }
            for(e of myArray){
                if (e.includes("/")){
                    let nmbres=e.split('/');
                    let div=Number(nmbres[0])/Number(nmbres[1])
                    sum+=div
                }
                else {
                    sum+=Number(e)
                }
            }
            // 2 decimal places :1,00,..
            return sum.toFixed(2)

        }

        // Keep Hydrated!
        function hydrat(time){
            let intTime=Math.floor(time)
            let lit=intTime*0.5
           return Math.floor(lit);
        }

        // Century From Year

        function cent(y){

            let rest=y%100
            //divide by 100 to get century
            y= Math.floor(y / 100)
            if(rest==0){
                return y
            }
            else{
                return y+1
            }

           }

        //    Beginner - Lost Without a Map
           function doublTab(tab){
            for(let i=0;i<tab.length;i++){
             tab[i]=2*tab[i]
            }
            return tab
         }
        //  """""""""""""""""""""""""""""Strings"""""""""""""""""""""""""""""""""""""
        //  Reversed Strings
        function inversWord(w){
            let tab=w.split("")
            let inv=tab.reverse().join("")
            return inv
         }

        //  String ends with?
        function solution(word, end){
            let boolexist=word.includes(end,word.length-end.length)
            return boolexist
        }


        // Do I get a bonus?
        function getBonus(salary,bonus){
                if(bonus){ return salary*10+"£"}
                else{ return salary+"£"}
                }

        // Abbreviate a Two Word Name
        function abbrev(name){
            let tab=name.split(" ")
        let firstLett=tab[0][0]
        let lastLett=tab[1][0]
        return firstLett.toUpperCase()+"."+lastLett.toUpperCase()
        }

        // DNA to RNA Conversion
        function dnaTorna(dna){
            let rna=dna.replace(/T/g,"U");
            return rna
         }
        // """""""""""""""""""""""""" Arrays""""""""""""""""""""""""""
        // Counting sheep...
         function countSheeo(arr){
            let count=0
            for(e of arr){
                if(e==true){
                    count++
                }
            }
            return count
        }


        // Ones and Zeros
        function convrt(tab){
            let bin=tab.join("")
         let num=parseInt(bin, 2)
         return num
       }
    //    A Needle in the Haystack
       function foundNeedle(tab){
        for(let i=0;i<tab.length;i++){
        if(tab[i]=="needle"){
           return "found the needle at position "+ (i+1)
        }
    }

    }
    // Remove the minimum

    function removeminArr(arr){
        let  min=Math.min(...arr)
        let indx=arr.indexOf(min)
        arr.splice(indx,1)
        return arr
    }

    // Convert number to reversed array of digits
    function convrtNbr(nbr){
        let arr=String(nbr).split("")
        return arr
    }
        // """"""""""""""""""""""""""""""""Objects"""""""""""""""""""""""""""""""""
    // Make a function that does arithmetic!
    function mathOper(a,b,op){
        if(op== "add" ){return a+b}
        else if(op=="subtract"){return a-b}
        else if(op=="multiply"){return a*b}
        else if(op=="divide" ){return a/b}
        }



        // Regular Ball Super Ball:

        class Ball{

            constructor( type="regular"){
                 this.ballType=type
            }
        }

        // Make them bark!

        class Dog{
            constructor(name, breed, sex, age){
               this.name  = name;
               this.breed = breed;
               this.sex   = sex;
               this.age   = age;
            }

            bark(){
                return 'Woof!'
            }
        }



        // Add property to every object in array
        function addProp(arr){
                for(let e of arr){
                    e.usersAnswer=null
                }
                return arr
                }


// Switch/Case - Bug Fixing #6
       function switchcas(x){
            let value
            switch (x) {
            case 0:
                value = "Off";
                break;
            case 1:
                value = "On";
                break;
            default:
                value = "you need x to be same type with switch values";
                break;
            }
            return value 
            }
        console.log(switchcas("0"));
        // solution: switch use comparison '===' type check 
         console.log(switchcas(0));




        //  FIXME: Get Full Name

        function returnFull(first,last){
            let pers={}
            pers.first=first
            pers.last=last
            return "full name: " +pers.first +" "+ pers.last
        }

      //"""""""""""""""""""""" Basic Language Features"""""""""""""""""
    //   Grasshopper - Summation

        function summ(nbr){
            let sm=0
          for(let i=1;i<=nbr;i++){
              sm=sm+i;
            }
          return sm;
        }
     // Jenny's secret message
        function greeting(name){
            let gre="Hello "+name
            return gre
        }

        // Function 1 - hello world
        function greet(){
            let greet="hello World"
            return greet
        }
        // Count the Monkeys!
        function count(n){
            let tabNum=[]
            for(let i=1;i<=n;i++){
                tabNum.push(i)
            }
            return tabNum
        }
        // Are You Playing Banjo?
        function nameplay(name){
            if(name[0].toLowerCase()=='r'){
                return name + " plays banjo"
            }
            else {return name + " does not play banjo"}
        }


        // """""""""""""""""""""Control Flow""""""""""""""""""""""""""
        // Find the capitals

        function isUpper(word){
            let tabindices=[]
             for(let i=0;i<=word.length-1;i++){
                 if(word[i]==word[i].toUpperCase()){
                     tabindices.push(i)
                 }
             }
             return tabindices
        }

        // Plural
        function plural(nbr){
            if(nbr==1){return false}
            else{ return true}
        }
        // Drink about

        function drink(age){
            let drink;
            if(age<14){drink="toddy"}
            else if (age<18){drink="coke"}
            else if(age<21){drink="beer"}
             else if(age>=21){drink="whisky"}

             return "drink "+drink
        }
        // Leonardo Dicaprio and Oscars
        function leo(oscar) {
            if(oscar==88){return "Leo finally won the oscar! Leo is happy"}
            else if(oscar==86){return "Not even for Wolf of wallstreet?!"}
            else if(oscar<88){return "When will you give Leo an Oscar?"}
            else if(oscar>88){return "Leo got one already!"}
            
        }

// """"""""""""""""""""""""""""Loops"""""""""""""""""""""""""""""""""""

        // Sentence Smash

        function smash(arrword){
            let word=arrword.join(" ")
            return word
        }
        // If you can't sleep, just count sheep!!

        function countSh(n){
            let counts=""
            for(let i=1;i<=n;i++){
                counts+=i+" sheep..."
            }
        return counts
        }


        // Double Char:
        function doubleChar(word){
            let newWord="";
            let resultTab=[];//table of mumbling words
           for(let i=1;i<=word.length;i++){
                // repeat i times every caracter
                for(let j=1;j<=2;j++){
                    
                        newWord+=word[i-1]
               }
               resultTab.push(newWord)
               newWord=""
        
            }
        
             let resultWord=resultTab.join("")
             return resultWord
        
        }


        // Unfinished Loop - Bug Fixing #1
        // code:
        // let n=10;
        // for (let i =0; i<n; i--)
        //     console.log("hello");
        //solution :
        let n=10;
         for (let i =0; i<n; i++)
         console.log("hello");

        //  Sum of numbers from 0 to N
         function sumSeries(n){
            if(Math.sign(n)==-1){
               return n+"<0"
           }
           else if(Math.sign(n)==0)
               {return n+"=0"}
           else 
            {
                let sum=0
                let retExp=[]
                for(let i=0;i<=n;i++){
                    sum+=i
                    retExp.push(i)
                }
                return retExp.join("+")+"="+sum
            }
           

        }


    //    """""""""""""""""""""""""""""""""""""""" #Changing Gears""""""""""""""""""""""""""""""""""""""""""""
        // Multiples of 3 or 5

        function sumMultip(n){
            let mult3=0
        let mult5=0
        let sum=0
        let i=1
        while(mult3<n){
            
            mult3=3*i;
            sum+=mult3
             i++
        }
        i=1
        while(mult5<n){
            mult5=5*i;
            sum+=mult5
             i++
        }
        //when loop ends last element should be substracted because it's >10
        return sum=sum-mult3-mult5
        }
        


        // Sum of Digits / Digital Root,Digital root is the recursive sum of all the digits in a number.
        function recSumdigits(num){
            
            while(num.toString().length>1){
                num=sumdig(num)
            }
            return num
                
                function sumdig(num){
                        let sum = 0;
                    while (num) {
                        sum += num % 10;
                        num = Math.floor(num / 10);
                    }
                    return sum
                    }
        }

    
        // Who likes it?
      
        function wholike(arr){
            if(arr.length==0){
                return "no one likes this"
            }
        else if(arr.length==1){return arr[0]+" likes this" }
        else if(arr.length==2){return arr[0]+ " and "+ arr[1] +" like this"}
        else if(arr.length==3){
                 return  arr[0]+ ","+ arr[1]+" and " +arr[2]+ " like this"}
        else{
            let arrname=[]
            for(let i=0;i<arr.length-2;i++)
            {
                arrname.push(arr[i])
            }
            return arrname.join(", ")+' and 2 others like this'
        }
        }
        


        // Find The Parity Outlier:
            // even array : exist o1 elemnt even between 2 odd elements , it can be in first or end or middle of array
            // odd =1; even=0
            function parityarr(arr){
                let len=arr.length

            for(let i=0;i<len;i++){
                let a,a1,a2,a_1,a_2
                a=typ(arr[i])
                a1=typ(arr[i+1])
                a2=typ(arr[i+2])
                a_1=typ(arr[i-1])
                a_2=typ(arr[i-2])
                if( (a==1 && a1==0 && a2==0)||(a_1==0 && a==1 && a1==0)||( a_2==0 &&  a_1==0 && a==1 )){
                return arr[i]+" the only odd number" 
                    }

                else if((a==0 && a1==1 && a2==1)||(a_1==1 && a==0 && a1==1)||( a_2==1 &&  a_1==1 && a==0 )){
                    return arr[i]+" the only even number" 
                }
            }

            function typ(num){
                if(num!=null){
                    if(num%2==0){
                    return 0
                    }
                    else {
                        return 1
                    }
                }
                else num
                
            }
            }


            // Stop gninnipS My sdroW!

            function stopgninnip(s){
                let tab=s.split(" ")
                let newtab=[]
                for(e of tab){
                     if(e.length>4){
                          newtab.push(inversWord(e))   
                     }
                     else{
                         newtab.push(e)
                     }
                     
                }
                
                     //  Reverse Strings
                        function inversWord(w){
                            let tab=w.split("")
                            let inv=tab.reverse().join("")
                            return inv
                         }
                return newtab.join(" ")
                }
    


      // """"""""""""""""""""""""""""""""""""""Fire At Will """""""""""""""""""""""""""
                // Problem1: Find out whether the shape is a cube:https://www.codewars.com/kata/58d248c7012397a81800005c
                // To find the volume (centimeters cubed) of a cuboid you use the formula:
                // volume = Length * Width * Height
                // But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
                // It's up to you to find out whether the cuboid has equal sides (= is a cube).       
                // Return true if the cuboid could have equal sides, return false otherwise.
                // Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
                // Note: side will be an integer   

                function isCuboid(volume,length){
                    // check if invalid entries
                    if(volume<=0 || length<=0){
                        return false 
                    }
                    // check if cuboid could have equal sides
                    else if(Math.pow(length,3)==volume){
                         return true 
                    }else{
                         return false 
                    }
                }


         //  Problem 2: Numbers with The Highest Amount of Divisors::https://www.codewars.com/kata/55ef57064cb8418a3f000061
        // An array of different positive integers is given. We should create a code that gives us the number 
        // (or the numbers) that has (or have) the highest number of divisors among other data.

        function proc_arrInt(arr){

            let len=arr.length;
            let returnArray=[len]
            
            let listRetuHighest=[];
            let totalPrim=0;
        let highestDivArr=[]
        //calcul of number divisors of array elements  
        for(let i=0;i<arr.length;i++){
                highestDivArr.push(nmbrdivisors(arr[i]))
                if(isPrime(arr[i]) ==true){
                    totalPrim++
                }
        }
        // insert total of prime numbers 
        returnArray.push(totalPrim)
        //get highest amount of divisors that a certain number 
        let maxtotalDiv=Math.max(...highestDivArr);
        listRetuHighest.push(maxtotalDiv);
        // get elements in array that has maxtotalDiv 
        let arrMaxdiv=[]
            for(let i=0;i<highestDivArr.length;i++){
                if(highestDivArr[i]==maxtotalDiv) {arrMaxdiv.push(arr[i])}
            }
              //sort list 
        arrMaxdiv.sort(function(a,b){return a-b})
        listRetuHighest.push(arrMaxdiv);

        //insert list to return variable
        returnArray.push(listRetuHighest)
        return returnArray;
        
        //function to get number of divisors 
            function nmbrdivisors(n){
            let countDiv=0
            for(let i=1;i<=n;i++){
                if(n%i==0){
                    countDiv++
                }
            }
            return countDiv
                }
        //function to check prime number
            function isPrime(n){
                for(let i=2;i<n;i++){
                    if(n % i === 0) return false;
                }
                return true
            }
        }
    

       //  Problem 3: Last digit of a huge number:https://www.codewars.com/kata/5518a860a73e708c0a000027
//   For a given list [x1, x2, x3, ..., xn] compute the last (decimal) digit of x1 ^ (x2 ^ (x3 ^ (... ^ xn))).
// E. g., with the input [3, 4, 2], your code should return 1 because 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721.
// Beware: powers grow incredibly fast. For example, 9 ^ (9 ^ 9) has more than 369 millions of digits. lastDigit has to deal with such numbers efficiently.
// Corner cases: we assume that 0 ^ 0 = 1 and that lastDigit of an empty list equals to 1.
function lastdigit(arrNum) {
    let len=arrNum.length
    let resul=1// in case of empty list return 1(0pow(0)=1)
    //start from array's end to calculate the power 
    for(let i=len-1;i>=0;i--){
        resul=Math.pow(arrNum[i],resul)
    }
    let s=resul.toString();
    let lastdigit=s[s.length-1];
    return lastdigit
}



    // Problem 4: The soul of wit: reverse an array:https://www.codewars.com/kata/59b81886460387d8fc000043
// No time for stories. Reverse an array, return the result. Do whatever you want with the original array.
// Don't use Array.prototype.reverse.
function reversArr(arr){    
    let len=arr.length
    let revArr=[]
    for(let i=len-1;i>=0;i--){
          revArr.push(arr[i])
       }
    return revArr
   
   } 
    

   // problem 5:Weird prime generator:https://www.codewars.com/kata/562b384167350ac93b00010c
//    Write functions:
// 1: an(n) with parameter n: returns the first n terms of the series of a(n) (not tested)
// 2: gn(n) with parameter n: returns the first n terms of the series of g(n) (not tested)
// 3: countOnes(n) with parameter n: returns the number of 1 in the series gn(n) 
//     (don't forget to add a `1` at the head) # (tested)
// 4:  p(n) with parameter n: returns an array filled with the n first distinct primes in the same order they are found in the sequence gn (not tested)
// 5: maxPn(n) with parameter n: returns the biggest prime number of the above p(n) # (tested)
// 6: anOver(n) with parameter n: returns an array (n terms) of the a(i)/i for every i such g(i) != 1 (not tested but interesting result)
// 7: anOverAverage(n) with parameter n: returns as an *integer* the average of anOver(n) # (tested)
// Solution:
function an(n){
    let an=[7]
    for(let i=1;i<n;i++){
        // a(n) = a(n-1) + gcd(n, a(n-1)) for "n >= 2"
        let e=an[i-1]+gcd(i+1,an[i-1])
        an.push(e)
    }
    return an
    //calcul gcd
    function gcd(a, b) {
      if (!b) {
        return a;
      }
      return gcd(b, a % b);
    }
}
// gn function
function gn(n){
    let anArr=[]
    anArr=an(n);
    let gn=[1];// first element is 1
    for(let i=0;i<n-1;i++){
        let e=anArr[i+1]-anArr[i]
        gn.push(e)
    }
    return gn;
}

function  countOnes(n){
    let count=0
    let gArr=gn(n)
     for(let i=0;i<n;i++){
        if(gArr[i]==1){
            count++
        }
     }
    return count;
}

function  p(n){
    let retArr=[]
    let gnArr=gn(n)
    for(let i=0;i<n;i++){
        if(gnArr[i]!=1){
            retArr.push(gnArr[i])
        }
     }
    return retArr;
}



function maxPn(n){
    let pnArr=p(n)
    return Math.max(...pnArr)
}

function anOver(n){
    let aArr=an(n)
    let retArr=[]
    for(let i=0;i<n;i++){
         let e=Math.floor(aArr[i]/(i+1))
         retArr.push(e)
    }
    return retArr
}

function anOverAverage(n){
    let sum=0
    let arr=anOver(n)
    let len =arr.length
     for(let i=0;i<n;i++){
         sum+=arr[i]
    }
    return Math.floor(sum/len)
    
}
