const operazioni = [
	(a,b)=>a+b,
	(a,b)=>a-b,
	(a,b)=>a*b,
	(a,b)=>a/b
];

for(let i=0; i<operazioni.length; i++){
	console.log(operazioni[i](10,2));
}
