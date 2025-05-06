import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const { user } = useUser();

  if (!user) {
    return <p className="text-center mt-20">Loading your profile...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="bg-white w-full max-w-4xl p-10 rounded-lg shadow-lg">
        <Link
          to="/"
          className="inline-block mb-6 px-6 py-3 text-white bg-gray-300 rounded-md hover:bg-gray-400 transition-all duration-300"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-6 text-3xl font-semibold text-gray-800 text-center">
          My Profile
        </h1>

        <div className="flex flex-col items-center space-y-8">
          {/* Avatar */}
          <div className="w-32 h-32 flex items-center justify-center bg-blue-600 text-white rounded-full">
            <span className="text-5xl font-bold">
              {user.fullName ? user.fullName[0].toUpperCase() : 'U'}
            </span>
          </div>

          {/* User Email */}
          <p className="text-lg font-medium text-gray-700">{user.primaryEmailAddress?.emailAddress}</p>

          {/* Action Button */}
          <Link
            to="/apply-form"
            className="px-8 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-300 text-lg"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
