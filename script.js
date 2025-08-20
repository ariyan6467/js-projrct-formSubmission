let form = document.querySelector(".form");
let inputs = document.querySelectorAll("input");
form.style.margin = "60px";

let main = document.querySelector(".main");
 main.style.margin = '0px';



form.addEventListener("submit", function(dets){
  dets.preventDefault();
  console.log(dets);

  inputs.forEach(function(input) {
    console.log(input.value);
    console.log(inputs[0].value);
  })

 form.style.display = "none";

 

 let idCard = document.createElement("div");
 idCard.classList.add("idCard");
 main.appendChild(idCard);
 
    let idImg =document.createElement("div");
    idImg.classList.add("idImg");
    idCard.appendChild(idImg);

    let img = document.createElement("img");
    img.classList.add("img");
    idImg.appendChild(img);
    img.src = inputs[3].value;

    let cardInfo = document.createElement("div");
    cardInfo.classList.add(".cardInfo");
    idCard.appendChild(cardInfo);
    // cardInfo.style.backgroundColor = "#eeee";
    cardInfo.style.width = "250px";
    cardInfo.style.fontFamily = "arial";
    cardInfo.style.fontSize = "small";


    // HEADING NAME
    let cardName = document.createElement("h2");
    cardInfo.appendChild(cardName);
    cardName.textContent="Name :";

    // NAME SPAN CONTAINER

    let nameSpan = document.createElement("span");
    nameSpan.classList.add("info");
    nameSpan.textContent = inputs[0].value;
    cardName.appendChild(nameSpan);
    console.log(inputs[0].value);



    // HEADING AGE
    let cardAge = document.createElement("h2");
    cardInfo.appendChild(cardAge);
    cardAge.textContent="Age :";

    // AGE SPAN CONTAINER
    let ageSpan = document.createElement("span");
    ageSpan.classList.add("info");
    ageSpan.textContent = inputs[1].value;
    cardAge.appendChild(ageSpan);
    

    // HEADING EMAIL
    let cardEmail = document.createElement("h2");
    cardInfo.appendChild(cardEmail);
    cardEmail.textContent="Email :";

    // EMAIL SPAN CONTAINER
     let emailSpan = document.createElement("span");
    emailSpan.classList.add("info");
    emailSpan.textContent = inputs[2].value;
    cardEmail.appendChild(emailSpan);


    // BUTTON
    let btn = document.createElement("button");
    idCard.appendChild(btn);
    btn.classList.add("cardBtn");
    btn.textContent="Recheck";
    btn.style.marginTop='30px';


    btn.addEventListener("click", function(){
     form.style.display = "flex";
     idCard.remove();
    //  nameSpan.textContent = " ";
    //   img.src = " ";
    //   ageSpan.textContent = " ";
    //   emailSpan.textContent = " ";
      inputs.forEach(function(input){
        input.value = "";
        if(input.type === "submit"){
          inputs[4].value = "submit"; 
        }
      })
    })




    console.log(main);
})





