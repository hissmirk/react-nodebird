import { Card, Avatar, Button } from 'antd';
import { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers";

const LogoutButton = styled(Button)`
  margin-left: 47px;
`

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">WW<br/>0</div>,
        <div key="following">WW<br/>0</div>,
        <div key="follower">WW<br/>0</div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>ZC</Avatar>}
        title="ZeroCho"
      />
      <LogoutButton onClick={onLogOut}>로그아웃</LogoutButton>
    </Card>
  );
}

export default UserProfile;