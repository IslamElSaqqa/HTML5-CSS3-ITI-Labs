// Listen for message from main thread
onmessage = function(e) {
    const N = e.data; // a million 1 -> million
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    // Send result back to main thread
    postMessage(sum);
};
