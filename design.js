var user = ["admin","krushna"];
var pass = ["Admin@123","Krush@24"];
function checkLogin()
{
    var userName = document.getElementById("un").value;
    var passWord = document.getElementById("ps").value;
    var flag=0;
    for(let i=0;i<user.length;i++)
    {
        if(user[i]===userName && pass[i]===passWord)
        {
            flag=1;
            break;
        }   
    }
    if(flag==1)
        window.open("./home.html");
    else
        alert("Invalid Username / Password");
}

function checkSignup()
{
    var cusername=document.getElementById("un").value;
    var apassword=document.getElementById("ps").value;
    var cpassword=document.getElementById("cs").value;
    if(apassword == cpassword)
    {
        window.open("./login.html");
    }
    else{
        alert("Password mismatch!!!");
    }
}