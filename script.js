function showPart(part) {
  let name = "";
  let info = "";

  if (part === "engine") {
    name = "Engine";
    info = "Burns a mix of fuel and air in cylinders to create explosions that push pistons, generating power. That power turns the crankshaft and eventually moves the wheels. It produces a lot of heat, so it relies on coolant, oil, and the radiator to stay at the right temperature. Modern engines also have sensors and electronics to optimize fuel efficiency and reduce emissions.";
  }
  if (part === "wheels") {
    name = "Wheels";
    info = "Support the car’s full weight and convert engine power into rolling motion. Tires grip the road, absorbing shocks and helping with steering and stability. Front wheels usually handle steering, while rear wheels often handle driving p";
  }
  if (part === "brakes") {
    name = "Brakes";
    info = "Use friction to slow or stop the wheels, typically with pads pressing on metal discs. Hydraulic systems multiply the force from your foot for effective braking. ABS sensors detect wheel lock-up and modulate braking to prevent skidding. Brakes also help control speed on hills and in emergencies.";
  }
  if (part === "battery") {
    name = "Battery";
    info = "Stores electrical energy to start the engine via the starter motor. Powers all electronics when the engine isn’t running, like lights, radio, and ECU. Alternator recharges the battery while the engine runs. It also stabilizes voltage for sensitive electronics.";
  }
  if (part === "radiator") {
    name = "Radiator";
    info = "Moves heat away from the engine by circulating coolant through thin tubes cooled by air. Fans help when the car is stationary. The thermostat regulates coolant flow to maintain optimal engine temperature. It prevents engine damage from overheating.";
  }

  document.getElementById("part-name").innerText = name;
  document.getElementById("part-info").innerText = info;
}
