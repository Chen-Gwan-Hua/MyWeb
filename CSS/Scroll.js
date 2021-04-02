var alink = document.getElementsByClassName("anchor")

for(var i = 0; i < alink.length; i++){
	alink[i].addEventListener('click', function(){
		let anchor = this.getAttribute('href');
		let topPos = document.getElementById(anchor).offsetTop;
		window.scroll(0,topPos);
		return false;
	})
}

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
	if(window.pageYOffset > 10){
		toTop.classList.add("active");
	}else{
		toTop.classList.remove("active");
	}
})

	


