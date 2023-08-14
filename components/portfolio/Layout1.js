import React from 'react'
import Nav1 from "./Nav1";



const Layout = ({ children }) => {

    return (
        <>
            <div className=' bg-slate-50 dark:bg-slate-00  '>
                <Nav1 />
                <div className=' '>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout;
