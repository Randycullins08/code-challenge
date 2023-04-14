import { useState } from "react";

import { POPULAR_SERVICES, VEHICLE_LIST } from "../data";

export default function SelectServiceForm() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedEngine, setSelectedEngine] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const services = POPULAR_SERVICES;
  const vehicleList = VEHICLE_LIST;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Service: ", selectedService);
    console.log("Year: ", selectedYear);
    console.log("Make: ", selectedMake);
    console.log("Model: ", selectedModel);
    console.log("Engine: ", selectedEngine);
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Phone: ", phone);
  };

  return (
    <form onSubmit={handleSubmit} className="service-form-container">
      <div className="select-service-wrapper">
        <label>Select A Service</label>
        <select onChange={(e) => setSelectedService(e.target.value)}>
          <option>Select A Service</option>
          {services &&
            services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
        </select>
      </div>

      {selectedService && (
        <div className="select-year-wrapper">
          <label>Select A Year</label>
          <select onChange={(e) => setSelectedYear(e.target.value)}>
            <option>Select A Year</option>
            {vehicleList &&
              vehicleList.map((vehicle) => (
                <option key={vehicle.id} value={vehicle.year}>
                  {vehicle.year}
                </option>
              ))}
          </select>
        </div>
      )}

      {selectedYear && (
        <div className="select-make-wrapper">
          <label>Select A Make</label>
          <select onChange={(e) => setSelectedMake(e.target.value)}>
            <option>Select A Make</option>
            {vehicleList
              .filter((vehicle) => vehicle.year === selectedYear)
              .map((vehicle) => (
                <option key={vehicle.id} value={vehicle.make}>
                  {vehicle.make}
                </option>
              ))}
          </select>
        </div>
      )}

      {selectedMake && (
        <div className="select-model-wrapper">
          <label>Select A Model</label>
          <select onChange={(e) => setSelectedModel(e.target.value)}>
            <option>Select A Model</option>
            {vehicleList
              .filter((vehicle) => vehicle.make === selectedMake)
              .map((vehicle) => (
                <option key={vehicle.id} value={vehicle.model}>
                  {vehicle.model}
                </option>
              ))}
          </select>
        </div>
      )}

      {selectedModel && (
        <div className="select-engine-wrapper">
          <label>Select A Engine</label>
          <select onChange={(e) => setSelectedEngine(e.target.value)}>
            <option>Select A Engine</option>
            {vehicleList
              .filter((vehicle) => vehicle.model === selectedModel)
              .map((vehicle) => (
                <option key={vehicle.id} value={vehicle.engine_size}>
                  {vehicle.engine_size}
                </option>
              ))}
          </select>
        </div>
      )}

      {selectedEngine && (
        <div className="user-info-wrapper">
          <div className="name-wrapper">
            <label>Enter Your Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="email-wrapper">
            <label>Enter Your Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="phone-wrapper">
            <label>Enter Your Phone Number</label>
            <input
              type="text"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </div>
      )}
    </form>
  );
}
