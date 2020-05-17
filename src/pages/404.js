import { useEffect } from "react";
import { navigate } from "gatsby";

const NotFoundPage = () => {
  useEffect(() => {
    navigate(`/menu/ca/`);
  }, []);

  return null;
};

export default NotFoundPage;