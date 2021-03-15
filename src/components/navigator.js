//顶部导航栏
import React, { useEffect } from "react";
import styles from "../styles/navigator.module.css";
import { useIntl } from "gatsby-plugin-intl";
export default (props) => {
  const intl = useIntl();
  useEffect(() => {
    document.getElementsByTagName("dl")[0].style.backgroundColor =
      "rgba(82, 22, 206, 1)";
    document.getElementsByTagName("dl")[4].style.backgroundColor =
      "rgba(82, 22, 206, 1)";
    document.getElementsByTagName("dl")[8].style.backgroundColor =
      "rgba(82, 22, 206, 1)";
  }, []);
  const navigators = [
    { id: 0, name: "intro", anchor: "intro" },
    { id: 1, name: "develop", anchor: "develop" },
    { id: 2, name: "design", anchor: "design" },
  ];
  const renderNav = () => {
    return navigators.map((item, index) => {
      return (
        <li className={styles.page_link} key={item.id}>
          <dl className={styles.circle} id="circle"></dl>
          <div className={styles.page_text}>
            {intl.formatMessage({ id: item.name })}
          </div>
        </li>
      );
    });
  };
  return (
    <div className={styles.navigator_container}>
      <div className={styles.navigator_line}></div>
      <ul className={styles.link_container}>{renderNav()}</ul>
    </div>
  );
};
