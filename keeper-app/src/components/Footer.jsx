import React from "react";

function Footer() {
  const date = new Date();
  const copyRightYear = date.getFullYear();

  return (
    <footer>
      <p className="footer"> copyrightÂ© {copyRightYear}</p>
    </footer>
  );
}
export default Footer;
