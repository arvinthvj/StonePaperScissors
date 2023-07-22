import React, { useContext, useState } from 'react';
import { Button, Modal } from 'antd';
import GameDataContext from '../Store/gameContext';
import UserForm from './UserForm';

const UserInput = () => {
  
    let {isUserModalOpen, setIsUserModalOpen} = useContext(GameDataContext);

  const handleOk = () => {
    setIsUserModalOpen(false);
  };

  const handleCancel = () => {
    setIsUserModalOpen(false);
  };

  return (
    <>
      <Modal title="Please Enter The Player names" open={isUserModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <UserForm />
      </Modal>
    </>
  );
};

export default UserInput;