let counter = 0;

// Listen to connections from multiple tabs
onconnect = function(e) {
    const port = e.ports[0];

    // Listen to messages from the tab
    port.onmessage = function(event) {
        if (event.data === 'increment') {
            counter++;
            // Send updated counter back to all connected ports
            port.postMessage(counter);
        }
    };

    // Send initial value to the new tab
    port.postMessage(counter);
};
