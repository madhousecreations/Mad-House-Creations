//================ Counter =================//

const counters=document.querySelectorAll(".count");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.count;

let count=0;

const speed=target/120;

const update=()=>{

count+=speed;

if(count<target){

counter.innerHTML=Math.ceil(count)+"+";

requestAnimationFrame(update);

}else{

counter.innerHTML=target+"+";

}

};

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>observer.observe(counter));

//================ Sticky Header =================//

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

header.classList.toggle("sticky",window.scrollY>40);

});

//================ Mobile Menu =================//

const menu=document.querySelector(".menu");

const nav=document.querySelector("nav");

if(menu){

	menu.addEventListener("click",()=>{

		nav.classList.toggle("active-menu");

	});

}

//================ Scroll Reveal =================//

const reveal=document.querySelectorAll(
".story-content,.gallery-grid,.value-card,.timeline-item,.cta-grid"
);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

reveal.forEach(item=>{

revealObserver.observe(item);

});

//================ Smooth Scroll =================//

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});