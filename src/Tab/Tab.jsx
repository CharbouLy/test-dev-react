import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ activeTab, filter, label, onClick }) => {
  // récup la props dans le styled component et transformer en styled component le css
  let className = 'tab-item';

  if (activeTab === filter) {
    className += ' tab-active';
  }

  const handleOnClick = () => {
    onClick(filter);
  };

  return (
    <li
      className={className}
      onClick={handleOnClick}
    >
      {label}
    </li>
  );
};

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;