import React from "react";
import { Home, Stethoscope } from 'lucide-react';
import { NavBar } from "./tubelight-navbar";

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Services', url: '/services', icon: Stethoscope }
  ];

  return <NavBar items={navItems} />;
}
