var h1 = document.querySelector("h1");
h1.innerText = "Karlovac";

// 2
var divDescription = document.querySelector(".description")
divDescription.innerHTML = "Grad na <h3>5 rijeka</h3>"

//3
var info = document.querySelector(".info");
info.textContent = "Peta rijeka je piva"

//4
var rijeke = ["Kupa", "Korana", "Dobra", "Mreznica", "karlovačko pivo"];
var info = document.getElementById("footer");

for(let c = 0; c < rijeke.length; c++)
{
    
    footer.querySelectorAll("li")[c].innerText = rijeke[c];

}

