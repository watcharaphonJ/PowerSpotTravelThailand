import React, { Component } from "react";
import "./search.css";
import water from "../img/water.png";
import spirit from "../img/spirit.png";
import earth from "../img/earth.png";
export default class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Earth: "",
      Spiritual: "",
      Water: "",
      region: "",
      Northern: "Northern",
      Northeastern: "Northeastern",
      Central: "Central",
      Eastern: "Eastern",
      Western: "Western",
      Southern: "Southern",
      minPrice: "",
      Price: "",
      Price1: 20000,
      Price2: 40000,
      Price3: 60000,
      Price4: 100000,
      Price5: "",
      province: "",
      dateStart: "",
      dateEnd: "",
      title: ""
    };
  }
  handleChange = (min, max) => {
    console.log(this.state.Price);
    console.log(this.state.minPrice);
    if (min == "" && max == "") {
      this.setState({
        Price: "",
        minPrice: ""
      });
    } else {
      this.setState({
        Price: max,
        minPrice: min
      });
    }
  };
  handleChangeRegion = id => {
    this.setState({
      region: id
    });
    console.log(this.state.region);
  };
  chkProvince = e => {
    this.setState({
      province: e.target.value
    });
  };
  pickDateStart = e => {
    this.setState({
      dateStart: e.target.value
    });
  };
  pickDateEnd = e => {
    this.setState({
      dateEnd: e.target.value
    });
  };
  ChangeTypeCss = id => {
    const Spiritual = id;
    if (this.state[id]) {
      console.log(this.state.id);
      document.getElementById(Spiritual).style.backgroundColor = "white";
      document.getElementById(Spiritual).style.color = "black";
      let oldState = this.state;
      oldState[id] = "";
      this.setState(oldState);
      console.log(oldState);
    } else {
      document.getElementById(Spiritual).style.backgroundColor = "#54bac5";
      document.getElementById(Spiritual).style.color = "white";
      let oldState = this.state;
      oldState[id] = Spiritual;
      this.setState(oldState);
      console.log(oldState);
    }
  };
  searchTitle = () => {
    const { title } = this.state;
    let url = "http://localhost:8081/search?title=" + title;

    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          fetched: true,
          tours: data.results
        });
        this.props.searchTours(data.results);
        console.log(data.results);
      });
  };
  getTourSearch = () => {
    let url = "http://localhost:8081/search?";
    let SpiritualSpot = "";
    const {
      Earth,
      Spiritual,
      Water,
      region,
      minPrice,
      Price,
      province,
      dateStart,
      dateEnd
    } = this.state;
    if (Earth != "") {
      SpiritualSpot += Earth + ",";
    }
    if (Spiritual != "") {
      SpiritualSpot += Spiritual + ",";
    }
    if (Water != "") {
      SpiritualSpot += Water + ",";
    }
    if (SpiritualSpot != "") {
      url += "&type=" + SpiritualSpot;
    }
    if (region != "") {
      url += "&region=" + region;
    }
    if (Price != "") {
      url += "&cost=" + minPrice + "," + Price;
    }
    if (province != "") {
      url += "&province=" + province;
    }
    if (dateStart != "" && dateEnd != "") {
      url += "&date=" + dateStart + "," + dateEnd;
    }
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          fetched: true,
          tours: data.results
        });
        this.props.searchTours(data.results);
        console.log(data.results);
      });
  };

  render() {
    return (
      <div className="search">
        <input
          style={{ display: "inline-block" }}
          className="input searchTitle"
          type="text"
          placeholder="ดอยสุเทพ, ดอยอินทนนท์, ...."
          onChange={e => {
            this.setState({
              title: e.target.value
            });
          }}
        />
        <a className="button is-white btQuickSearch" onClick={this.searchTitle}>
          Quick search
        </a>
        <div className="filterUp">
          <div className="filterUpRow">
            <div>
              <div className="numberFilter">1</div>
              <div className="txtFilter">Type</div>
            </div>
            <div className="divChkSpiritualSpot">
              <div
                className="chkPowerSpot"
                id="Earth"
                onClick={() => this.ChangeTypeCss("Earth")}
              >
                <img className="iconPowerSpotType" src={earth} alt="earth" />
                Earth Energy
              </div>

              <div
                className="chkPowerSpot"
                id="Water"
                onClick={() => this.ChangeTypeCss("Water")}
              >
                <img alt="Water" src={water} className="iconPowerSpotType" />
                Water Energy
              </div>
              <div
                className="chkPowerSpot"
                id="Spiritual"
                onClick={() => this.ChangeTypeCss("Spiritual")}
              >
                <img className="iconPowerSpotType" src={spirit} alt="Spirit" />
                Spiritual Energy
              </div>
            </div>
          </div>

          <div className="rightSearch">
            <div className="filterUpRowRight">
              <div>
                <div className="numberFilter">2</div>
                <div className="txtFilter">Price</div>
                <div>
                  <label className="checkboxx">
                    <div className="selectPrice">
                      <input
                        name="price"
                        type="radio"
                        value={this.state.Price1}
                        onChange={() => this.handleChange("0", "20000")}
                      />
                      0 - 20,000
                    </div>
                    <div className="selectPrice">
                      <input
                        name="price"
                        type="radio"
                        value={this.state.Price2}
                        onChange={() => this.handleChange("20000", "40000")}
                      />
                      20,000 - 40,000
                    </div>
                    <div className="selectPrice">
                      <input
                        name="price"
                        type="radio"
                        value={this.state.Price3}
                        onChange={() => this.handleChange("40000", "60000")}
                      />
                      40,000 - 60,000
                    </div>
                    <div className="selectPrice">
                      <input
                        name="price"
                        type="radio"
                        value={this.state.Price4}
                        onChange={() => this.handleChange("60000", "100000")}
                      />
                      60,000 - 100,000
                    </div>
                    <div className="selectPrice">
                      <input
                        name="price"
                        type="radio"
                        value={this.state.Price5}
                        onChange={() => this.handleChange("", "")}
                      />
                      All
                    </div>

                    {/* <RadioGroup onChange={this.onChange} vertical>
                    <RadioButton value="apple">Apple</RadioButton>
                    <RadioButton value="orange">Orange</RadioButton>
                    <RadioButton value="melon">Melon</RadioButton>
                    <ReversedRadioButton value="melon">
                      Melon
                    </ReversedRadioButton>
                  </RadioGroup> */}
                  </label>
                </div>
              </div>
            </div>
            <div className="filterUpRowRight">
              <div>
                <div className="numberFilter">3</div>
                <div className="txtFilter">Select location</div>

                <div className="divChkRegion">
                  <label className="divCheckRegion">
                    <div className="checkRegion">
                      <input
                        name="region"
                        type="radio"
                        value="Northern"
                        onChange={() => {
                          this.handleChangeRegion("Northern");
                        }}
                      />
                      Northern
                    </div>
                    <div className="checkRegion">
                      <input
                        name="region"
                        type="radio"
                        value="Northeastern"
                        onChange={() => {
                          this.handleChangeRegion("Northeastern");
                        }}
                      />
                      Northeasthern
                    </div>
                    <div className="checkRegion">
                      <input
                        name="region"
                        type="radio"
                        value="Central"
                        onChange={() => {
                          this.handleChangeRegion("Central");
                        }}
                      />
                      Central
                    </div>
                    <div className="checkRegion">
                      <input
                        name="region"
                        type="radio"
                        value="Eastern"
                        onChange={() => {
                          this.handleChangeRegion("Eastern");
                        }}
                      />
                      Eastern
                    </div>
                    <div className="checkRegion">
                      <input
                        name="region"
                        type="radio"
                        value="Western"
                        onChange={() => {
                          this.handleChangeRegion("Western");
                        }}
                      />
                      Western
                    </div>
                    <div className="checkRegion">
                      <input
                        name="region"
                        type="radio"
                        value="Southern"
                        onChange={() => {
                          this.handleChangeRegion("Southern");
                        }}
                      />
                      Southern
                    </div>
                    <div className="checkRegion">
                      <input
                        name="region"
                        type="radio"
                        value=""
                        onChange={() => {
                          this.handleChangeRegion("");
                        }}
                      />
                      All
                    </div>
                  </label>
                  <div>
                    <select
                      className="selectProvince"
                      name="province"
                      onClick={this.chkProvince}
                    >
                      <option value=""> All </option>
                      <option value="Bangkok"> Bangkok </option>
                      <option value="Krabi"> Krabi </option>
                      <option value="Kanchanaburi"> Kanchanaburi </option>
                      <option value="Kalasin"> Kalasin </option>
                      <option value="Kamphaengphet"> Kamphaeng Phet </option>
                      <option value="Khon Kaen"> Khon Kaen </option>
                      <option value="Chanthaburi"> Chanthaburi </option>
                      <option value="Chachoengsao"> Chachoengsao </option>
                      <option value="Chainat"> Chainat </option>
                      <option value="Chaiyaphum"> Chaiyaphum </option>
                      <option value="Chumphon"> Chumphon </option>
                      <option value="Chonburi"> Chonburi </option>
                      <option value="Chiang Mai"> Chiang Mai </option>
                      <option value="Chiang Rai"> Chiang Rai </option>
                      <option value="Trang"> Trang </option>
                      <option value="Trat"> Trat </option>
                      <option value="Tak"> Tak </option>
                      <option value="Nakhon Nayok"> Nakhon Nayok </option>
                      <option value="Nakhon Pathom"> Nakhon Pathom </option>
                      <option value="Nakhon Phanom"> Nakhon Phanom </option>
                      <option value="Nakhon Ratchasima">
                        Nakhon Ratchasima
                      </option>
                      <option value="Nakhon Si Thammarat">
                        Nakhon Si Thammarat
                      </option>
                      <option value="Nakhon Sawan"> Nakhon Sawan </option>
                      <option value="Narathiwat"> Narathiwat </option>
                      <option value="Nan"> Nan </option>
                      <option value="Nonthaburi"> Nonthaburi </option>
                      <option value="Bueng Kan"> Bueng Kan </option>
                      <option value="Buriram"> Buriram </option>
                      <option value="Prachuap Khiri Khan">
                        Prachuap Khiri Khans
                      </option>
                      <option value="Pathum Thani"> Pathum Thani </option>
                      <option value="Prachin Buri"> Prachin Buri </option>
                      <option value="Pattani"> Pattani </option>
                      <option value="Phayao"> Phayao </option>
                      <option value="Phra Nakhon Si Ayutthaya">
                        Phra Nakhon Si Ayutthaya
                      </option>
                      <option value="Phang Nga"> Phang Nga </option>
                      <option value="Phichit"> Phichit </option>
                      <option value="Phitsanulok"> Phitsanulok </option>
                      <option value="Phetchaburi"> Phetchaburi </option>
                      <option value="Phetchabun"> Phetchabun </option>
                      <option value="Phrae"> Phrae </option>
                      <option value="Phatthalung"> Phatthalung </option>
                      <option value="Phuket"> Phuket </option>
                      <option value="Mahasarakham"> Mahasarakham </option>
                      <option value="Mukdahan"> Mukdahan </option>
                      <option value="Mae Hong Son"> Mae Hong Son </option>
                      <option value="Yasothon"> Yasothon </option>
                      <option value="Yala"> Yala </option>
                      <option value="Roi Et"> Roi Et </option>
                      <option value="Ranong"> Ranong </option>
                      <option value="Rayong"> Rayong </option>
                      <option value="Ratchaburi"> Ratchaburi </option>
                      <option value="Lopburi"> Lopburi </option>
                      <option value="Lampang"> Lampang </option>
                      <option value="Lamphun"> Lamphun </option>
                      <option value="Loei"> Loei </option>
                      <option value="Si Sa Ket"> Si Sa Ket </option>
                      <option value="Sakon Nakhon"> Sakon Nakhon </option>
                      <option value="Songkhla"> Songkhla </option>
                      <option value="Samut Sakhon"> Samut Sakhon </option>
                      <option value="Samutprakarn"> Samutprakarn </option>
                      <option value="Samut Songkhram">Samut Songkhram</option>
                      <option value="Sa Kaew"> Sa Kaeo </option>
                      <option value="Saraburi"> Saraburi </option>
                      <option value="Sing Buri"> Sing Buri </option>
                      <option value="Sukhothai"> Sukhothai </option>
                      <option value="Suphan Buri"> Suphan Buri </option>
                      <option value="Surat Thani"> Surat Thani </option>
                      <option value="Surin"> Surin </option>
                      <option value="Stool"> Stool </option>
                      <option value="Nong Khai"> Nong Khai </option>
                      <option value="Nong Bua Lam Phu">Nong Bua Lam Phu</option>
                      <option value="Amnat Charoen"> Amnat Charoen </option>
                      <option value="Udon Thani"> Udon Thani </option>
                      <option value="Uttaradit"> Uttaradit </option>
                      <option value="Uthai Thani"> Uthai Thani </option>
                      <option value="Ubon Ratchathani">Ubon Ratchathani</option>
                      <option value="Ang Thong"> Ang Thong </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="filterUpRowRight" style={{ width: "auto" }}>
              <div>
                <div className="numberFilter">4</div>
                <div className="txtFilter">Choose date</div>
                <div className="divSelectDate">
                  <div className="SelectDate">
                    Start :{" "}
                    <input
                      type="date"
                      name="bdaytime"
                      onChange={this.pickDateStart}
                    />
                  </div>
                  <div className="SelectDate">
                    End :{" "}
                    <input
                      type="date"
                      name="bdaytime"
                      onChange={this.pickDateEnd}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divSearchBT">
          <a
            className="button is-white searchButton"
            onClick={this.getTourSearch}
          >
            Search
          </a>
        </div>
      </div>
    );
  }
}
