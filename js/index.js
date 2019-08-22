var key = config.SECRET_KEY; 

mapboxgl.accessToken = secretKey;
var map = new mapboxgl.Map({
    container: 'map', // Container ID
    style: 'mapbox://styles/mapbox/streets-v10', // Map style to use
    center: [-74.5, 40], // Starting position [lat, long]
    zoom: 9 // Starting zoom
});