self.onmessage = function (event) {
    var type = event.data.type;
    var payload = event.data.payload;

    if (type === 'SUM') {
        var sum = 0;

        for (var i = 1; i <= payload.limit; i++) {
            sum += i;
        }

        self.postMessage({
            task: 'SUM',
            result: sum
        });
    }

    if (type === 'FETCH') {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', payload.url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    self.postMessage({
                        task: 'FETCH',
                        result: JSON.parse(xhr.responseText)
                    });
                } else {
                    self.postMessage({
                        task: 'FETCH',
                        error: 'Request failed'
                    });
                }
            }
        };

        xhr.send();
    }
};
