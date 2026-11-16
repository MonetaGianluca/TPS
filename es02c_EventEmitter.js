const EventEmitter = require('events');

class Semaforo extends EventEmitter {
  constructor() {
    super();
    this.stato = 'rosso';
  }
  
  cambiaColore(nuovoColore) {
    // TODO: Valida che il colore sia 'rosso', 'giallo' o 'verde'
    
    const vecchioStato = this.stato;
    this.stato = nuovoColore;
    
    // TODO: Emetti l'evento 'cambio-colore' con vecchio e nuovo stato
    
    // TODO: Emetti anche eventi specifici: 'rosso', 'giallo', 'verde'
  }
  
  avviaSequenza() {
    // TODO: Implementa la sequenza automatica: verde -> giallo -> rosso -> verde...
    // Usa setInterval con intervalli di 3 secondi
  }
}

// TODO: Crea istanza e aggiungi listener
const semaforo = new Semaforo();

// TODO: Listener per ogni cambio colore

// TODO: Listener specifico per 'rosso' che avvisa "STOP!"

// TODO: Listener che conta i cambi (usa once per il primo cambio)

// TODO: Avvia la sequenza automatica
