//salvo gli argomenti da riga di comando in una variabile
const args = process.argv.slice(2);//escludo i primi due argomenti (il comando e il nome del file)

function calc(){
	//controllo della lunghezza dell'input
	if(args.length != 3){
		console.log("numero di operandi errato");
		console.log("uso: node es_01_c_args.js [operando] [operazione] [operando]");
		return;
	}

	//controllo se gli operandi inseriti sono numeri validi
	//la funzione Number() converte le gli argomenti da stringa a numero
	//la funzione isNaN() controlla se effettivamente èun numero
	if(isNaN(Number(args[0]))||isNaN(Number(args[2]))){
		console.log("devi inserire dei numeri validi");
		console.log("uso: node es_01_c_args.js [operando] [operazione] [operando]");
		return;
	}

	//switch che controlla l'operando inserito e stampa il risultato dell'operazione
	switch(args[1]){
		case "add":
			console.log(Number(args[0])+Number(args[2]));
			break;
		case "sub":
			console.log(Number(args[0])-Number(args[2]));
                        break;
		case "mul":
			console.log(Number(args[0])*Number(args[2]));
                        break;
		case "div":
			console.log(Number(args[0])/Number(args[2]));
                        break;
		default:
			console.log("operando invalido");
			break;
	}
}
calc();
