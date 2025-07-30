
import React from 'react';
import './dashboard.css';

const tabs = ['Food Items', 'Juices', 'Fruits', 'Vegetables'];

const DashboardTabs = ({ activeTab, onTabChange }) => {
  const handleTabClick = (tab) => {
    if (typeof onTabChange === 'function') {
      onTabChange(tab);
    }
  };

  return (
    <div className="tabs-container">
      {tabs.map((tab, index) => (
        <div
          key={tab}
          className={`tab-item ${activeTab === tab ? 'active' : ''}`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default DashboardTabs;
