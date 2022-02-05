import React from "react";
import Logo from "../../Assets/Images/berlin-police-logo.png";

function header() {
  return (
    <div className="flex">
      <img src={Logo} alt="police-logo" className="w-72 py-6 px-20" />
      <div className="flex flex-col justify-center">
        <p className="text-5xl font-semibold">Police Departament of Berlin</p>
        <p className="text-2xl font-semibold">Stolen bykes</p>
      </div>
    </div>
  );
}

export default header;
