import React from 'react'
import Sidebar from '@/components/dashboard/sidebar/sidebar';
import Navbar from '@/components/dashboard/navbar/navbar';
import Styles from "../../components/dashboard/dashboard.module.css"
type childInterface = {
    children: React.ReactNode;
}
const layout = ({children}:childInterface) => {
  return (
    <div className={Styles.container}>
        <div className={Styles.menu}>
            <Sidebar/>
        </div>
        <div className={Styles.content}>
            <Navbar/>
            {children}
        </div>
    </div>
  )
}

export default layout