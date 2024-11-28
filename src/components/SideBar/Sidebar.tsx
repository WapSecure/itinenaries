import React from "react";
import ActivitiesIcon from "../../assets/icons/ActivitiesIcon";
import HotelsIcon from "../../assets/icons/HotelsIcon";
import FlightIcon from "../../assets/icons/FlightIcon";
import StudyIcon from "../../assets/icons/StudyIcon";
import VisaIcon from "../../assets/icons/VisaIcon";
import SuitCaseIcon from "../../assets/icons/SuitCaseIcon";
import MedicalIcon from "../../assets/icons/MedicalIcon";
import PackageIcon from "../../assets/icons/PackageIcon";
import CaretUpDownIcon from "../../assets/icons/CaretUpDownIcon";

const Sidebar: React.FC = () => {
  return (
    <div className="h-[650px] w-64 bg-white shadow-md">
      <div className="flex flex-col py-6 px-4">
        {[
          { icon: <ActivitiesIcon />, label: "Activities" },
          { icon: <HotelsIcon />, label: "Hotels" },
          { icon: <FlightIcon />, label: "Flights" },
          { icon: <StudyIcon />, label: "Study" },
          { icon: <VisaIcon />, label: "Visa" },
          { icon: <SuitCaseIcon />, label: "Immigration" },
          { icon: <MedicalIcon />, label: "Medical" },
          { icon: <PackageIcon />, label: "Vacation Packages" },
        ].map((item, index) => (
          <button
            key={index}
            className="flex items-center py-2 px-4 my-1 text-gray-700 hover:bg-gray-200 rounded-md"
            onClick={undefined}
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div className="bg-gray-100 py-4 mx-6 px-4 cursor-pointer flex items-center justify-between">
        <span className="bg-blue-600 text-white p-2">Go</span>
        <p className="text-gray-700 w-full text-xs">Create Account</p>
        <CaretUpDownIcon className="h-5 w-5" />
      </div>
    </div>
  );
};

export default Sidebar;
