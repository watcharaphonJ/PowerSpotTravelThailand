import React, { PureComponent } from "react";
import "./tour.css";
import CardTour from "./CardTour";
import { Link } from "react-router-dom";

export default class Tour extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      tours: props.detail,
      toursEarth: [],
      toursWater: [],
      toursSpirit: []
    };
    this.state.tours.map(el => {
      console.log(el);
      if (el.type == "Earth") {
        this.state.toursEarth.push(el);
      }
      if (el.type == "Water") {
        this.state.toursWater.push(el);
      }
      if (el.type == "Spiritual") {
        this.state.toursSpirit.push(el);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    var toursEarth = [],
      toursWater = [],
      toursSpirit = [];
    nextProps.detail.map(el => {
      if (el.type == "Earth") {
        toursEarth.push(el);
      }
      if (el.type == "Water") {
        toursWater.push(el);
      }
      if (el.type == "Spiritual") {
        toursSpirit.push(el);
      }
    });
    this.setState({
      tours: nextProps.detail,
      toursEarth: toursEarth,
      toursWater: toursWater,
      toursSpirit: toursSpirit
    });
  }

  render() {
    const { toursEarth, toursSpirit, toursWater } = this.state;
    return (
      <div>
        <div className="headerPowerSpot">
          {toursEarth.length === 0 ? (
            <div>
              <div className="namePowerSpot">Earth Energy</div>
              <div className="locationPowerSpot">Forest - Mountain</div>
              <hr />
              <div className="divCardTour">
                Sorry, Don't found tour this type
              </div>
            </div>
          ) : (
            <div>
              <div className="namePowerSpot">Earth Energy</div>
              <div className="locationPowerSpot">Forest - Mountain</div>
              <hr />
              <div className="divCardTour">
                <div className="alignCardTour">
                  {toursEarth.map((tour, i) => {
                    return (
                      <Link
                        className="linkToDetail"
                        to={{ pathname: "/tours_detail", tours: { tour } }}
                      >
                        <CardTour detail={tour} key={i} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {toursWater.length == 0 ? (
            <div>
              <div className="namePowerSpot">Water Energy</div>
              <div className="locationPowerSpot">Ocean - Waterfall - River</div>
              <hr />
              <div className="divCardTour">
                Sorry, Don't found tour this type
              </div>
            </div>
          ) : (
            <div>
              <div className="namePowerSpot">Water Energy</div>
              <div className="locationPowerSpot">Ocean - Waterfall - River</div>
              <hr />
              <div className="divCardTour">
                <div className="alignCardTour">
                  {toursWater.map((tour, i) => {
                    return (
                      <Link
                        className="linkToDetail"
                        to={{ pathname: "/tours_detail", tours: { tour } }}
                      >
                        <CardTour detail={tour} key={i} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {toursSpirit.length == 0 ? (
            <div>
              <div className="namePowerSpot">Spiritual Energy</div>
              <div className="locationPowerSpot">
                {" "}
                Shrine - Library - Temple - Salon - Graveyard
              </div>
              <hr />
              <div className="divCardTour">
                Sorry, Don't found tour this type
              </div>
            </div>
          ) : (
            <div>
              <div className="namePowerSpot">Spiritual Energy</div>
              <div className="locationPowerSpot">
                Shrine - Library - Temple - Salon - Graveyard
              </div>
              <hr />
              <div className="divCardTour">
                <div className="alignCardTour">
                  {toursSpirit.map((tour, i) => {
                    return (
                      <Link
                        className="linkToDetail"
                        to={{ pathname: "/tours_detail", tours: { tour } }}
                      >
                        <CardTour detail={tour} key={i} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
