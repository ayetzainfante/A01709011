var map;
var markers = [];

function initMap() {
    map = L.map('map').setView([40.416775, -3.703790], 13); // Usa tus propias coordenadas predeterminadas
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
}

function searchPlaces() {
    var searchText = document.getElementById('searchText').value;
    var queryUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchText)}`;

    fetch(queryUrl)
        .then(response => response.json())
        .then(data => {
            clearMarkers(); // Limpia los marcadores anteriores antes de añadir nuevos
            data.forEach(item => {
                var marker = L.marker([item.lat, item.lon], {title: item.display_name}).addTo(map);
                marker.bindPopup(`<strong>${item.display_name}</strong>`);
                markers.push(marker); // Añade el nuevo marcador a la lista
            });
            if (data.length > 0) {
                map.setView([data[0].lat, data[0].lon], 15); // Centra el mapa en el primer resultado
            }
        })
        .catch(error => console.error('Error al buscar lugares:', error));
}

function clearMarkers() {
    markers.forEach(marker => marker.remove());
    markers = [];
}

window.onload = initMap;
