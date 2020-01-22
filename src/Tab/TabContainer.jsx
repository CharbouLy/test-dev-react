import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const TabContainer = ({ children }) =>  {
  // mhh utilité react context pour envoyer setActiveTab a Tab ? ou c'est too much pour R
  const [activeTab, setActiveTab] = useState(children[0].props.filter);

  return (
    <div>
      <ul>
        {children.map((child) => {
          const { filter, label } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={filter}
              filter={filter}
              label={label}
              onClick={(tab) => setActiveTab(tab)}
            />
          );
        })}
      </ul>
      <div>
        {children.map((child) => {
          if (child.props.filter !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabContainer;