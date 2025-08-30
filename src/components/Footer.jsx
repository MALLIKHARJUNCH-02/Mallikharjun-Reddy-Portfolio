import React from "react";
import siteData from "../data/site";
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 text-center text-gray-600 mt-20">
      <p>
        © {new Date().getFullYear()} Mallikharjun Reddy. All rights reserved.
      </p>
      <div className="mt-3 flex justify-center gap-6">
        <a href="https://github.com/MALLIKHARJUNCHILUKURI-02" target="_blank" rel="noreferrer" className="hover:text-indigo-600">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/mallikharjun-reddy-chilukuri-754b92241" target="_blank" rel="noreferrer" className="hover:text-indigo-600">
          LinkedIn
        </a>
        <a href={`mailto:${siteData.contact.email}`} className="hover:text-indigo-600">
          Email
        </a>
      </div>
    </footer>
  );
}
