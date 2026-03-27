import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

const HomeLayout = () => {
    const location = useLocation();
    
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 relative">
            <Navbar></Navbar>
            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "linear" }}
                    className="grow w-full"
                >
                    <div className="pb-10 md:pb-16">
                        <Outlet></Outlet>
                    </div>
                </motion.main>
            </AnimatePresence>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;