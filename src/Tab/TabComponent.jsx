import React from 'react';
import TabContainer from './TabContainer';
import Login, { loginTabConfig } from '../Components/Login';
import Register, { registerTabConfig } from '../Components/Register';
import { TabContent } from './StyledTab';
import './tab.css';

const TabComponent = () => {
  return (
    <TabContainer>
      <TabContent filter={loginTabConfig.filter} label={loginTabConfig.label}>
        <Login />
      </TabContent>
      <TabContent filter={registerTabConfig.filter} label={registerTabConfig.label}>
        <Register />
      </TabContent>
    </TabContainer>
  );
};

export default TabComponent;