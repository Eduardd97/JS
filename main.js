document.addEventListener ("DOMContentLoaded", function () {
    const name = document.querySelector(".name");
    const buttonName = document.querySelector(".button_name");
    const capitalizedName = document.querySelector(".capitalizedName");

    buttonName.addEventListener("click", function () {
        const userEnteredName = name.value;

        if (userEnteredName) {

            const capitalizedUsername = userEnteredName.charAt(0).toUpperCase() + userEnteredName.slice(1).toLowerCase();
            console.log(capitalizedUsername)

            capitalizedName.textContent = "Приятно познакомится с вами " + capitalizedUsername +  "! Спасибо что посетили нашу страничку \u{1F60A}\u{1F44D}";
  
            name.value = "";
            
        }
    })
})



let stringWithgreaterLengthElement = document.querySelector(".stringWithgreaterLength")

const sol1 = function (str1, str2) {
    if (str1.Length > str2.Length){
        return str1
    } else {
        return str2
    }
    
}

let stringWithgreaterLength = sol1 ("Привет, мир", "Привет, чудесный и замечательный мир!")

stringWithgreaterLengthElement.textContent = stringWithgreaterLength;

console.log(stringWithgreaterLength)
