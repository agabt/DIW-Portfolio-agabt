import { $, $all } from "./querySelectors.js";

const $changeLangLink = $("#change-lang-link");
const site = $changeLangLink.href;
const allPages = ["#about", "#projects", "#portfolio"];
const hash =
	window.location.hash === "" || !allPages.includes(window.location.hash)
		? "#about"
		: window.location.hash;
let $activeSection = $(hash);
let $activeNavItem = $(`${hash}-nav`);

$activeSection.classList.add("active");
$activeNavItem.classList.add("active-nav");

if (hash !== "#about") {
	$changeLangLink.href = `${site}${hash}`;
}

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

	$changeLangLink.href = `${site}${newHash}`;

	window.scrollTo(0, 0);
});
