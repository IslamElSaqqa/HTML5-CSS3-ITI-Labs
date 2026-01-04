// cookie.js - Web Storage Polyfill

(function () {
    if (window.localStorage) return;

    window.localStorage = {
        setItem: function (key, value) {
            document.cookie = key + "=" + encodeURIComponent(value) + "; path=/";
        },
        getItem: function (key) {
            const cookies = document.cookie.split("; ");
            for (let i = 0; i < cookies.length; i++) {
                const parts = cookies[i].split("=");
                if (parts[0] === key) {
                    return decodeURIComponent(parts[1]);
                }
            }
            return null;
        },
        removeItem: function (key) {
            document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        },
        clear: function () {
            const cookies = document.cookie.split("; ");
            cookies.forEach(cookie => {
                const key = cookie.split("=")[0];
                document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            });
        }
    };
})();
