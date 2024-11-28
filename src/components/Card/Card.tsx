import React, { useState } from "react";
import BannerComponent from "../../assets/components/BannerComponent";
import SearchModal from "../SearchModal/SearchModal";

const CardComponent: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"Flight" | "Hotel" | "Activity">(
    "Flight"
  );

  const openModal = (type: "Flight" | "Hotel" | "Activity") => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div className="bg-white rounded-sm shadow-lg p-4 sm:p-6 max-w-6xl mx-auto my-5">
      <div className="hidden lg:block">
        <BannerComponent />
      </div>
      <div className="mt-4">
        <div className="flex items-center w-56 p-1 text-sm text-gray-500 bg-[#FEF4E6]">
          <span>21 March 2024</span>
          <span className="mx-2">→</span>
          <span>21 April 2024</span>
        </div>
        <div className="mt-4">
          <h1 className="text-xl sm:text-2xl font-semibold text-left">
            Bahamas Family Trip
          </h1>
          <p className="text-gray-600 mt-1 text-sm sm:text-base text-left">
            New York, United States of America | Solo Trip
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {[
          {
            title: "Activities",
            description:
              "Build, personalize, and optimize your itineraries with our trip planner.",
          },
          {
            title: "Hotels",
            description:
              "Build, personalize, and optimize your itineraries with our trip planner.",
          },
          {
            title: "Flights",
            description:
              "Build, personalize, and optimize your itineraries with our trip planner.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md flex flex-col items-start justify-between ${
              item.title === "Activities"
                ? "bg-black text-white"
                : item.title === "Hotels"
                ? "bg-[#E7F0FF] text-black"
                : item.title === "Flights"
                ? "bg-blue-600 text-white"
                : ""
            }`}
          >
            <h2 className="text-lg sm:text-xl font-semibold text-left">
              {item.title}
            </h2>
            <p className="text-sm sm:text-base text-left">{item.description}</p>
            <button
              onClick={() =>
                openModal(item.title as "Flight" | "Hotel" | "Activity")
              }
              className={`mt-4 w-full px-4 py-2 rounded-md ${
                item.title === "Flights"
                  ? "bg-white text-blue-600"
                  : "bg-blue-600 text-white"
              }`}
            >
              Add {item.title}
            </button>
          </div>
        ))}
      </div>
      <SearchModal
        isOpen={modalOpen}
        type={modalType}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default CardComponent;
