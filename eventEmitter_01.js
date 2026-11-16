const EventEmitter = require('events');

class SistemaAllarmi extends EventEmitter {
  constructor() {
    super();
    this.allarmi = [];
  }
  
  impostaAllarme(nome, secondi) {
    const allarme = {
      nome,
      secondi,
      timestamp: Date.now()
    };
    
    this.allarmi.push(allarme);
    
    // TODO: Usa setTimeout per emettere 'allarme-suonato' dopo i secondi specificati
    
    // TODO: Emetti evento 'allarme-impostato' immediatamente
  }
  
  impostaPromemoria(messaggio, secondi) {
    // TODO: Simile a impostaAllarme ma emette 'promemoria'
  }
  
  getAllarmiAttivi() {
    return this.allarmi.length;
  }
}

// TODO: Implementa i listener

const sistema = new SistemaAllarmi();

// Listener che suona quando l'allarme scatta

// Listener once per il primo allarme

// Test
// sistema.impostaAllarme('Sveglia', 3);
// sistema.impostaAllarme('Riunione', 5);
// sistema.impostaPromemoria('Bere acqua', 2);
