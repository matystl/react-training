import React from "react";

export const Row = ({children}) =>
  <div style={{display: "flex", flexDirection: "row"}}>
    {children}
  </div>;