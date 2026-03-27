import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

const AuthLayout = () => {
    const location = useLocation();
    
    return (
        <div className="flex flex-col min-h-screen bg-base-100 relative">
            <AnimatePresence mode="popLayout">
                <motion.main
                    key={location.pathname}
                    initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="grow w-full flex flex-col overflow-hidden"
                >
                    <Outlet></Outlet>
                </motion.main>
            </AnimatePresence>
        </div>
    );
};

export default AuthLayout;