import { useEffect } from "react";
import { navigate } from "gatsby";

const getRedirectLanguage = () => {
  if (typeof navigator === `undefined`) {
    return "ca";
  }

  const lang = navigator && navigator.language && navigator.language.split("-")[0];
  return lang || "ca";
};

const IndexPage = () => {
  useEffect(() => {
    const urlLang = getRedirectLanguage();

    navigate(`/${urlLang}/`);
  }, []);

  return null;
};

export default IndexPage;