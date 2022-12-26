const navDesktopELement = document.querySelectorAll('.nav-desktop .menu-item');
const burgerBtns = document.querySelectorAll('.burger-btns button');
const burgerCloseBtn = document.querySelector('.close-menu');
const navMobile=document.querySelector('.nav-mobile')
const navMobileElement=document.querySelectorAll('.nav-mobile .menu-item');
const navMobileLinks=document.querySelectorAll('.nav-mobile .menu-item li')
burgerBtns.forEach((el) => {
	el.addEventListener('click', () => {
		burgerBtns.forEach((el) => {
			el.classList.toggle('active');
		});
        navMobile.classList.toggle('active');
	});
});

navDesktopELement.forEach((el) => {
	el.addEventListener('click', () => {
		const actual = el;
		const actualDropdown = actual.lastElementChild;
        const actualArrow=actual.firstElementChild;
		navDesktopELement.forEach((el) => {
			if (el === actual) return;
            el.firstElementChild.classList.remove('rotate-arrow');
			el.lastElementChild.classList.remove('active');
		});
        actualArrow.classList.toggle('rotate-arrow')
		actualDropdown.classList.toggle('active');
	});
});

navMobileElement.forEach((el)=>{
    el.addEventListener('click',()=>{
        el.lastElementChild.classList.toggle('active');
        el.firstElementChild.classList.toggle('rotate-arrow')
    })
})

navMobileLinks.forEach(el=>{
    el.addEventListener('click',()=>{
        navMobile.classList.remove('active');
        burgerBtns.forEach((el) => {
			el.classList.toggle('active');
		});
    })
})
