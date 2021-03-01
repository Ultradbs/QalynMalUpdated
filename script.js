// select elements by ID
var buttonEl = document.getElementById("resultButton");
var educationEl = document.getElementById("education");
var familyEl = document.getElementById("family");
var skillsEl = document.getElementById("skills");
var agesArrayEls = document.getElementsByName("age");
var abilitiesEls = document.getElementsByClassName("abilities");
var gossipsEls = document.getElementsByClassName("gossips");

var checkedAbilities = [], checkedGossips = [];
var edu, fam, age, skls, result;     


    let price = document.getElementById("startingBil");
    


let person = {

    bride_name:     name,
    
    bride_price: price,
    
    letter_to_bride: love_letter
    
    }

buttonEl.addEventListener("click", calculate); // the button listens to the 'click' event and upon "click" it calls the function "calculate"
   
function calculate() {
    
    
    let name = document.getElementById("name").value;
    let love_letter = document.getElementById("love_letter").value;

    result = parseFloat(price.value);
   

    skls=0;
    /*Education and Family Dropdowns*/ 

    console.log(educationEl.value);
    edu = parseFloat(educationEl.value);

    console.log(familyEl.value);
    fam = parseFloat(familyEl.value);
    
    /*Skills*/

    for(var i=0; i<abilitiesEls.length;i++){
        if(abilitiesEls[i].checked === true){
            checkedAbilities.push(parseFloat(abilitiesEls[i].value)); 

        }
    }

    for(var i =0; i< checkedAbilities.length;i++){
        skls += checkedAbilities[i];
    }

    console.log(skls);

    /*Ages*/

    for(var i=0; i<agesArrayEls.length;i++){
        if(agesArrayEls[i].checked === true){
            age = parseFloat(agesArrayEls[i].value);
            break;
        }
    }

    console.log(age);

    result = Math.round(result*edu);
    result = Math.round(result*fam);
    result = Math.round(result+skls);
    result = Math.round(result*age);
    
    /*Gossips*/
    
    for(var i=0; i<gossipsEls.length;i++){
        if(gossipsEls[i].checked === true){
            checkedGossips.push(parseFloat(gossipsEls[i].value)); 

        }
    }

    for(var i =0; i< checkedGossips.length;i++){
        if(checkedGossips[i]%1==0 || checkedGossips[i]==0){
            result = result + checkedGossips[i];

        } else result *= checkedGossips[i];
    }



    /*Result*/
    console.log(Math.round(result));
    if(isNaN(Math.round(result)) || result==0 || name == 0){
        alert("Error");
        location.reload();
      //  document.getElementById("answer").innerHTML="Error: You missed the age";
    } else 
    document.getElementById("answer").innerHTML=`The price for your bride ${name} is ${result}$. Your love letter is "${love_letter}"`;
    /*alert(Math.round(result)+"$");
    location.reload();*/

}
