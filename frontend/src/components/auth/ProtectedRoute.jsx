import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearAuth, refreshAccessToken } from "../../lib/api";
import { readAppData } from "../../lib/storage";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const checkSession = async () => {
      const auth = readAppData("auth", null);
      if (auth?.accessToken) {
        if (isMounted) setIsAllowed(true);
        return;
      }

      const accessToken = await refreshAccessToken({ clearOnFail: false });
      if (!isMounted) return;

      if (accessToken) {
        setIsAllowed(true);
        return;
      }

      clearAuth();
      navigate("/", { replace: true });
    };

    checkSession();

    return () => {
      isMounted = false;
    };
  }, [navigate]);

  if (!isAllowed) return null;

  return children;
};

export default ProtectedRoute;
