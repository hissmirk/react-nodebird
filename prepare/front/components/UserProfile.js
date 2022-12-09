import { Card, Avatar, Button } from 'antd';
import { useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { logoutRequestAction } from "../reducers/user";

const LogoutButton = styled(Button)`
  margin-left: 47px;
`

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, isLoggingOut } = useSelector((state) => state.user);
  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
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
        avatar={<Avatar>{me.nickname}</Avatar>}
        title={me.nickname}
      />
      <LogoutButton onClick={onLogOut} loading={isLoggingOut}>로그아웃</LogoutButton>
    </Card>
  );
}

export default UserProfile;