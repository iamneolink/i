import React from "react";

function Footer() {
  return (
    <footer
      style={{
        marginTop: "2rem",
        padding: "1rem 0",
        textAlign: "center",
        background: "#f3f4f6",
        color: "#555",
        fontSize: "0.95em",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      Neo Cricket Tournament Registration System &copy;{" "}
      {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
