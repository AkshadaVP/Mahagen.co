import { useUser } from "@clerk/clerk-react";

const UserDashboard = () => {
  const { user } = useUser();

  if (!user) {
    return <p className="text-center mt-20">Loading your profile...</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">
        Welcome, {user.fullName || user.primaryEmailAddress?.emailAddress}!
      </h1>
      <p>This is your private user dashboard.</p>
    </div>
  );
};

export default UserDashboard;
