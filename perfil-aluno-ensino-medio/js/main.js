import { renderPerfil, renderBimestres } from './dom.js';
import { setupEvents, setupBimestreEvents } from './events.js';

// Inicializar o aplicativo
function init() {
    renderPerfil();
    renderBimestres();
    setupEvents();
    setupBimestreEvents();
}

init();