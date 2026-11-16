const EventEmitter = require('events');

class Semaforo extends EventEmitter {
	constructor() {
		super();
		this.stato = 'rosso';
	}
	
	cambiaColore(nuovoColore) {
		
		
		if(nuovoColore != 'rosso' && nuovoColore != 'giallo' && nuovoColore != 'verde'){
			this.stato = 'rosso';	// verifico che lo stato è uno dei tre valori accettati, se non lo è lo imposto su rosso
			return;
		}
		
		const vecchioStato = this.stato;
		this.stato = nuovoColore;
		
		
		this.emit('cambio-colore', vecchioStato, nuovoColore); //emetto cambio-colore con il vecchio e il nuovo colore come parametri per poi stamparli

		this.emit(nuovoColore);	// emetto l'evento del colore specifico nuovo
	}
	
	avviaSequenza() {
		const colori = ['verde','giallo','rosso'];
		let i = 0;
		setInterval(
			()=>{	// primo parametro
				this.cambiaColore(colori[i]);
				i++;
				if(i>colori.length-1){	//ricomincio la sequenza
					i = 0;
				}
			},
			3000	// secondo parametro di setInterval
		);
	}
}


const semaforo = new Semaforo();
let conta = 0;	// conta quante volte è cambiato

semaforo.on('cambio-colore', (vecchioStato, nuovoColore) => {console.log(vecchioStato + ' -> ' + nuovoColore);});	// stampo il vecchio e il nuovo colore quando cambia

semaforo.on('rosso', () => {console.log('STOP!');});	//questo viene stampato quando il semaforo diventa rosso

semaforo.once('cambio-colore', () => {console.log('primo cambio');});	//questo viene stampato solo la prima volta

semaforo.on('cambio-colore', () => {
	conta++;	// incremento e stampo la conta
	console.log('colore cambiato ' + conta + ' volte');
});

semaforo.avviaSequenza();	// avvio la sequenza del semaforo
