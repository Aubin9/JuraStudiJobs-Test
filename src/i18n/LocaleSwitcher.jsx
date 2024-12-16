import { useTranslation } from "react-i18next";
import LangIcon from "./LangIcon";
import { supportedLngs } from "./config";
import { useEffect, useRef, useState } from "react";

export default function LocaleSwitcher() {
  const { i18n } = useTranslation();
  const [isHidden, setIsHidden] = useState(false);
  const prevScrollPos = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos.current > currentScrollPos) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
      prevScrollPos.current = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`locale-switcher_container ${isHidden ? "hidden" : ""}`}>
      <div className="locale-switcher">
        <LangIcon />

        <select
          value={i18n.resolvedLanguage}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          {Object.entries(supportedLngs).map(([code, name]) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
