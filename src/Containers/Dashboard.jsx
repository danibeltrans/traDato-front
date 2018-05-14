import React from 'react';
import AppStyle from 'Components/AppStyle';
import SideBar from 'Components/SideBar';
import Navbar from 'Components/Navbar';

const Dashboard = ({ children }) => (
  <AppStyle className="Dashboard">
    <Navbar />
    <section>
      <SideBar />
      <div className="content">
        {children}
      </div>
    </section>
  </AppStyle>
);

export default Dashboard;
