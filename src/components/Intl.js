import React, { useEffect } from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";
const languageName = {
  en: "EN",
  "zh-CN": "CN",
};
export default () => {
  useEffect(() => {
    if (localStorage.getItem("lng")) {
      changeLocale(
        localStorage.getItem("lng") === "cn"
          ? "zh-CN"
          : localStorage.getItem("lng")
      );
    } else if (navigator.language.indexOf("zh") > -1) {
      changeLocale("zh-CN");
      localStorage.setItem("lng", "zh-CN");
    } else {
      console.log(localStorage.getItem("lng"));
    }
  }, []);
  return (
    <div className="intl-container">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map((language, index) => (
            <a
              key={language}
              onClick={() => {
                changeLocale(language);
                localStorage.setItem("lng", language);
              }}
              style={{
                color:
                  currentLocale === language ? `rgba(82, 22, 206, 1)` : `white`,
              }}
            >
              {languageName[language]}&nbsp;
              <span
                style={
                  index === 1
                    ? { display: "none", color: "white" }
                    : { color: "white" }
                }
              >
                /
              </span>
              &nbsp;
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  );
};
