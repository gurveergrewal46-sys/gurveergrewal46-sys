function showPart(part) {
  let name = "";
  let info = "";

  if (part === "engine") {
    name = "Engine";
    info = "Burns fuel and air in cylinders to push pistons, turning the crankshaft and moving the car. Produces heat, needs cooling and oil. Modern engines use sensors for efficiency and emission control.";
  }
  if (part === "wheels") {
    name = "Wheels";
    info = "Support the car and convert engine power into motion. Front wheels steer, rear wheels often drive. Tires grip the road and suspension keeps contact and smooth ride.";
  }
  if (part === "brakes") {
    name = "Brakes";
    info = "Create friction to slow/stop the wheels. Hydraulic system multiplies foot force; ABS prevents skidding. Controls speed on hills and emergencies.";
  }
  if (part === "battery") {
    name = "Battery";
    info = "Stores electrical energy for starting engine and powering electronics. Alternator recharges it while driving. Stabilizes voltage for sensitive components.";
  }
  if (part === "radiator") {
    name = "Radiator";
    info = "Moves engine heat to coolant, then air. Fans assist when stopped. Thermostat regulates flow. Prevents overheating.";
  }

  document.getElementById("part-name").innerText = name;
  document.getElementById("part-info").innerText = info;
}
