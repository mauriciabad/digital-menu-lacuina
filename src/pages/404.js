import { useEffect } from "react";
import { navigate } from "gatsby";

const NotFoundPage = () => {
  useEffect(() => {
    navigate(`/ca/`);
  }, []);

  return null;
};

export default NotFoundPage;