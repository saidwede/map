var map = L.map('mapid').setView([-25.2744, 133.7751], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-25.2744, 133.7751]).addTo(map)
    .bindPopup('This is project 001')
    .openPopup();
L.marker([-24.3071351, 116.9106403]).addTo(map)
    .bindPopup('This is project 002')
    .openPopup();
    L.marker([-31.1028991, 147.0803318]).addTo(map)
    .bindPopup('This is project 003')
    .openPopup();
