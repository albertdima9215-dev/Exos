let menu = document.querySelector(".menu");
let menulist = document.querySelector(".navbar");

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

const currentDate = new Date().getFullYear();
document.querySelector(".date").innerHTML = currentDate;