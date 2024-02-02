const headerBurger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");

if (headerBurger && headerNav) {
	headerBurger.addEventListener("click", () => {
		headerNav.classList.toggle("opened");
		headerBurger.classList.toggle("active");
	});
}

const accordionBtns = document.querySelectorAll(".accordion__title");
const accordionElements = document.querySelectorAll(".accordion__content");

// let width;

// if (window.innerWidth > 0) {
// 	width = window.innerWidth;
// } else {
// 	width = document.documentElement.clientWidth;
// }

// const width =
// 	window.innerWidth > 0
// 		? window.innerWidth
// 		: document.documentElement.clientWidth;

const width = window.innerWidth ?? document.documentElement.clientWidth;
if (width < 768) {
	console.log("test");
	accordionBtns.forEach((btn, index) => {
		btn.addEventListener("click", () => {
			if (accordionElements[index].classList.contains("active")) {
				_slideUp(accordionElements[index], 500);
				accordionElements[index].classList.remove("active");
				return;
			}
			accordionElements.forEach(el => {
				if (el.classList.contains("active")) {
					_slideUp(el, 500);
					el.classList.remove("active");
				}
			});
			accordionElements[index].classList.add("active");
			_slideDown(accordionElements[index], 500);
		});
	});
}

//SlideToggle
let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains("_slide")) {
		target.classList.add("_slide");
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + "ms";
		target.style.height = target.offsetHeight + "px";
		target.offsetHeight;
		target.style.overflow = "hidden";
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty("height");
			target.style.removeProperty("padding-top");
			target.style.removeProperty("padding-bottom");
			target.style.removeProperty("margin-top");
			target.style.removeProperty("margin-bottom");
			target.style.removeProperty("overflow");
			target.style.removeProperty("transition-duration");
			target.style.removeProperty("transition-property");
			target.classList.remove("_slide");
		}, duration);
	}
};
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains("_slide")) {
		target.classList.add("_slide");
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = "hidden";
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + "ms";
		target.style.height = height + "px";
		target.style.removeProperty("padding-top");
		target.style.removeProperty("padding-bottom");
		target.style.removeProperty("margin-top");
		target.style.removeProperty("margin-bottom");
		window.setTimeout(() => {
			target.style.removeProperty("height");
			target.style.removeProperty("overflow");
			target.style.removeProperty("transition-duration");
			target.style.removeProperty("transition-property");
			target.classList.remove("_slide");
		}, duration);
	}
};
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
};
