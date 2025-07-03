// src/components/ProtectedAdminRoute.jsx
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { adminUsers } from "../config/adminEmails";

const ProtectedAdminRoute = ({ children }) => {
  const { user, isLoaded } = useUser();

  if (!isLoaded || !user) {
    return <p className="text-center mt-10">🔄 Loading...</p>;
  }

  const email = user?.primaryEmailAddress?.emailAddress?.trim().toLowerCase();
  const isAdmin = adminUsers.some(
    (admin) => admin.email.toLowerCase() === email && admin.role === "admin"
  );

  console.log("🔐 Logged in email:", email);
  console.log("✅ Is admin:", isAdmin);

  if (!isAdmin) {
    return (
      <p className="text-center mt-10 text-red-600 text-lg">
        🚫 Access Denied: You are not authorized to view this page.
      </p>
    );
  }

  return children;
};

export default ProtectedAdminRoute;
