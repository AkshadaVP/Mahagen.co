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

    const email = user.primaryEmailAddress?.emailAddress
      .trim()
      .toLowerCase();

    const isAdmin = adminUsers.some(
      (admin) =>
        admin.email.toLowerCase() === email &&
        admin.role.toLowerCase() === "admin"
    );

    console.log("🔁 Redirecting user:", email);
    console.log("🧠 Is admin:", isAdmin);

    if (isAdmin) {
      navigate("/admin-dashboard");
    } else {
      navigate("/");  // <-- non-admins now go to home page
    }
  }, [user, isLoaded, navigate]);

  return <p className="mt-10 text-center">🔄 Redirecting...</p>;
};

export default RedirectAfterLogin;
