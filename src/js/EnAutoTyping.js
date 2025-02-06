// Auto Typing

function initAutoTyping() {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		document.querySelector("#auto-typed-text").textContent = "Developer ";
		return;
	}

	const autoText = new AutoTyping({
		id: "auto-typed-text",
		typeText: ["Developer", "User", "Human", "Student", "Junior"],
		textColor: "#f5f5f5",
		cursorColor: "#f5f5f5",
	}).init();
}

initAutoTyping();
