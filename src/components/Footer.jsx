import React from "react";
import { FaFacebook, FaInstagram, FaPinterest} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-white text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a href="https://github.com/AI-Akash11" className="link link-hover">About us</a>
        <a href="https://github.com/AI-Akash11" className="link link-hover">Contact</a>
        <a href="https://github.com/AI-Akash11" className="link link-hover">Privacy Policy</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-5">
          <a href="https://github.com/AI-Akash11">
            <FaFacebook className="text-4xl"></FaFacebook>
          </a>
          <a href="https://github.com/AI-Akash11">
            <FaInstagram className="text-4xl"></FaInstagram>
          </a>
          <a href="https://github.com/AI-Akash11">
            <FaPinterest className="text-4xl"></FaPinterest>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - GreenNest. All rights
          reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
