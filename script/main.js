/*
Main.js
--------------------------------------------------
Author:NLTech Coporation & Phage Team
Licence:PSSPL
Time:2022/09/03/10:21
Version:0.0.1_Dev_Alpha
--------------------------------------------------
Todo List:
	Search Function Is Needed To Search
	Keywords In The SQL|Database

*/

// Variables
let Flag = true;

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

	/*
	This Function Show The Information About This Website
	*/
	if (Flag == true){
		let info = 'This Website Is Developed By Phage Team.Version:0.0.1_Dev_Alpha';
		// Get The Body Element
		let body = document.getElementsByTagName('body')[0];
		let div = document.createElement('div');
		body.appendChild(div);
		div.innerHTML = info;
		div.setAttribute('id','info');
		Flag = false;
	}
	// If Existed Then Delete It
	else{
		let div = document.getElementById('info');
		div.parentNode.removeChild(div);
		Flag = true;
	}
}

function User_Device(){
	let Screen_Size = [];
	let CPU_Type = navigator.cpuClass;
	let Platfrom = navigator.platform;
	Screen_Size.push(window.screen.width);
	Screen_Size.push(window.screen.height);
	window.alert('Monitor Size:'+Screen_Size[0]+'x'+Screen_Size[1]+
		'\nCPU:'+CPU_Type+
		'\nPlatfrom:'+Platfrom);
}