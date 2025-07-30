import React, { useState } from 'react';
import Dashboardnav from './navdashboard';
import DashboardTabs from './dashboardtabs';
import CategoryList from './categorylist'; // This should render based on tab
import Juices from './juices';
import Fruits from './fruits';
import Vegetables from './vegetables';
import Footer from '../footer/footer';


function Dashboard() {
  const [activeTab, setActiveTab] = useState("Food Items");
  const user = JSON.parse(localStorage.getItem('user'));

console.log("Logged in as:", user?.name); // or user.email


  return (
    <>
      <Dashboardnav />
      <DashboardTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      {activeTab === "Food Items" && <CategoryList category="Food" />}
      {activeTab === "Juices" && <Juices category="Juices" />}
      {activeTab === "Fruits" && <Fruits category="Fruits" />}
      {activeTab === "Vegetables" && <Vegetables category="Vegetables" />}
  <Footer/>
    </>
  );
}

export default Dashboard;
