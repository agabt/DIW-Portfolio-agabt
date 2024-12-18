import { $, $all } from "./querySelectors.js";

const allPages = ["#about", "#projects", "#portfolio"];
const hash =
	window.location.hash === "" || !allPages.includes(window.location.hash)
		? "#about"
		: window.location.hash;
let $activeSection = $(hash);
let $activeNavItem = $(`${hash}-nav`);
$activeSection.classList.add("active");
$activeNavItem.classList.add("active-nav");

window.addEventListener("hashchange", () => {
	const newHash = window.location.hash;
	$activeSection.classList.remove("active");
	$activeNavItem.classList.remove("active-nav");

	const $newActiveSection = $(newHash);
	const $newActiveNavItem = $(`${newHash}-nav`);
	$newActiveSection.classList.add("active");
	$newActiveNavItem.classList.add("active-nav");
	$activeSection = $newActiveSection;
	$activeNavItem = $newActiveNavItem;

	window.scrollTo(0, 0);
});

// Auto Typing
const autoText = new AutoTyping({
	id: "auto-typed-text",
	typeText: ["Developer", "User", "Human", "Student", "Junior"],
	textColor: "#f5f5f5",
	cursorColor: "#f5f5f5",
}).init();
