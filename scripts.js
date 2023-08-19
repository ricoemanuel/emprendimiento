document.addEventListener("DOMContentLoaded", function () {
    const cameraContainer = document.getElementById("cameraContainer");

    const cameraData = [
        {
            name: "Cámara 1",
            icon: "fa-video", // Icono de cámara de video
        },
        {
            name: "Cámara 2",
            icon: "fa-video", // Icono de cámara de video
        },
        {
            name: "Cámara 3",
            icon: "fa-video", // Icono de cámara de video
        },
        {
            name: "Cámara 4",
            icon: "fa-video", // Icono de cámara de video
        },
        {
            name: "Cámara 5",
            icon: "fa-video", // Icono de cámara de video
        },
        {
            name: "Cámara 6",
            icon: "fa-video", // Icono de cámara de video
        },
        {
            name: "Cámara 7",
            icon: "fa-video", // Icono de cámara de video
        },
        {
            name: "Cámara 8",
            icon: "fa-video", // Icono de cámara de video
        },
    ];

    cameraData.forEach((camera, index) => {
        const card = document.createElement("div");
        card.className = "col-md-3 mb-4";
        card.innerHTML = `
        <div class="card">
          <div class="card-body text-center">
            <i class="fas ${camera.icon} fa-4x mb-2"></i> <!-- Icono de cámara -->
            <h5 class="card-title">${camera.name}</h5>
            <a target="_blank" class="btn btn-primary">Ver en vivo</a>
        </div>
        </div>
      `;

        cameraContainer.appendChild(card);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const sensorContainer = document.getElementById("sensorContainer");

    const sensorData = [
        {
            name: "Sensor 1",
            status: "Activo",
            icon: "fa-check-circle", // Icono de estado activo
        },
        {
            name: "Sensor 2",
            status: "Inactivo",
            icon: "fa-times-circle", // Icono de estado inactivo
        },
        {
            name: "Sensor 3",
            status: "Activo",
            icon: "fa-check-circle", // Icono de estado activo
        },
        {
            name: "Sensor 4",
            status: "Inactivo",
            icon: "fa-times-circle", // Icono de estado inactivo
        },
        {
            name: "Sensor 5",
            status: "Activo",
            icon: "fa-check-circle", // Icono de estado activo
        },
        {
            name: "Sensor 6",
            status: "Inactivo",
            icon: "fa-times-circle", // Icono de estado inactivo
        },
        {
            name: "Sensor 7",
            status: "Activo",
            icon: "fa-check-circle", // Icono de estado activo
        },
        {
            name: "Sensor 8",
            status: "Inactivo",
            icon: "fa-times-circle", // Icono de estado inactivo
        },
    ];

    sensorData.forEach((sensor) => {
        const card = document.createElement("div");
        card.className = "col-md-3 mb-4";
        card.innerHTML = `
      <div class="card border-primary rounded bg-white text-dark">
        <div class="card-body text-center">
          <i class="fas ${sensor.icon} fa-3x mb-3"></i> <!-- Icono grande -->
          <h5 class="card-title">${sensor.name}</h5>
          <p class="card-text">Estado: ${sensor.status}</p>
        </div>
      </div>
    `;

        sensorContainer.appendChild(card);
    });
});