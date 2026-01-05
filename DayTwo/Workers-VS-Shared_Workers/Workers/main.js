// Create a worker
const worker = new Worker('worker.js');

// Send N to the worker
worker.postMessage(100000000); 

// Receive result from worker
worker.onmessage = (e) => {
    console.log('Sum =', e.data);
};

// Button to change background
document.getElementById('bgButton').addEventListener('click', () => {
    document.body.style.backgroundColor = 'lightblue';
});

