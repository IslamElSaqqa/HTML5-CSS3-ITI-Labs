const output = document.getElementById('output');

//create instance from worker
const worker = new Worker('worker.js');

worker.onmessage = function (event) {
    output.textContent = JSON.stringify(event.data, null, 2);
};

document.getElementById('sumBtn').addEventListener('click', function () {
    worker.postMessage({
        type: 'SUM',
        payload: { limit: 100000000 }
    });
});

document.getElementById('fetchBtn').addEventListener('click', function () {
    worker.postMessage({
        type: 'FETCH',
        payload: {
            url: 'https://jsonplaceholder.typicode.com/users'
        }
    });
});
