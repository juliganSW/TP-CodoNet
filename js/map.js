let map = L.map('map').setView([-34.61, -58.44], 5);

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,13);
})

//Agregamos los marcadores para cada ubicacion
//Rosario
let rosarioMarker = L.marker([-32.9420, -60.6397]).addTo(map);
rosarioMarker.bindPopup("Rosario, Argentina");

//Mar del Plata
let marDelPlataMarker = L.marker([-38.0055, -57.5426]).addTo(map);
marDelPlataMarker.bindPopup("Mar del Plata, Argentina");

//Bahia Blanca
let bahiaBlancaMarker = L.marker([-38.7196, -62.2654]).addTo(map);
bahiaBlancaMarker.bindPopup("Bahía Blanca, Argentina");

//Comodoro Rivadavia
let comodoroRivadaviaMarker = L.marker([-45.8641, -67.4966]).addTo(map);
comodoroRivadaviaMarker.bindPopup("Comodoro Rivadavia, Argentina");

//Córdoba
let CordobaMarker = L.marker([-31.4201, -64.188]).addTo(map);
comodoroRivadaviaMarker.bindPopup("Córdoba, Argentina");

//Puerto Madero 
let BuenosAiresMarker = L.marker([-34.615803, -58.363476]).addTo(map);
comodoroRivadaviaMarker.bindPopup("Buenos Aires, Argentina");

//La Plata
let LaPlataMarker = L.marker([-34.9205, -57.9536]).addTo(map);
comodoroRivadaviaMarker.bindPopup("Buenos Aires, Argentina");

