import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

const HomeLayout = () => {
    const location = useLocation();
    
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 relative overflow-hidden">
            <Navbar></Navbar>
            <AnimatePresence mode="wait">
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <motion.main
                    key={location.pathname}
                    initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="grow w-full"
                >
                    <Outlet></Outlet>
                </motion.main>
            </AnimatePresence>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;