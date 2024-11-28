import "./App.css";
import CardComponent from "./components/Card/Card";
import NavBar from "./components/NavBar/NavBar";
import Sidebar from "./components/SideBar/Sidebar";
import TripItinerariesCard from "./components/TripItinaries/TripItinariesCard";

function App() {
  return (
    <div className="App flex flex-col h-full bg-gray-100">
      <NavBar />
      <div className="flex flex-1 mt-5 flex-col lg:flex-row">
        <div className="lg:block lg:w-1/4 p-5 hidden md:block">
          <Sidebar />
        </div>
        <div className="flex-1 p-5">
          <CardComponent />
          <TripItinerariesCard />
        </div>
      </div>
    </div>
  );
}

export default App;
