

let imageToggle = function () {
    if(toggleIMG.alt === "closed" ){
        //do stuff// "
        toggleIMG.src = "Images/toggle.png";
        toggleIMG.alt = "open";
    }

    else {
        //do other stuff//
        toggleIMG.src = "Images/15211315791553239378-512.png";
        toggleIMG.alt = "qute quokka closed";
        
    }
}




//imageToggle();

catSelect.addEventListener("change", categoryUpdate);

imageBTN.addEventListener("click", imageToggle);

colorBTN.addEventListener("click", function(){
    console.log("Hello" + "World")

    let rComp = Math.random ()*255;
    let gComp = Math.random ()*255;
    let bComp = Math.random ()*255;
    
    field.style.backgroundColor = "rgb(" + rComp + ", " + gComp +", " + bComp + ")";
})