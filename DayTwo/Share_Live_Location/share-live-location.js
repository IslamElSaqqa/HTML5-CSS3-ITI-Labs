let mapFrame = document.getElementById('location');
let errorMessage = document.getElementById('error-message');

let id;  // watch the positon
function getLoc() {
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPostion, error);
        id = navigator.geolocation.watchPosition(showPostion, error);
    }
}

function showPostion(e)
{
    const lat = e.coords.latitude
    const long = e.coords.longitude
    mapFrame.src = `https://www.google.com/maps?q=${lat},${long}&output=embed`;
    mapFrame.style.display = "block";
}



function error(e)
{
    switch (e.code) {
        case 0:
            errorMessage.innerHTML = "UNKNOWN_ERROR";
            break;
        case 1:
            errorMessage.innerHTML = "PERMISSION_DENIED";
            break;
        case 2:
            errorMessage.innerHTML = "POSITION_UNAVAILABLE";
            break;
        case 3:
            errorMessage.innerHTML = "TIMEOUT";
            break;
            
    }
}

function clearPosition() {
    if (id !== null) {
        navigator.geolocation.clearWatch(id);
        mapFrame.src = "";
        mapFrame.style.display = "none";
    
    }
}

