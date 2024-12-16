import React from "react";
import "./footer.css";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { FaCopyright } from "react-icons/fa";
import LocaleSwitcher from "../../i18n/LocaleSwitcher";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-links order-2 order-md-1">
          <a href="/">Link 1</a>
          <a href="/">Link 2</a>
          <a href="/">Link 3</a>
          <a href="/">Link 4</a>
        </div>
        <div className="footer-links order-2 order-md-1">
          <a href="/about">About</a>
          <a href="/">Contact</a>
          <a href="/">support</a>
        </div>
        <div className="footer-links order-2 order-md-1">
          <LocaleSwitcher />
          <a href="/">Testimonials</a>
          <a href="/">legals</a>
          <a href="/">Confidentialities </a>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <div>
          <strong>
            Copyright <FaCopyright /> 2024 Jurastudijobs
          </strong>
        </div>
        <div></div>
        <div className="footer-social">
          {/* <h5>Retrouvez-nous sur les reseaux sociaux ...</h5> */}
          <a
            href="https://www.youtube.com/"
            target="_blank"
            title="YouTube"
            rel="noreferrer"
          >
            <BsYoutube />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            title="Facebook"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            href="https://t.me/ "
            target="_blank"
            title="Telegram"
            rel="noreferrer"
          >
            <BsTelegram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;
