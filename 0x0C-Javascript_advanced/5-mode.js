function changeMode(size, weight, transform, background, color) {
	document.documentElement.style["font-size"] = size;
	document.documentElement.style["font-weight"] = weight;
	document.documentElement.style["text-transform"] = transform;
	document.documentElement.style["background-color"] = background;
	document.documentElement.style["color"] = color;
};
function main() {
	let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
	let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
	let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

	var p = document.createElement("p");
	p.innerHTML = "Welcome Holberton!";
	document.body.appendChild(p);

	var b1 = document.createElement("button");
	b1.innerHTML = "Spooky";
	document.body.appendChild(b1);
	b1.onclick = () => { spooky() };

	var b2 = document.createElement("button");
	b2.innerHTML = "Dark mode";
	document.body.appendChild(b2);
	b2.onclick = () => { darkMode() };

	var b3 = document.createElement("button");
	b3.innerHTML = "Scream mode";
	document.body.appendChild(b3);
	b3.onclick = () => { screamMode() };
};
main();
