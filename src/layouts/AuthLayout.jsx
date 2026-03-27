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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "linear" }}
                    className="grow w-full flex flex-col overflow-hidden"
                >
                    <Outlet></Outlet>
                </motion.main>
            </AnimatePresence>
        </div>
    );
};

export default AuthLayout;