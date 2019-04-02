import React, { Component } from "react";
import "./CardTour.css";
import clock from "../img/clock.png";
import location from "../img/location.png";
import share from "../img/share.png";
import SpotTag from "./SpotTag";
import Modal from "react-responsive-modal";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import google from "../img/google.png";
import swal from "sweetalert";

export default class CardTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: this.props.detail.title,
      information: this.props.detail.detail,
      dateAmount: this.props.detail.days,
      region: this.props.detail.region,
      province: this.props.detail.province,
      cost: this.props.detail.cost,
      type: this.props.detail.type,
      id: this.props.detail._id
    };
  }
  onImageError = e => {
    var API_URL = "http://localhost:8081/static/";
    e.target.src = API_URL + "/static/na.jpg";
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.detail.title,
      information: nextProps.detail.detail,
      dateAmount: nextProps.detail.days,
      region: nextProps.detail.region,
      province: nextProps.detail.province,
      cost: nextProps.detail.cost,
      type: nextProps.detail.type,
      id: nextProps.detail._id
    });
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  popup = () => {
    swal("Share success !!", "Have a nice trip", "success");
    this.setState({ open: false });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const {
      open,
      name,
      information,
      dateAmount,
      region,
      province,
      cost,
      type,
      id
    } = this.state;

    var urlImg = "http://localhost:8081/static/" + id + ".jpg";
    return (
      <div className="coverDivCardTour">
        <div className="cardTour">
          <img
            src={urlImg}
            className="imgTour"
            alt="Tour"
            onError={this.onImageError}
          />
          <div className="detailTour">
            <div className="nameTour">{name}</div>
            <div className="tourInformation">{information}</div>
            <div className="date">
              <img className="clock" src={clock} alt="clock" />
              <div className="dateAmount"> {dateAmount} days</div>
            </div>
            <div className="divLocation">
              <img
                className="locationPointer"
                src={location}
                alt="location pointer"
              />
              <div className="detailLocation">
                <div className="region">{region}</div>
                <div className="location">{province}</div>
              </div>
            </div>
            <div className="divPrice">
              {cost} ¥
              <img
                onClick={this.onOpenModal}
                src={share}
                alt="share"
                className="iconShare"
              />
            </div>
            <Modal open={open} onClose={this.onCloseModal} center>
              <div>
                Share tour with
                <br />
                <br />
                <input
                  class="input is-info"
                  type="text"
                  placeholder="https://powerspot.travel/qU5TGFn0Y7I"
                />
                <br />
                <br />
                <img
                  style={{ marginLeft: "0px !important" }}
                  onClick={this.popup}
                  className="iconShareWith"
                  src={facebook}
                  alt="Facebook"
                />
                <img
                  onClick={this.popup}
                  className="iconShareWith"
                  src={twitter}
                  alt="Twitter"
                />
                <img
                  onClick={this.popup}
                  className="iconShareWith"
                  src={google}
                  alt="google"
                />
                <a
                  style={{ float: "right" }}
                  className="button is-info is-outlined"
                >
                  Copy URL
                </a>
              </div>
            </Modal>
            <hr />
            <div className="powerSpot">
              <SpotTag type={type} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
