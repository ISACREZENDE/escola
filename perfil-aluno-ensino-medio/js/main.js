import { renderPerfil, renderBimestre } from './dom.js';
import { setupEvents, setupBimestreEvents } from './events.js';

// Inicializar o aplicativo
function init() {
    const page = document.body.dataset.page;

    if (page === 'main') {
        renderPerfil(); // Renderizar perfil apenas na página principal
        renderBimestre(0); // 1° Bimestre
    } else if (page === 'bimestre2') {
        renderBimestre(1); // 2° Bimestre
    } else if (page === 'bimestre3') {
        renderBimestre(2); // 3° Bimestre
    } else if (page === 'bimestre4') {
        renderBimestre(3); // 4° Bimestre
    }

    setupEvents();
    setupBimestreEvents();
}

init();