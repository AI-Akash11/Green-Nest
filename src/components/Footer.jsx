import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-white text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Plants</a>
        <a className="link link-hover">Feedback</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-5">
          <a>
            <FaFacebook className="text-4xl"></FaFacebook>
          </a>
          <a>
            <FaTwitter className="text-4xl"></FaTwitter>
          </a>
          <a>
            <FaGithub className="text-4xl"></FaGithub>
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
