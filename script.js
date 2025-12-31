function showPart(part) {
  let name = "";
  let info = "";

  if (part === "engine") {
    name = "Engine";
    info = "Burns a mix of fuel and air in cylinders to create explosions that push pistons, generating power. That power turns the crankshaft and eventually moves the wheels. It produces a lot of heat, so it relies on coolant, oil, and the radiator to stay at the right temperature. Modern engines also have sensors and electronics to optimize fuel efficiency and reduce emissions.";
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
