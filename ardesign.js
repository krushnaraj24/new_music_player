var flag=1;
function arplay1()
{
    var aud = document.getElementById("munbevaa");
    if(flag==1)
    {
        aud.play();
        flag=0;
    }
    else
    {
        aud.pause();
        flag=1;
    }
}

function arplay2()
{
    var aud = document.getElementById("verithanam");
    if(flag==1)
    {
        aud.play();
        flag=0;
    }
    else
    {
        aud.pause();
        flag=1;
    }
}

function arplay3()
{
    var aud = document.getElementById("chola");
    if(flag==1)
    {
        aud.play();
        flag=0;
    }
    else
    {
        aud.pause();
        flag=1;
    }
}