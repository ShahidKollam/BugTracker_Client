import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconArrowLeft, IconBrandTabler, IconSettings, IconUserBolt } from "@tabler/icons-react";
import Link from "react-router-dom";
import { cn } from "../lib/utils";
// import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";

export function SidebarDash() {
  const links = [
    {
      label: "Dashboard",
      href: "/admindashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "User Request",
      href: "/userRequest",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "UserManagement",
      href: "/usermanagement",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Add Project",
      href: "/addproject",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Assigned List",
      href: "/assignedlist",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
        label: "Bugs Reported",
        href: "#",
        icon: (
          <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
        ),
      },
      {
        label: "Bugs Assigned",
        href: "#",
        icon: (
          <IconSettings className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
        ),
      },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "flex h-screen",
        // "bg-gray-100 dark:bg-neutral-900"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} links={links} />
      {/* <Dashboard /> */}
      {/* <InfiniteMovingCardsDemo/> */}
    </div>
  );
}

export const Sidebar = ({
  open,
  setOpen,
  links,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  links: { label: string; href: string; icon: React.ReactNode }[];
}) => {
  return (
    <motion.div
      className={cn(
        "relative z-50 h-full bg-gradient-to-r from-gray-500 via-cyan-700 to-slate-900 text-white flex-shrink-0 flex flex-col items-center",
        "shadow-xl"
      )}
      initial={{ width: open ? "250px" : "70px" }}
      animate={{ width: open ? "250px" : "70px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Toggle Button */}
      <div
        className="absolute top-5 right-[-15px] p-2 bg-white text-black rounded-full shadow-md cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <IconArrowLeft className="h-5 w-5" />
        ) : (
          <IconArrowLeft className="h-5 w-5 rotate-180" />
        )}
      </div>

      {/* Logo */}
      <motion.div
        className="mt-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {open ? <Logo /> : <LogoIcon />}
      </motion.div>

      {/* Links */}
      <div className="flex flex-col gap-6 w-full px-4">
        {links.map((link, idx) => (
          <SidebarLink key={idx} link={link} open={open} />
        ))}
      </div>
    </motion.div>
  );
};

export const SidebarLink = ({
  link,
  open,
}: {
  link: { label: string; href: string; icon: React.ReactNode };
  open: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <a
        href={link.href}
        className={cn(
          "flex items-center justify-start gap-3 py-3 px-2 rounded-lg cursor-pointer transition-all",
          "hover:bg-white hover:bg-opacity-10"
        )}
      >
        {link.icon}
        {open && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="text-white font-medium"
          >
            {link.label}
          </motion.span>
        )}
      </a>
    </motion.div>
  );
};

export const Logo = () => {
  return (
    <a
      href="#"
      className="flex items-center space-x-2 text-lg font-bold text-white"
    >
      <motion.div
        className="h-8 w-8 bg-white text-black rounded-full flex items-center justify-center"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
        A
      </motion.div>
      <span>Acet Labs</span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <motion.div
      className="h-8 w-8 bg-white text-black rounded-full flex items-center justify-center"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 1 }}
    >
      A
    </motion.div>
  );
};

// Dummy dashboard content
    // const Dashboard = () => {
    //   return (
    //     <div className="flex-1 p-8 bg-transparant dark:bg-neutral-900">
    //       <div className="text-lg font-semibold">Welcome to the Dashboard!</div>
    //     </div>
    //   );
    // };


