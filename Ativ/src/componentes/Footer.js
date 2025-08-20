import React from "react";

function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer style={{ background: "#333", padding: "10px", color: "white", textAlign: "center" }}>
      <p>ETEC MCM</p>
    </footer>
  );
}

export default Footer;
