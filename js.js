//alert('hi')

// <!-- task_1_2 -->
function ok(){
	var num1, num2, r;
	num1 = document.getElementById('numeric1').value;
	num2 = document.getElementById('numeric2').value;
	r = document.getElementById('number');

	if (num1 >= num2){
		r.innerHTML = 'перше число більше';
	}
	else if (num1 <= num2){
		r.innerHTML = 'друге число більше';
	}

	else if (num1 == num2 && num2 == num1){  //як вивести рівне значення?????? 
		r.innerHTML = 'числа рівні';
	}
}

// <!-- task_1_2 -->

// <!-- task_3 -->
function go(){
	var a, p;
	a = document.getElementById('ent').value;
	p = document.getElementById('out');
	if (a>=1 && a<=20){
		// console.log('entranse1');
		// alert('entranse1');
		p.innerHTML = 'entranse1';
	}
	else if (a>=21 && a<=48){
		// console.log('entranse2');
		// alert('entranse2');
		p.innerHTML = 'entranse2';
	}
	else if (a>=49 && a<=90){
		// console.log('entranse3');
		// alert('entranse3');
		p.innerHTML = 'entranse3';
	}
	else {
		p.innerHTML = 'in this house only 3 entrances and 90 apartments';
	}
}
// <!-- task_3 -->


// <!-- task_4 -->
function st(){
	var l, k, s;
	l = document.getElementById('log').value;
	k = document.getElementById('kod').value;
	s = document.getElementById('out1');
	if (l=='ivan' && k==334455){
		// console.log('entranse1');
		// alert('entranse1');
		s.innerHTML = 'Добро пожаловать';
	}
	else if (l=='alex' && k==777){
		// console.log('entranse1');
		// alert('entranse1');
		s.innerHTML = 'Добро пожаловать';
	}
	else if (l=='petr' && k=='b5678'){
		// console.log('entranse1');
		// alert('entranse1');
		s.innerHTML = 'Добро пожаловать';
	}

	else {
		// console.log('entranse3');
		// alert('entranse3');
		s.innerHTML = 'Ошибка входа';
	}

}
//<!-- task_4 -->


//<!-- task_5 -->
function ag(){
	var age, p, e;
	age = document.getElementById('age').value;
	age = parseInt(age);
	e = 2017-age;
	// p = e-age;
	p=document.getElementById('out2');


	if (e>=16){
		
		p.innerHTML = 'Добро пожаловать';  //===== не виводить результат?======
		//alert('Добро пожаловать');
		
	}
	else {
		p.innerHTML = 'Вход воспрещен';
		//alert('Нет');
	}

}


//<!-- task_5 -->

//<!-- task_6 -->
function procent(){
	var d, r;

	d = document.getElementById('nd').value;
	r = document.getElementById('pr');

	if(d>=0 && d<=3){
		r.innerHTML = 'надбавка 0%';
	//alert('надбавка 0%');
	}
	else if(d>=3 && d<=10){
		r.innerHTML = 'надбавка 10%';
	}
	else if(d>=10 && d<=20){
		r.innerHTML = 'надбавка 20%';
	}
	else{
		r.innerHTML = 'надбавка 30%';
	}
}


//<!-- task_6 -->

// function go(){
// 	var d, r;
// 	d = document.getElementById('nd').value;
// 	r = document.getElementById('pr');
// 	if (a>=1 && a<=20){
// 		// console.log('entranse1');
// 		// alert('entranse1');
// 		p.innerHTML = 'entranse1';
// 	}
// 	else if (a>=21 && a<=48){
// 		// console.log('entranse2');
// 		// alert('entranse2');
// 		p.innerHTML = 'entranse2';
// 	}
// 	else if (a>=49 && a<=90){
// 		// console.log('entranse3');
// 		// alert('entranse3');
// 		p.innerHTML = 'entranse3';
// 	}
// 	else {
// 		p.innerHTML = 'in this house only 3 entrances and 90 apartments';
// 	}
// }
