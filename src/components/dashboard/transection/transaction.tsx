import React from 'react'
import style from './transection.module.css'

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

interface ColumnType 
{
  title:string[];
  dataIndex:string[];
  key: string[];
}


const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];


const columns:ColumnType= [
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
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    
  }
];





const Transaction = () => {
  return (
    <div className={style.container}>
      <h2>Latest Transection</h2>
        <Table column={columns} dataSource={data}/>
    </div>
  )
}

export default Transaction