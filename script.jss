function showPart(part) {
  let name = "";
  let info = "";

  if (part === "engine") {
    name = "Engine";
    info = "The engine is the heart of the car. It burns fuel and air to create power that moves the vehicle.";
  }

  if (part === "wheels") {
    name = "Wheels";
    info = "The wheels support the car and allow it to move by rolling on the road.";
  }

  if (part === "brakes") {
    name = "Brakes";
    info = "Brakes slow down or stop the car by using friction on the wheels.";
  }

  if (part === "battery") {
    name = "Battery";
    info = "The battery provides electrical power to start the engine and run electronics.";
  }

  if (part === "radiator") {
    name = "Radiator";
    info = "The radiator keeps the engine cool by removing heat from the engine coolant.";
  }

  document.getElementById("part-name").innerText = name;
  document.getElementById("part-info").innerText = info;
}
