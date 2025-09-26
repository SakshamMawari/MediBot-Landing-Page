import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { ThemeToggle } from "./theme-toggle";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(items[0].name);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const currentItem = items.find(item => item.url === location.pathname);
    if (currentItem) {
      setActiveTab(currentItem.name);
    }
  }, [location.pathname, items]);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-0 right-0 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4 bg-background/5 border border-border backdrop-blur-lg py-2 px-6 rounded-full shadow-lg mx-4 sm:mx-8">
        {/* Left side - Navigation items */}
        <div className="flex items-center gap-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "bg-muted text-primary",
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </div>

        {/* Right side - Buttons and theme toggle */}
        <div className="flex items-center gap-3">
          <a 
            href="http://localhost:3001/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Free Trial
          </a>
          <Link to="/signup" className="px-6 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-100 transition-colors shadow-lg">
            Sign Up
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
