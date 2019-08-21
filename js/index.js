mapboxgl.accessToken = 'pk.eyJ1IjoiamltLXQiLCJhIjoiY2p6bGFwdmJxMGN3NjNjbzNvMHAzeGhwcyJ9.EVV9I4Bj8bS-B0d2PnB5rA';
var map = new mapboxgl.Map({
    container: 'map', // Container ID
    style: 'mapbox://styles/mapbox/streets-v10', // Map style to use
    center: [47.608013, -90], // Starting position [lat, long]
});