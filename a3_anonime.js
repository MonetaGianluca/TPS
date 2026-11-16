const funzioni = [
	function(){console.log("lavoro completato!");},
	function(){console.log("non sono capace!");}
];

for(let i=0; i<funzioni.length; i++){
	funzioni[i]();
}
