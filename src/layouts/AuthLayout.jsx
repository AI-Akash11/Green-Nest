import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

const AuthLayout = () => {
    const location = useLocation();
    
    return (
        <div className="flex flex-col min-h-screen bg-base-100 relative">
            <Navbar></Navbar>
            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
                    initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="grow w-full flex flex-col overflow-hidden"
                >
                    <Outlet></Outlet>
                </motion.main>
            </AnimatePresence>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;