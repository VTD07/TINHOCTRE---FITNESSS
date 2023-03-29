//alert("This page use cookie to enhance your experience");
var tit=document.title;
var c=0;
function writetitle ()
{
    document.title=tit.substring(0,c);
    if(c==tit.length)
    {
        c=0;
        setTimeout("writetitle()",1000);
    }
    else
    {
        c++;
        setTimeout("writetitle()",200);
    }
}
writetitle();