let an=false;
function menuFuction (x)
{
    x.classList.toggle("change");
}
function Menulist ()
{
    if(an)
    {
        document.getElementById("sidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        an=false;
    }
    else
    {
        document.getElementById("sidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        an=true;
    }
}