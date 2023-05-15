var map = L.map('main_map').setView([4.6344408,-74.1780123], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([4.6281149,-74.0680332]).addTo(map);
L.marker([4.5794549,-74.160091]).addTo(map);
L.marker([4.5794537,-74.1988069]).addTo(map);