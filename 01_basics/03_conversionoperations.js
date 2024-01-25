let score = "33";




 console.log(typeof score);

 let valueinnumber = Number (score);
 console.log(typeof valueinnumber);

 let isloggedin =  0

 let Booleanisloggedin = Boolean(isloggedin)

 console.log(Booleanisloggedin);


 /*********************Operations*********************************** */

 let value = 3
 let negvalue = -value;
 console.log(negvalue);

 /* console.log(2+2);
 console.log(2*2);
 console.log(2**3);
 console.log(2/2);
*/



let str1 = "Abhishek"
let str2 =  " Hitesh"
console.log(str1+ str2);


//++++++++++++++++++++-->Memories<--+++++++++++++++++++++++//

/* 
stack (used in primitive datatypes) , heap (used in non-primitive types
    */
   
let myyoutubename= "thatfoodiewander"

let anothername = myyoutubename

console.log(anothername);
console.log(myyoutubename);

let user = {
    email : "thatfoodiewander@gmail.com",
    upiId : "abhishekkalonia@ybl",
    mobilenumber : "8750855175", 
}

let usertwo = user
 usertwo.email = "abhi@gmail.com"

 console.log(user.email , usertwo.email);


 let name =  "Abhishek"
 let count = 50

 console.log(`here is your name ${name} and the no. of count is ${count}`);
