function openNav ()
{
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav ()
{
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
function menuFuction (x)
{
    x.classList.toggle("change");
}
function Menulist ()
{
    let an=true;
    let hien=document.getElementById("sidenav");
    let push=document.getElementById("main");
    if(an)
    {
        document.getElementById("sidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        an=false;
    }
    else
    {
        document.getElementById("sidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        an=true;
    }
}