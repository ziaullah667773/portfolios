import Link from 'next/link';
import React from 'react'
import Footer from './Footer';
import Navbar from "./Navbar";



const Layout = ({ children }) => {

    return (
        <>
            <div className=' bg-slate-50 dark:bg-slate-00  '>
                <Navbar />
                <div className=' '>
                    {children}
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Layout;
