import React from 'react'
import style from '../../components/dashboard/dashboard.module.css'
//import Card from '@/components/dashboard/card/card'
import Chart from '@/components/dashboard/chart/chart'
import Rightbar from '@/components/dashboard/rightbar/rightbar'
import Transaction from '@/components/dashboard/transection/transaction'
import Card from '@/utils/card'
const Dashboardpage = () => {
  const cardStyle = {
    backgroundColor: '#eddfb7',
    border: '2px solid black',
    color: 'darkblue',
    border-radius: '25px'
    // Add any other CSS properties as needed
  };
  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <div className={style.card}>
          {/* <Card/>
          <Card/> */}
          <Card
        imageSrc="" // Replace with your actual image source
        title="Example Card"
        description="This is a sample card component built with Next.js and Tailwind CSS."
        style={cardStyle}
      >
        <p>Top</p>
      </Card>
      <Card
        imageSrc="" // Replace with your actual image source
        title="Example Card"
        description="This is a sample card component built with Next.js and Tailwind CSS."
        style={cardStyle}
      >
        <p>Top</p>
      </Card>
      <Card
        imageSrc="" // Replace with your actual image source
        title="Example Card"
        description="This is a sample card component built with Next.js and Tailwind CSS."
        style={cardStyle}
      >
        <p>Top</p>
      </Card>
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