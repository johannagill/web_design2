let field = document.getElementById("colorField");
let colorBTN = document.getElementById("colorToggle");

let toggleIMG = document.getElementById("quokkaIMG");
let imageBTN = document.getElementById("imgToggle");

let catSelect = document.getElementById("category");
let subSelect = document.getElementById("subcategory");

let imageToggle = function () {
    if(toggleIMG.alt === "qute quokka 1" ){
        //do stuff// "
        toggleIMG.src = "Images/8a097da6d699704fe76c2aa9b9dee804.jpg";
        toggleIMG.alt = "qute quokka 2";
    }

    else {
        //do other stuff//
        toggleIMG.src = "Images/what-is-quokka.jpg";
        toggleIMG.alt = "qute quokka 1";
        
    }
}

let categoryUpdate = function(){
    let foodSubcats =  ["coffee", "desserts", "cocktails", "muffins"];
    let animSubcats = ["kittens", "puppies", "quokkas"];
    let natSubcats = ["mountains", "forests", "lakes"];

    subSelect.innerHTML = "";

    if(catSelect.value === "Food"){
        console.log("food");
        foodSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })

    }
    else if(catSelect.value === "Anim"){
        console.log("animals");
        animSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
        

    }

    else if(catSelect.value === "Nat"){
        console.log("nature");
        natSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })

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