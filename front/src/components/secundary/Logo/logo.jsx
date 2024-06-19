import React from "react";

const Logo = ({ src, alt, children }) => {
  return (
    <a href="/">
      <img src={src} alt={alt} />
      {children}
    </a>
  );
};

export default Logo;
