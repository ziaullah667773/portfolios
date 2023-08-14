import React from 'react'
import Nav2 from "./Nav2";



const Layout = ({ children }) => {

    return (
        <>
            <div className=' bg-slate-50 dark:bg-slate-00  '>
                <Nav2  />
                <div className=' '>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout;
