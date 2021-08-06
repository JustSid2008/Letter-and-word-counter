let inpt = document.getElementById("text")


function letter() {
   
    let my_string = inpt.value;
    let spaceCount = (my_string.split(" ").length - 1);
    
   
    if(inpt.value.length > 0){
        alert(inpt.value.length - spaceCount)
    }

    else if(inpt.value.length === 0){
        alert("Nothing has been said")
    }

    document.location.reload ()
}

function word() {
    let my_string = inpt.value;
    let spaceCount = (my_string.split(" ").length - 1);

    if(inpt.value.length > 0){
        alert(spaceCount + 1)
    }

    else if(inpt.value.length === 0){
        alert("Nothing has been said")
    }

    document.location.reload ()
}


