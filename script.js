// ==============================
// Variables globales
// ==============================
let urlBase = "https://api.weatherapi.com/v1";
let apiKey = "1ed9fbcc92b444aeb2b134902250701";

// ==============================
// Eventos
// ==============================
// Evento para el botón de búsqueda
document.getElementById('searchBtn').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value;
    if (ciudad) {
        fetchDatosClima(ciudad);
    }
});

// Evento para activar la búsqueda al presionar "Enter"
document.getElementById('ciudadEntrada').addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        const ciudad = document.getElementById('ciudadEntrada').value;
        if (ciudad) {
            fetchDatosClima(ciudad);
        }
    }
});

// ==============================
// Funciones
// ==============================
// Función para obtener los datos del clima
function fetchDatosClima(ciudad) {
    fetch(`${urlBase}/forecast.json?key=${apiKey}&q=${ciudad}&days=3`)
        .then(respuesta => respuesta.json())
        .then(respuesta => mostrarDatosClima(respuesta));
}

// Función para mostrar los datos del clima en el DOM
function mostrarDatosClima(respuesta) {
    console.log(respuesta);

    // Limpieza de contenedores
    const divWeatherData = document.getElementById('weatherData');
    divWeatherData.innerHTML = "";

    const divDay1Container = document.getElementById('day1Container');
    divDay1Container.innerHTML = "";

    const divDay2Container = document.getElementById('day2Container');
    divDay2Container.innerHTML = "";

    const divDay3Container = document.getElementById('day3Container');
    divDay3Container.innerHTML = "";

    // ==============================
    // Datos generales
    // ==============================
    const iconoGeneral = respuesta.current.condition.icon;
    const ciudadNombre = respuesta.location.name;
    const paisNombre = respuesta.location.country;
    const temperaturaActual = respuesta.current.temp_c;

    // ==============================
    // Datos del pronóstico (día 1)
    // ==============================
    const forecastDay1Date = respuesta.forecast.forecastday[0].date;
    const day1Icon = respuesta.forecast.forecastday[0].day.condition.icon;
    const day1Temperatura = respuesta.forecast.forecastday[0].day.avgtemp_c;

    // ==============================
    // Datos del pronóstico (día 2)
    // ==============================
    const forecastDay2Date = respuesta.forecast.forecastday[1].date;
    const day2Icon = respuesta.forecast.forecastday[1].day.condition.icon;
    const day2Temperatura = respuesta.forecast.forecastday[1].day.avgtemp_c;

    // ==============================
    // Datos del pronóstico (día 3)
    // ==============================
    const forecastDay3Date = respuesta.forecast.forecastday[2].date;
    const day3Icon = respuesta.forecast.forecastday[2].day.condition.icon;
    const day3Temperatura = respuesta.forecast.forecastday[2].day.avgtemp_c;

    // ==============================
    // Creación de elementos DOM
    // ==============================
    // Elementos generales
    const iconoImagen = document.createElement('img');
    iconoImagen.src = iconoGeneral;

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadNombre}, `;

    const paisTitulo = document.createElement('h3');
    paisTitulo.textContent = paisNombre;

    const temperaturaActualTitulo = document.createElement('h4');
    temperaturaActualTitulo.textContent = `${Math.floor(temperaturaActual)}ºC`;

    // ==============================
    // Creación de elementos (día 1)
    // ==============================
    const day1DateElement = document.createElement('h3');
    day1DateElement.className = 'date';
    day1DateElement.textContent = forecastDay1Date;

    const day1IconElement = document.createElement('img');
    day1IconElement.className = 'iconForecast';
    day1IconElement.src = day1Icon;

    const day1TemperaturaElement = document.createElement('h3');
    day1TemperaturaElement.className = 'avgTemperatura';
    day1TemperaturaElement.textContent = `${Math.floor(day1Temperatura)}ºC`;

    // ==============================
    // Creación de elementos (día 2)
    // ==============================
    const day2DateElement = document.createElement('h3');
    day2DateElement.className = 'date';
    day2DateElement.textContent = forecastDay2Date;

    const day2IconElement = document.createElement('img');
    day2IconElement.className = 'iconForecast';
    day2IconElement.src = day2Icon;

    const day2TemperaturaElement = document.createElement('h3');
    day2TemperaturaElement.className = 'avgTemperatura';
    day2TemperaturaElement.textContent = `${Math.floor(day2Temperatura)}ºC`;

    // ==============================
    // Creación de elementos (día 3)
    // ==============================
    const day3DateElement = document.createElement('h3');
    day3DateElement.className = 'date';
    day3DateElement.textContent = forecastDay3Date;

    const day3IconElement = document.createElement('img');
    day3IconElement.className = 'iconForecast';
    day3IconElement.src = day3Icon;

    const day3TemperaturaElement = document.createElement('h3');
    day3TemperaturaElement.className = 'avgTemperatura';
    day3TemperaturaElement.textContent = `${Math.floor(day3Temperatura)}ºC`;

    // ==============================
    // Inserción en el DOM
    // ==============================
    divWeatherData.appendChild(iconoImagen);
    divWeatherData.appendChild(ciudadTitulo);
    divWeatherData.appendChild(paisTitulo);
    divWeatherData.appendChild(temperaturaActualTitulo);

    divDay1Container.appendChild(day1DateElement);
    divDay1Container.appendChild(day1IconElement);
    divDay1Container.appendChild(day1TemperaturaElement);

    divDay2Container.appendChild(day2DateElement);
    divDay2Container.appendChild(day2IconElement);
    divDay2Container.appendChild(day2TemperaturaElement);

    divDay3Container.appendChild(day3DateElement);
    divDay3Container.appendChild(day3IconElement);
    divDay3Container.appendChild(day3TemperaturaElement);
}


