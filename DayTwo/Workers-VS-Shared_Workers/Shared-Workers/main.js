 // Connect to the shared worker
    const worker = new SharedWorker('shared-worker.js');

    // Port for communication
    const port = worker.port;
    port.start();

    const counterDisplay = document.getElementById('counter');
    const incBtn = document.getElementById('incBtn');

    // Receive messages from worker
    port.onmessage = function(e) {
        counterDisplay.textContent = e.data;
    };

    // Send increment message when button clicked
    incBtn.addEventListener('click', () => {
        port.postMessage('increment');
    });