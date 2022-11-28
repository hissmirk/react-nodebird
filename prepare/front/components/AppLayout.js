import PropTypes from 'prop-types';

const AppLayout = ({ children }) => {

  return (
    <>
      <div>공통메뉴</div>
      {children}
    </>
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;