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

function UA() {
	/*
	This Function Get Users's User-Agent 
	and Save it in the Local Vistor Database
	*/
	var User_Agent = navigator.userAgent;
	window.alert('User-Agent:'+User_Agent);
}