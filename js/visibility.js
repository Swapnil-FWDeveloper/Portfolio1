document.addEventListener("visibilitychange", function(){
    if(document.visibilityState == "visible")
    {
        document.title = "SWAPNIL | SOFTWARE DEVELOPER";
        
    }
    else{
        document.title = "Comback to portfolio";
    }
})