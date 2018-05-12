import React from 'react';
import AppStyle from 'Components/AppStyle';
import SideBar from 'Components/SideBar';
import Navbar from 'Components/Navbar';

const Dashboard = () => (
  <AppStyle className="Dashboard">
    <Navbar />
    <section>
      <SideBar />
      <div className="content">
        content
      </div>
    </section>
  </AppStyle>
);

export default Dashboard;
