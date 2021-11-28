import React, { Component } from "react";

//Components
import Header from "./Header";
import GetStarted from "./GetStarted";
import TopicsCarousel from "./TopicsCarousel";
import Topics from "./Topics";
import PointSystem from "./PointSystem";
import Collaborative from "./Collaborative";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div className="container mt-20 mb-20">
        <Header />
        <GetStarted />
        <TopicsCarousel />
        <Topics />
        <PointSystem />
        <Collaborative />
        <Footer />
      </div>
    );
  }
}

export default Home;
