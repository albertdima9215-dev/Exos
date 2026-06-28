let menu = document.querySelector(".menu");
let menulist = document.querySelector(".navbar");
let moon = document.querySelector(".fa-moon");
let timeChange = document.querySelector(".timeChange");
let body = document.querySelector("body");


window.addEventListener("scroll",()=>{
  if(window.scrollY > 30){ document.querySelector("header").style.background = "#fff";
  }else{ document.querySelector("header").style.background = "transparent";
  }
})

menu.addEventListener("click",()=>{
  menulist.style.display = "block";
});

document.addEventListener("touchstart",(e)=>{
  e.stopPropagation();
  if(!menu.contains(e.target) && !menulist.contains(e.target)){
menulist.style.display = "none";
  }
});

moon.addEventListener("click",()=>{
  body.style.background = "#222";
  body.style.color = "#fff";
  menulist.style.background = "#333";
  
let cards = document.querySelectorAll(".card");
  cards.forEach((item)=>{
    item.style.background = "#333";
  });

  timeChange.innerHTML = "";
  timeChange.innerHTML = `<i class="fa-regular fa-sun"></i>`

  window.addEventListener("scroll",()=>{
    if(window.scrollY > 30){       document.querySelector("header").style.background = "#333";
    }else{ document.querySelector("header").style.background = "transparent";
    };
  });
});

/*Date courante*/
const currentDate = new Date().getFullYear();
document.querySelector(".date").innerHTML = currentDate;