import React from 'react'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }
const TableComponent = (props) => {
    let {column,dataSource}=props
    console.log({column});
    
    // let{columns dataSource} = props
  return (
    <div>
        
    </div>
  )
}

export default TableComponent