/*
Main.js
--------------------------------------------------
Author:NLTech Coporation & Phage Team
Licence:PSSPL
Time:2022/09/01/22:02
Version:0.0.1_Dev_Alpha
--------------------------------------------------
Todo List:
	Not Decide yet

*/

function Get_Time() {
	// Get Current Time
	let Time = new Date();
	Second = Time.getSeconds();
	console.log(Second);
}

function Exit() {
	/*
	This Function Will Let User Leave The Current Page
	*/
	let confirm = window.confirm('Are You Sure To Leave?');
	if (confirm == true) {
		window.close();
	}
}

function About(){

	let info = 'This Website Is Developed By Phage Team';
	// Get The Body Element
	let body = document.getElementsByTagName('body')[0];
	let div = document.createElement('div');
	body.appendChild(div);
	div.innerHTML = info;
}