let view = 0;
let count = 0;
var password = "rekcahFHD";
var visitorContainer = document.getElementById("visitors");
document.getElementById("year").innerHTML = new Date().getFullYear();

//alert = document.getElementById("alert5");

try{
    let visitor = localStorage.getItem("page-view");
    if (visitor) {
        visitor = Number(visitor)+1;
        localStorage.getItem("page-view",visitor);
        //view = view + visitor;
    } else {visitor = 1;
        localStorage.getItem("page-view",1);
    }
    visitorContainer.innerHTML = visitor;
} catch(error){visitorContainer.innerHTML = "10,025";console.log(error);}

try{
document.getElementById("DHF Causes").addEventListener("click", function(){
document.getElementById("show").style.display = "none";
document.getElementById("hide").style.display = "block";
document.getElementById("current").innerHTML = "<a href='#top' class='current'>Related Search</a>";
document.getElementById("li2").innerHTML= "<a href='../DHF/index.html'>Back to home</a>";
document.getElementById("title").innerHTML= "DHFHackers || Related Search";
document.getElementById("null").innerHTML = null;
document.getElementById("main2").style.display = "none";
document.getElementById("main3").style.display = "none";
document.getElementById("main1").style.display = "block";
});
document.getElementById("DHF PL").addEventListener("click", function(){
document.getElementById("show").style.display = "none";
document.getElementById("hide").style.display = "block";
document.getElementById("current").innerHTML = "<a href='#top' class='current'>Related Search</a>";
document.getElementById("li2").innerHTML= "<a href='../DHF/index.html'>Back to home</a>";
document.getElementById("title").innerHTML= "DHFHackers || Related Search";
document.getElementById("null").innerHTML = null;
document.getElementById("main1").style.display = "none";
document.getElementById("main3").style.display = "none";
document.getElementById("main2").style.display = "block";
});
document.getElementById("DHF hT").addEventListener("click", function(){
document.getElementById("show").style.display = "none";
document.getElementById("hide").style.display = "block";
document.getElementById("current").innerHTML = "<a href='#top' class='current'>Related Search</a>";
document.getElementById("li2").innerHTML= "<a href='../DHF/index.html'>Back to home</a>";
document.getElementById("title").innerHTML= "DHFHackers || Related Search";
document.getElementById("null").innerHTML = null;
document.getElementById("main1").style.display = "none";
document.getElementById("main2").style.display = "none";
document.getElementById("main3").style.display = "block";
})} catch(error) {console.log(error);};

realName();
function realName(){
try{
document.getElementById("reality").addEventListener("click", function(){
    alert("Congratulation! DHFhacker want to share a secret with u." );
    let userPassword = prompt("enter password to see DHFhacker real name","???");
    if (password !== userPassword || password === null){
        alert("Incorrect Password");
        document.getElementById("ID").innerHTML= null;
    } else {
        count++;
        if (count == 1){alert("u are the 1st person to open this secret");}
        else if (count == 2){alert("u are the 2nd person to open this secret");}
        else if (count == 3){alert("u are the 3rd person to open this secret");}
        else {alert("u are the "+count+"th person to open this secret");}   
        document.getElementById("ID").innerHTML= '<h1>Author ID is encrypted</h1><p><i>"airegin morf reehatta nassah-la si eman ma"</i><br /><br/>this message was encrypted...!,<br />to understand what is written down, u will have to fine the currect cipher & key for the decryption.<br />Good Luck and Good Bye!</p>';
    }
})} catch(error) {console.log(error);}};

try{
document.getElementById("next").onclick = function(){
document.getElementById("pass").style.display = "none";
document.getElementById("pass1").style.display = "block";
document.getElementById("pass2").style.display = "none";
document.getElementById("pass3").style.display = "none";
document.getElementById("pass4").style.display = "none";
document.getElementById("pass5").style.display = "none";
document.getElementById("pass6").style.display = "none";
};
document.getElementById("next1").onclick = function(){
name = document.getElementById("name").value;
fname = document.getElementById("fname").value;
lname = document.getElementById("lname").value;
if (name === "" || fname === "" || lname === ""){console.log("xxx");}else{
document.getElementById("pass").style.display = "none";
document.getElementById("pass1").style.display = "none";
document.getElementById("pass2").style.display = "block";
document.getElementById("pass3").style.display = "none";
document.getElementById("pass4").style.display = "none";
document.getElementById("pass5").style.display = "none";
document.getElementById("pass6").style.display = "none";}
};
document.getElementById("next2").onclick = function(){
email = document.getElementById("email").value;
cncode = document.getElementById("cncode").value;
num = document.getElementById("num").value;
if (email === "" || cncode === "" || num === ""){console.log("xxx");}else if( cncode.length > 3){document.getElementById("alert2").innerHTML = "Invalid Country Code!";}else if( num.length > 11 || num.length < 10){document.getElementById("alert2").innerHTML = "Invalid Phone Number!";}else{
document.getElementById("pass").style.display = "none";
document.getElementById("pass1").style.display = "none";
document.getElementById("pass2").style.display = "none";
document.getElementById("pass3").style.display = "block";
document.getElementById("pass4").style.display = "none";
document.getElementById("pass5").style.display = "none";
document.getElementById("pass6").style.display = "none";}
};
document.getElementById("next3").onclick = function(){
date = document.getElementById("date").value;
if ( date === "" ){ document.getElementById("alert3").innerHTML = "Please Insert Your Date-Of-Birth!"
} else {
document.getElementById("pass").style.display = "none";
document.getElementById("pass1").style.display = "none";
document.getElementById("pass2").style.display = "none";
document.getElementById("pass3").style.display = "none";
document.getElementById("pass4").style.display = "block";
document.getElementById("pass5").style.display = "none";
document.getElementById("pass6").style.display = "none";}
};
document.getElementById("next4").onclick = function(){
bio = document.getElementById("bio").value;
ans = document.getElementById("answer").value;
if ( ans === "" || bio === "" ){document.getElementById("alert4").innerHTML = "NOTICE:- you must fill the bio field!";}else{
document.getElementById("pass").style.display = "none";
document.getElementById("pass1").style.display = "none";
document.getElementById("pass2").style.display = "none";
document.getElementById("pass3").style.display = "none";
document.getElementById("pass4").style.display = "none";
document.getElementById("pass5").style.display = "block";
document.getElementById("pass6").style.display = "none";}
};
document.getElementById("next5").onclick = function(){
pwd = document.getElementById("pwd").value;
repwd = document.getElementById("repwd").value;
if ( pwd === "" || repwd === "" ){console.log("xxx");}else if ( pwd !== repwd ){document.getElementById("alert5").innerHTML = "Password Not Match!";}else if( pwd.length < 8 ){document.getElementById("alert5").innerHTML = "NOTICE:- create a stronge password by combining letters and numbers<br>            and make sure the length of ur password is up-to 8.";}else{
document.getElementById("pass").style.display = "none";
document.getElementById("pass1").style.display = "none";
document.getElementById("pass2").style.display = "none";
document.getElementById("pass3").style.display = "none";
document.getElementById("pass4").style.display = "none";
document.getElementById("pass5").style.display = "none";
document.getElementById("pass6").style.display = "block";}
};
} catch(error){
console.log(error);
};