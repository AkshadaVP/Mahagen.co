// src/Pages/RedirectAfterLogin.jsx
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { adminUsers } from "../config/adminEmails";

const RedirectAfterLogin = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded || !user) return;

    const email = user?.primaryEmailAddress?.emailAddress?.trim().toLowerCase();
    const isAdmin = adminUsers.some(
      (admin) => admin.email.toLowerCase() === email && admin.role === "admin"
    );

    console.log("🔁 Redirecting user:", email);
    if (isAdmin) {
      navigate("/admin-dashboard");
    } else {
      navigate("/user-dashboard");
    }
  }, [user, isLoaded, navigate]);

  return <p className="text-center mt-10">🔄 Redirecting...</p>;
};

export default RedirectAfterLogin;
