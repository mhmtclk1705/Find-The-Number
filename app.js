let randomNumber = Math.floor(Math.random() * 101)
// console.log(randomNumber);
let inputNumber = document.getElementById("input_number");
let checkButton = document.getElementById("check_button");
let numberAttempts = document.getElementById("number_attempts");
let output = document.getElementsByClassName("footer")[0];



// inputNumber.addEventListener("keyup",(e)=>{
//     e.preventDefault();
//     if(e.keyCode === 13);
//     checkButton.click();
// })


checkButton.addEventListener("click", () =>{
    
    if(numberAttempts.innerText == 0){
        // alert("baştan")
        output.innerText = "Please Try Again..."
        output.innerHTML += `<button id="again">Again</button>`
        let again = document.getElementById("again");
        again.addEventListener("click",()=>{
            numberAttempts.innerText = 7;
            randomNumber = Math.floor(Math.random() * 101)
        })
    }

    else if(inputNumber.value < randomNumber){
        // alert(`Yukarı!!! Lütfen ${inputNumber.value} - 100 arasında bir numara giriniz...`)
        output.innerText = `Yukarı!!! Lütfen ${inputNumber.value} - 100 arasında bir numara giriniz...`
        output.style.color = "red"
        numberAttempts.innerText--;
    }
    else if(inputNumber.value > randomNumber ){
        // alert(`Aşşağı!!! Lütfen 1 - ${inputNumber.value}  arasında bir numara giriniz...`)
        output.innerText = `Aşşağı!!! Lütfen 1 - ${inputNumber.value}  arasında bir numara giriniz...`
        output.style.color = "red"
        numberAttempts.innerText--;
        
    }
    else{
        // alert(`TEBRİKLER !!! ${inputNumber.value} sayısını toplam ${numberAttempts.innerText} kere denemede bildiniz... `) 
        output.innerHTML = `<h2>TEBRİKLER !!! ${inputNumber.value} sayısını toplam ${7 - numberAttempts.innerText} kere denemede bildiniz...</h2> `
        output.style.color = "purple"
        

    }
})