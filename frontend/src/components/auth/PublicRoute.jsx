import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { readAppData } from "../../lib/storage";

const PublicRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const auth = readAppData("auth", null);
    if (auth?.accessToken) {
      navigate("/dashboard", { replace: true });
    } else {
      setIsAllowed(true);
    }
  }, [navigate]);

  if (!isAllowed) return null;

  return children;
};

export default PublicRoute;
