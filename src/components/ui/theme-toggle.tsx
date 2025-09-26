import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { cn } from '../../lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/5 backdrop-blur-lg transition-colors hover:bg-background/10",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
          scale: theme === 'dark' ? 0.8 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {theme === 'light' ? (
          <Sun className="h-5 w-5 text-yellow-500" />
        ) : (
          <Moon className="h-5 w-5 text-blue-400" />
        )}
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0"
        animate={{
          opacity: theme === 'dark' ? 0.1 : 0.05,
          boxShadow: theme === 'dark' 
            ? '0 0 20px rgba(59, 130, 246, 0.3)' 
            : '0 0 20px rgba(251, 191, 36, 0.3)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}

