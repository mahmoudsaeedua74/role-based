import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/sliceAuth/authSlice";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

import Logo from "../ui/Logo";
import NavigationItems from "./NavigationItems";
import {
  containerVariant,
  menuItemVariants,
  overlayVariants,
  sidebarVariants,
} from "../../data/motionVariants";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    setIsOpen(false);
    navigate("/login");
  };

  //to close the mobile sidebar when window size becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // to stope user from scroll if he opens the sidebar
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop*/}
      <AnimatePresence>
        <motion.nav
          variants={sidebarVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="bg-sidebar text-[#9E9E9E] font-semibold py-10 px-4 fixed top-0 bottom-0 w-[300px] items-center flex-col gap-10 z-50 hidden md:flex"
        >
          <motion.div variants={menuItemVariants}>
            <Logo />
       
          </motion.div>
          <NavigationItems
            handleNavLinkClick={() => setIsOpen(false)}
            handleLogout={handleLogout}
          />
        </motion.nav>
      </AnimatePresence>

      {/* Mobile Header */}
      <div className="flex justify-between p-3 items-center  md:hidden border-b">
        <Logo size={"size-20"} />
        <Button
          onClick={() => setIsOpen(true)}
          variant="ghost"
          size="roundIcon"
          aria-label="Toggle menu"
        >
          <IoMdMenu size={30} />
        </Button>
      </div>
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Sidebar */}
            <motion.nav
              className="bg-[#2C2C2C] text-[#9E9E9E] font-semibold py-6 px-4 fixed top-0 bottom-0 w-[300px] z-50 md:hidden flex flex-col gap-6"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div
                variants={containerVariant}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col gap-6 flex-1 "
              >
                {/* Close Button */}
                <motion.div
                  variants={menuItemVariants}
                  className="w-fit ms-auto"
                >
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2 size-12 hover:text-black cursor-pointer group hover:bg-slate-200 rounded-full transition-all duration-200"
                    aria-label="Close menu"
                  >
                    <MdClose
                      size={30}
                      className="text-white group-hover:text-black group-hover:rotate-180 transition-all duration-200"
                    />
                  </motion.button>
                </motion.div>

                {/* Logo */}
                <motion.div variants={menuItemVariants} className="self-center">
                  <Logo />
                </motion.div>

                {/* Navigation Items */}
                <motion.div variants={menuItemVariants}>
                  <NavigationItems
                    handleNavLinkClick={() => setIsOpen(false)}
                    handleLogout={handleLogout}
                  />
                </motion.div>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
