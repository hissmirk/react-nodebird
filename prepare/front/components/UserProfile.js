import { Card, Avatar, Button } from 'antd';
import { useCallback } from "react";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
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
      <Button style={{ marginLeft: 47 }} onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
}

export default UserProfile;