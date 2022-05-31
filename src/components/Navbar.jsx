import { Avatar, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container"></div>
      <Avatar />
      <Typography.Title level={2} className="logo">
        <Link to="/">Cryptoverse</Link>
      </Typography.Title>
    </div>
  );
}
