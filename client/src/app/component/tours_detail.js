import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import "./tours_detail.css";
import Footer from "./footer";
import paypal from "../img/paypal.png";
import visa from "../img/visa.png";
import mastercard from "../img/mastercard.png";
import Modal from "react-responsive-modal";

export default class TourseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      tours: props.location.tours
    };
    console.log(props);
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    var id = this.state.tours.tour._id;
    var name = this.state.tours.tour.title;
    var detail = this.state.tours.tour.detail;
    var province = this.state.tours.tour.province;
    var region = this.state.tours.tour.region;
    var type = this.state.tours.tour.type;
    var day = this.state.tours.tour.days;
    console.log();
    console.log(this.state.tours);
    var urlImg = "http://localhost:8081/static/" + id + ".jpg";
    console.log(this.state.tours);
    return (
      <div className="body_container">
        <NavigationBar />
        <div style={{ height: "100%" }}>
          <div className="BG_ToursDetail">
            <div className="imgTours">
              <img
                style={{ borderRadius: "5px" }}
                alt="imgage tours"
                src={urlImg}
              />
            </div>
            <div className="detailTours">
              <div>
                <div style={{ fontWeight: "bold", display: "inline-block" }}>
                  Tour :
                </div>
                {"   "}
                <div className="nameDetailTours"> {name}</div>
              </div>
              <div className="toursInformation">
                <div className="headerInformation">Information</div>
                <div className="contentInformation">
                  <div>
                    <div
                      style={{ fontWeight: "bold", display: "inline-block" }}
                    >
                      Detail
                    </div>{" "}
                    :<div className="detailInformation">{detail}</div>
                  </div>
                  <div>
                    <div
                      style={{ fontWeight: "bold", display: "inline-block" }}
                    >
                      Region
                    </div>{" "}
                    : {region}
                  </div>
                  <div>
                    <div
                      style={{ fontWeight: "bold", display: "inline-block" }}
                    >
                      Province
                    </div>{" "}
                    : {province}
                  </div>
                  <div>
                    <div
                      style={{ fontWeight: "bold", display: "inline-block" }}
                    >
                      Power Spot
                    </div>{" "}
                    : {type}
                  </div>
                  <div>
                    <div
                      style={{ fontWeight: "bold", display: "inline-block" }}
                    >
                      Days
                    </div>{" "}
                    : {day}{" "}
                    <div
                      style={{
                        display: "inline-block",
                        color: "red",
                        fontWeight: "bold"
                      }}
                    >
                      days
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="button is-warning"
                style={{ color: "white", float: "right", marginTop: "10px" }}
                onClick={this.onOpenModal}
              >
                Book
              </a>
              <Modal open={open} onClose={this.onCloseModal} center>
                <img className="imgPayment" alt="paypal" src={paypal} />
                <img className="imgPayment" alt="visa" src={visa} />
                <img className="imgPayment" alt="mastercard" src={mastercard} />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
