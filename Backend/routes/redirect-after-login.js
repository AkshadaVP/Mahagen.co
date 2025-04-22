import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const RedirectAfterLogin = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    const email = user.primaryEmailAddress.emailAddress;

    // ✅ Change this to your admin email(s)
    const adminEmails = ["akshadapitale19@gmail.com", "anotheradmin@example.com"];

    if (adminEmails.includes(email)) {
      navigate("/admin-dashboard");
    } else {
      navigate("/user-dashboard");
    }
  }, [user, navigate]);

  return <p className="text-center mt-10">Redirecting...</p>;
};

export default RedirectAfterLogin;
