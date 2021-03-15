//展示社交账号图标
import React, { useEffect, useState } from "react";
import styles from "../styles/social.module.css";
import { RiDribbbleLine } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";
import { FaBehance } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Tooltip } from "react-tippy";
import { useIntl } from "gatsby-plugin-intl";

const copy = require("copy-text-to-clipboard");
export default () => {
  const [tip, setTip] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    const btn = document.getElementById("copy-email");
    btn.addEventListener("click", () => {
      copy("guo362429@163.com");
    });
  }, []);
  return (
    <ul className={styles.social_container}>
      <a
        href="https://dribbble.com/troyeguo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className={styles.button_bg}>
          <div className={styles.button_mask}>
            <RiDribbbleLine color="white" size="1.5rem" />
          </div>
        </li>
      </a>
      <a
        href="https://github.com/troyeguo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className={styles.button_bg}>
          <div className={styles.button_mask}>
            <AiOutlineGithub color="white" size="1.5rem" />
          </div>
        </li>
      </a>
      <a
        href="https://www.behance.net/a22370262185571"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className={styles.button_bg}>
          <div className={styles.button_mask}>
            <FaBehance color="white" size="1.2rem" />
          </div>
        </li>
      </a>
      <Tooltip
        disabled={tip}
        title={intl.formatMessage({ id: "Copied" })}
        position="top"
        trigger="click"
        arrow={true}
        distance={20}
      >
        <li
          className={styles.button_bg}
          id="copy-email"
          onMouseEnter={() => {
            setTip(false);
          }}
          onMouseLeave={() => {
            setTip(true);
          }}
        >
          <div className={styles.button_mask}>
            <FiMail color="white" size="1.5rem" />
          </div>
        </li>
      </Tooltip>
    </ul>
  );
};
