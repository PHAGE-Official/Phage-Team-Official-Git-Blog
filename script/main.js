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

	console.log('This Website Is Developed By Phage Team');
	document.createElement('div');
}