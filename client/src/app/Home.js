import React, { Component } from "react";
import NavigationBar from "./component/NavigationBar";
import Banner from "./component/Banner";
import Content from "./component/content";
import logo from "./img/logo.png";
import Modal from "react-responsive-modal";
import Footer from "./component/footer";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    var { open } = this.state;
    return (
      <div className="body_container">
        <NavigationBar />
        <div>
          <div className="logo">
            <img alt="logo" src={logo} />
          </div>
          <div onClick={this.onOpenModal} className="whatIsPowerSpot">
            What is Power Spot?
          </div>
        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="modalWhatIs">
            <div className="txtHeaderWhatIs">What Is a Power Spot?</div>
            <p className="txtWhatIs">
              Imagine this very possible situation: you're traveling somewhere
              in Japan on a guided tour. The guide is cheerfully explaining that
              the area you're standing in a power spot. While this phrase comes
              from English, the meaning does not resonate with you at all. You
              stand there politely accepting the moniker; you might even tell
              your friends you visited a power spot. But no one can clearly
              define what a power spot is exactly. That, my traveler, is where
              we come in.
            </p>
            <p className="txtWhatIs">
              While it borrows from English, a power spot, as used here in
              Japan, is more aptly described as a spiritual spot, one where you
              can feel in-tune with nature or the surrounding elements. It might
              sound odd or mystical in those terms, but when you take into
              account famous landmarks around the globe, such as Sedona in the
              United States, Stonehenge in the U.K., and Uluru (Ayers Rock) in
              Australia, it might make a bit more sense. Since time immemorial,
              these places have been believed to have a completely different
              spiritual, or even magnetic, energy. And no, you don't have to be
              a shaman to feel it.
            </p>
            <p className="txtWhatIs">
              While some spots seem to resound more strongly than others
              depending on the individual, surely something on our list will
              recharge your spiritual batteries.
            </p>
          </div>
        </Modal>
        <Banner />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Home;
