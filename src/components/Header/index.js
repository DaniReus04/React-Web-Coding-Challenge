import React from "react";
import Logo from "../../Assets/Images/berlin-police-logo.png";

function header() {
  return (
    <div className="flex w-full">
      <img src={Logo} alt="police-logo" className="w-32 py-6" />
      <div className="flex flex-col justify-center px-6 w-full">
        <p className="text-5xl font-semibold">Police Departament of Berlin</p>
        <p className="text-2xl font-semibold">Stolen bykes</p>
      </div>
    </div>
  );
}

export default header;
