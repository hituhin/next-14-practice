import React from 'react'
import style from '../../components/dashboard/dashboard.module.css'
import Card from '@/components/dashboard/card/card'
import Chart from '@/components/dashboard/chart/chart'
import Rightbar from '@/components/dashboard/rightbar/rightbar'
import Transaction from '@/components/dashboard/transection/transaction'
const Dashboardpage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <div className={style.card}>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <Transaction/>
        <Chart/>
      </div>
      <div className={style.side}>
        <Rightbar/> 
      </div>
    </div>
  )
}

export default Dashboardpage