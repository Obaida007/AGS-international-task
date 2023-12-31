import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <Link className="main" to={"/products"}>
      Show the products &gt;
    </Link>
  );
}
