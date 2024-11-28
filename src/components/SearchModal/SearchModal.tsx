import React, { useState } from "react";
import {
  searchFlights,
  searchHotels,
  searchActivities,
  getFlightDetails,
  getHotelDetails,
  getActivityDetails,
} from "../../services/apiServices";

interface SearchModalProps {
  isOpen: boolean;
  type: "Flight" | "Hotel" | "Activity";
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, type, onClose }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [searchSuccessful, setSearchSuccessful] = useState(false);

  const [departDate, setDepartDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const isSearchEnabled =
    (type === "Flight" && departDate) ||
    (type === "Hotel" && arrivalDate && departureDate) ||
    type === "Activity";

  const handleSearch = async () => {
    setLoading(true);
    setSearchSuccessful(false);
    try {
      let result;
      switch (type) {
        case "Flight":
          result = await searchFlights({
            fromId: "BOM.AIRPORT",
            toId: "DEL.AIRPORT",
            pageNo: "1",
            adults: "1",
            children: "0,17",
            sort: "BEST",
            cabinClass: "ECONOMY",
            currency_code: "AED",
            departDate,
          });
          break;
        case "Hotel":
          result = await searchHotels({
            dest_id: "-2092174",
            search_type: "CITY",
            adults: "1",
            children_age: "0,17",
            room_qty: "1",
            page_number: "1",
            units: "metric",
            temperature_unit: "c",
            languagecode: "en-us",
            currency_code: "AED",
            arrival_date: arrivalDate,
            departure_date: departureDate,
          });
          break;
        case "Activity":
          result = await searchActivities({
            id: "eyJ1ZmkiOi0yMDkyMTc0fQ==",
            sortBy: "trending",
            page: "1",
            currency_code: "INR",
            languagecode: "en-us",
          });
          break;
        default:
          throw new Error("Unsupported type");
      }

      setData(result);
      setSearchSuccessful(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddDetails = async () => {
    try {
      let details;
      switch (type) {
        case "Flight":
          details = await getFlightDetails({ currency_code: "AED" });
          break;
        case "Hotel":
          details = await getHotelDetails({
            dest_id: "-2092174",
            search_type: "CITY",
            adults: "1",
            children_age: "0,17",
            room_qty: "1",
            page_number: "1",
            units: "metric",
            temperature_unit: "c",
            languagecode: "en-us",
            currency_code: "AED",
          });
          break;
        case "Activity":
          details = await getActivityDetails({
            slug: "prugrdm0uamx-small-group-dharavi-slum-tour",
            currency_code: "USD",
          });
          break;
        default:
          throw new Error("Unsupported type");
      }
      console.log("Details:", details);
    } catch (error) {
      console.error(error);
    }
  };

  if (!isOpen) return null;

  const noDataMessage =
    type === "Activity"
      ? "Please click on the search Activity button below to see the listed activities"
      : `No ${type}s to display yet, please enter ${
          type === "Flight"
            ? "departure date"
            : type === "Hotel"
            ? "arrival and departure dates"
            : ""
        } and click on search ${type}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-4">Search for {type}</h2>
        {type === "Flight" && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Departure Date
            </label>
            <input
              type="date"
              className="mt-1 p-2 w-full border rounded-md"
              value={departDate}
              onChange={(e) => setDepartDate(e.target.value)}
            />
          </div>
        )}

        {type === "Hotel" && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Arrival Date
              </label>
              <input
                type="date"
                className="mt-1 p-2 w-full border rounded-md"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Departure Date
              </label>
              <input
                type="date"
                className="mt-1 p-2 w-full border rounded-md"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>
          </>
        )}
        {loading ? (
          <p>Loading...</p>
        ) : data ? (
          <>
            <div className="space-y-4">
              {data?.data?.airlines
                .slice(0, 5)
                .map((airline: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 border-b py-3"
                  >
                    <img
                      src={airline.logoUrl}
                      alt={airline.name}
                      className="w-12 h-12 object-cover"
                    />
                    <span className="flex-1">{airline.name}</span>
                    <span>
                      {airline.minPrice.currencyCode} {airline.minPrice.units}
                    </span>
                    <button
                      onClick={() => handleAddDetails()}
                      className="bg-blue-500 text-white py-1 px-4 rounded-md"
                    >
                      Add {airline.name} Details
                    </button>
                  </div>
                ))}
            </div>
          </>
        ) : (
          <p>{noDataMessage}</p>
        )}
        {!searchSuccessful ? (
          <button
            onClick={handleSearch}
            className={`mt-4 w-full py-2 rounded-md ${
              isSearchEnabled
                ? "bg-blue-600 text-white"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
            disabled={!isSearchEnabled}
          >
            Search {type}
          </button>
        ) : (
          <button
            onClick={handleAddDetails}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded-md"
          >
            Add {type} Details
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
