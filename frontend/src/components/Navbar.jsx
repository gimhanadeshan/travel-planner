import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-400 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          TravelBuddy
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:text-blue-100 transition duration-200">Home</Link>
          <Link to="/login" className="text-white hover:text-blue-100 transition duration-200">Login</Link>
          <Link to="/register" className="text-white hover:text-blue-100 transition duration-200">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;