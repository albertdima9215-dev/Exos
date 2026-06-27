let menu = document.querySelector(".menu");

window.addEventListener("scroll",()=>{
  if(window.scrollY > 30){ document.querySelector("header").style.background = "#fff";
  }else{ document.querySelector("header").style.background = "transparent";
  }
})

menu.addEventListener("click",()=>{
  let menulist = document.createElement("div");
  menulist.classList.add("menuList");
  menulist.style.display = "block";
  menulist.innerHTML = `
  <ul>
  <li><a href="#home" >Apropos</a></li>
  <li><a href="#experience" >Expérience</a></li>
  <li><a href="#projects" >Projets</a></li>
  <li><a href="#contact" >Contact</a></li>
  </>
  `
document.querySelector("body").appendChild(menulist);
});

document.addEventListener("touchstart",(e)=>{
  e.stopPropagation();
  e.preventDefault();
  if(!menu.contains(e.target)){
document.querySelector(".menuList").style.display = "none";
  }
});

const currentDate = new Date().getFullYear();
document.querySelector(".date").innerHTML = currentDate;