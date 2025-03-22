import TripForm from "../components/TripForm";
import TripList from "../components/TripList";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Travel Planner</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Plan your perfect getaway, keep track of your trips, and manage your travel budget all in one place.
          </p>
        </div>
        <TripForm />
        <TripList />
      </div>
    </div>
  );
};

export default Home;