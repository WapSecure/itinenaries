import React, { useState } from "react";
import FlightCardIcon from "../../assets/icons/FlightCardIcon";
import CloseIcon from "../../assets/icons/CloseIcon";
import HotelsIcon from "../../assets/icons/HotelsIcon";
import AirlineIcon from "../../assets/icons/AirlineIcon";
import NairaIcon from "../../assets/icons/NairaIcon";
import SearchModal from "../SearchModal/SearchModal";
import { mockTripItineraries } from "../../data/MockDetails";

const EmptyState = ({
  icon: Icon,
  title,
  onAddClick,
}: {
  icon: React.ElementType;
  title: string;
  onAddClick: () => void;
}) => (
  <div className="flex flex-col items-center justify-center text-center gap-4 py-10">
    <Icon className="w-12 h-12 text-gray-400" />
    <p className="text-gray-600 text-lg">No requests yet</p>
    <button
      onClick={onAddClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-md"
    >
      Add {title}
    </button>
  </div>
);

const TripItinerariesCard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"Flight" | "Hotel" | "Activity">(
    "Flight"
  );

  const openModal = (type: "Flight" | "Hotel" | "Activity") => {
    setModalType(type);
    setModalOpen(true);
  };

  const { flights, hotels, activities } = mockTripItineraries;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto my-5 relative space-y-8">
      <div className="bg-[#F0F2F5] p-6">
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <h2 className="text-xl font-semibold">Flights</h2>
          <button
            onClick={() => openModal("Flight")}
            className="px-4 py-2 bg-white text-blue-600 rounded-md mt-2 sm:mt-0"
          >
            Add Flight
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {flights.length > 0 ? (
            flights.slice(0, 2).map((flight, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-4 border-b border-gray-200 flex-col relative"
              >
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-24">
                  <div className="flex items-center space-x-2 mb-2">
                    <AirlineIcon className="w-5 h-5 text-gray-600" />
                    <div className="flex-col">
                      <h3 className="text-lg font-semibold pb-1">
                        {flight.flightName}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {flight.flightCode} |{" "}
                        <span className="bg-[#0A369D] text-white p-1">
                          {flight.flightType}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="flex flex-col items-center text-center text-gray-600">
                      <span className="font-semibold">
                        {flight.takeOffDateAndTime}
                      </span>
                      <span>{flight.takeOffDateAndTime}</span>
                    </div>
                    <div className="flex flex-col mx-4">
                      <div className="flex items-center mt-2">
                        <FlightCardIcon className="w-4 h-4 text-gray-500" />
                        <span className="text-xs text-gray-400 mx-1">
                          Duration: {flight.flightDuration}
                        </span>
                        <FlightCardIcon className="w-4 h-4 text-gray-500" />
                      </div>
                      <div className="w-full h-1 my-2 bg-[#E7F0FF] relative">
                        <div className="h-full w-1/2 bg-blue-600 mx-auto"></div>
                      </div>
                      <div className="flex justify-between w-full text-xs text-gray-600">
                        <span>{flight.flightDirection}</span>
                        <span className="font-semibold">Direct</span>
                        <span>{flight.flightDirection}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-4 sm:mt-0">
                      <h4 className="text-lg font-semibold text-center">
                        <NairaIcon /> {flight.flightPrice}
                      </h4>
                    </div>
                  </div>
                </div>

                <hr className="border-t border-gray-100 my-4" />
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-500 text-sm">
                    Facilities: Baggage: {flight.facilities.baggage}, Cabin
                    Baggage: {flight.facilities.cabinBaggage}
                    {flight.facilities.inflightEntertainment &&
                      ", In-flight entertainment"}
                    {flight.facilities.usbPort && ", USB Port"}
                  </div>
                </div>

                <hr className="border-t border-gray-100 my-4" />
                <div className="flex items-center justify-between pr-12">
                  <div className="flex space-x-4">
                    <button className="px-4 py-2 text-blue-600">
                      Flight Details
                    </button>
                    <button className="px-4 py-2 text-blue-600">
                      Price Details
                    </button>
                  </div>
                  <button className="px-4 py-2 text-blue-600 ml-auto">
                    Edit Details
                  </button>
                </div>
                <div className="flex items-center justify-center w-10 bg-[#FBEAE9] absolute right-0 top-0 bottom-0">
                  <CloseIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
                </div>
              </div>
            ))
          ) : (
            <EmptyState
              icon={AirlineIcon}
              title="Flight"
              onAddClick={() => openModal("Flight")}
            />
          )}
        </div>
      </div>

      <div className="bg-[#344054] p-6">
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <h2 className="text-xl font-semibold text-white">Hotels</h2>
          <button
            onClick={() => openModal("Hotel")}
            className="px-4 py-2 bg-white text-[#1D2433] rounded-md mt-2 sm:mt-0"
          >
            Add Hotel
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {hotels.length > 0 ? (
            hotels.slice(0, 2).map((hotel, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-4 border-b border-gray-200 flex-col relative"
              >
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
                  <div className="w-36 bg-gray-300 h-full mr-4 rounded-lg flex items-center justify-center">
                    <HotelsIcon className="text-gray-500" />
                  </div>
                  <div className="flex-col flex-grow">
                    <div className="flex justify-between gap-6">
                      <div className="flex-col text-left">
                        <h3 className="text-lg font-semibold text-[#1D2433]">
                          {hotel.hotelName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {hotel.hotelAddress}
                        </p>
                        <p className="text-sm text-blue-600 mt-1 cursor-pointer">
                          {hotel.showInMap}
                        </p>
                        <div className="flex space-x-2 text-sm mt-1 text-gray-500">
                          <span>{hotel.hotelRating} 8.5</span>
                          <span>{hotel.roomType}</span>
                        </div>
                      </div>
                      {/* Price Info */}
                      <div className="flex-col text-left ml-auto">
                        <h4 className="text-lg font-semibold text-[#1D2433] flex items-center">
                          <span>
                            <NairaIcon />
                          </span>{" "}
                          <span>{hotel.pricePerNight}</span>
                        </h4>
                        <p className="text-sm text-gray-500">
                          Total Price: <NairaIcon />
                          {hotel.totalPrice}
                        </p>
                        <p className="text-sm text-gray-500">
                          1 room x 10 nights incl. taxes
                        </p>
                      </div>
                    </div>
                    <hr className="border-t border-gray-100 my-4" />
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-600">
                        Facilities: 24/7 Service, Free Wi-Fi, Spa
                      </div>
                    </div>
                    <hr className="border-t border-gray-100 my-4" />
                    <div className="flex items-center justify-between space-x-2">
                      <div className="flex space-x-4">
                        <button className="px-4 py-2 text-blue-600">
                          Hotel Details
                        </button>
                        <button className="px-4 py-2 text-blue-600">
                          Price Details
                        </button>
                      </div>
                      <button className="px-4 py-2 text-blue-600 ml-auto">
                        Edit Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <EmptyState
              icon={HotelsIcon}
              title="Hotel"
              onAddClick={() => openModal("Hotel")}
            />
          )}
        </div>
      </div>

      <div className="bg-blue-600 p-6">
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <h2 className="text-xl font-semibold text-white">Activities</h2>
          <button
            onClick={() => openModal("Activity")}
            className="px-4 py-2 bg-white text-blue-600 rounded-md mt-2 sm:mt-0"
          >
            Add Activity
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {activities.length > 0 ? (
            activities.slice(0, 2).map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-4 border-b border-gray-200 flex-col relative"
              >
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
                  <div className="w-full sm:w-36 bg-gray-300 h-full mr-4 rounded-lg flex items-center justify-center">
                    <HotelsIcon className="text-gray-500" />
                  </div>
                  <div className="flex-col flex-grow">
                    <div className="flex justify-between sm:gap-4">
                      <div className="flex-col text-left">
                        <h3 className="text-lg font-semibold text-[#1D2433]">
                          {activity.activityName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {activity.activityDescription}
                        </p>
                        <p className="text-sm text-blue-600 mt-1 cursor-pointer">
                          {activity.showInMap}
                        </p>
                        <div className="flex space-x-2 text-sm mt-1 text-gray-500">
                          <span>9.5 (120)</span>
                          <span>Group Tour</span>
                        </div>
                      </div>
                      <div className="flex-col text-left ml-auto">
                        <h4 className="text-lg font-semibold text-[#1D2433]">
                          {activity.activityPrice}
                        </h4>
                        <p className="text-sm text-gray-500">
                          1 Person x 2 Days
                        </p>
                      </div>
                    </div>
                    <hr className="border-t border-gray-100 my-4" />
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-600">
                        Facilities: Guide, Transport, Snacks
                      </div>
                    </div>
                    <hr className="border-t border-gray-100 my-4" />
                    <div className="flex items-center justify-between space-x-2">
                      <div className="flex space-x-4">
                        <button className="px-4 py-2 text-blue-600">
                          Activity Details
                        </button>
                        <button className="px-4 py-2 text-blue-600">
                          Price Details
                        </button>
                      </div>
                      <button className="px-4 py-2 text-blue-600 ml-auto">
                        Edit Details
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-10 bg-[#FBEAE9] absolute right-0 top-0 bottom-0">
                    <CloseIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <EmptyState
              icon={HotelsIcon}
              title="Activity"
              onAddClick={() => openModal("Activity")}
            />
          )}
        </div>
      </div>

      <SearchModal
        isOpen={modalOpen}
        type={modalType}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default TripItinerariesCard;
