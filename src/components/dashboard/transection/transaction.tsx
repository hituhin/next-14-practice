
import React, { useState } from 'react'
import style from './transection.module.css'
import { Table,Skeleton,Avatar } from 'antd';

const Transaction = () => {
 
  
interface DataType {
  key: string;
  name: string;
  age: number;
  phone:string;
  email:string;
  address: string;
  tags: string[];
}

interface ColumnType 
{
  title:string[];
  dataIndex:string[];
  key: string[];
}

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      phone:"01701084341",
      email:'hituhin09@gmail.com',
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      phone:'01701084341',
      email:'hituhin09@gmail.com',
      address: '10 Downing Street',

    }
    
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',

    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
 
  return (
    <div className={style.container}>
      <h2>Latest Transection</h2>
       <Table dataSource={dataSource} columns={columns} /> 
       <div className={style.another}>
         <h2>User Info</h2>
          
       </div>
    </div>
    
  )
}

export default Transaction