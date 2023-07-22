import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'antd';
import GameDataContext from '../Store/gameContext';
const columns = [
  {
    title: 'Participation',
    dataIndex: 'participated',
    width: '70%',
  },
  {
    title: 'Won',
    dataIndex: 'won',
    width: '70%',
  }
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const UserTable = () => {
  const [data,setData]= useState([]);
  let {getUsersData} = useContext(GameDataContext);
  useEffect(()=>{
    getUsersData("rpsWonRecord").then(e=>{
      setData(e)
    })
    
  },[])
  return <Table columns={columns} dataSource={data} onChange={onChange} />
};
export default UserTable;