import React, { Component } from "react";
import NavigationBar from "./component/NavigationBar";

import "./Manage.css";
const API_URL = "http://localhost:8081";

class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      tours: []
    };
  }
  componentWillMount() {
    fetch("http://localhost:8081/tour")
      .then(response => response.json())
      .then(data =>
        this.setState({
          fetched: true,
          tours: data.results
        })
      );
  }
  onSubmit = e => {
    e.preventDefault();
    let title = this.title.value;
    let detail = this.detail.value;
    let type = this.type.value;
    let region = this.region.value;
    let province = this.province.value;
    let cost = this.cost.value;
    let date = new Date(this.date.value).toISOString();
    let days = this.days.value;

    fetch(API_URL + "/tour", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        detail: detail,
        type: type,
        region: region,
        province: province,
        cost: cost,
        date: date,
        days: days
      })
    })
      .then(response => response.json())
      .then(data => {
        alert(JSON.stringify(data.results));
        window.location.reload();
      });
  }
  onRemove = _id => {
    var r = window.confirm("Are you sure you want to delete this tour?");
    if (r == true) {
      fetch(API_URL + "/tour/" + _id, { method: "delete" })
        .then(response => response.json())
        .then(data => {
          alert(JSON.stringify(data.results));
          window.location.reload();
        });
    }
  }
  onClickImage = _id => {
      let input = document.getElementById(_id);
      input.click();
  }
  onImageChange = _id => {
      let formData = new FormData();
      let input = document.getElementById(_id);
      formData.append('image', input.files[0], input.files[0].name);
      fetch(API_URL + '/image/' + _id, { method: 'POST', body: formData })
        .then(response => response.json())
        .then(data => {
          alert(JSON.stringify(data.results));
          window.location.reload();
        });
  }
  onImageError = e => {
      e.target.src = API_URL + "/static/na.jpg";
  }
  render() {
    if (this.state.fetched) {
      return (
        <div className="body_container">
          <NavigationBar />
          <table className="manage">
            <tr>
              <td className="manage_tour_list">
                {this.state.tours.map(tour => {
                  return (
                    <div className="manage_tour">
                      <div className="manage_tour_image">
                        <input id={ tour._id } type="file" onChange={ () => this.onImageChange(tour._id) } style={{display: "none"}} />
                        <img src={API_URL + "/static/" + tour._id + ".jpg"} onClick={ () => this.onClickImage(tour._id) } onError={ this.onImageError } title="Change image" /></div>
                      <div className="manage_tour_title">{tour.title}</div>
                      <div className="manage_tour_desc">Type: {tour.type}</div>
                      <div className="manage_tour_desc">
                        Region: {tour.region}
                      </div>
                      <div className="manage_tour_desc">
                        Province: {tour.province}
                      </div>
                      <div className="manage_tour_desc">Cost: {tour.cost}</div>
                      <div className="manage_tour_desc">
                        Date: {new Date(tour.date).toLocaleDateString()}
                      </div>
                      <div className="manage_tour_desc">Days: {tour.days}</div>
                      <button className="close" onClick={() => this.onRemove(tour._id)}>X</button>
                    </div>
                  );
                })}
              </td>
              <td className="manage_tour_post">
                <form onSubmit={this.onSubmit}>
                  <table>
                    <tr>
                      <td style={{ width: "70px" }}>
                        <label>Tour </label>
                      </td>
                      <td>
                        <input
                          name="title"
                          type="text"
                          ref={input => {
                            this.title = input;
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "70px" }}>
                        <label>Detail </label>
                      </td>
                      <td>
                        <textarea
                          ref={textarea => {
                            this.detail = textarea;
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "70px" }}>
                        <label>Type </label>
                      </td>
                      <td>
                        <select
                          name="type"
                          ref={input => {
                            this.type = input;
                          }}
                        >
                          <option value="Earth">Earth</option>
                          <option value="Spiritual">Spiritual</option>
                          <option value="Water">Water</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Region </label>
                      </td>
                      <td>
                        <select
                          name="region"
                          ref={input => {
                            this.region = input;
                          }}
                        >
                          <option value="Northern">Northern</option>
                          <option value="Northeastern">Northeastern</option>
                          <option value="Central">Central</option>
                          <option value="Eastern">Eastern</option>
                          <option value="Western">Western</option>
                          <option value="Southern">Southern</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Province </label>
                      </td>
                      <td>
                        <select
                          name="province"
                          ref={input => {
                            this.province = input;
                          }}
                        >
                          <option value="Bangkok"> Bangkok </option>
                          <option value="Krabi"> Krabi </option>
                          <option value="Kanchanaburi"> Kanchanaburi </option>
                          <option value="Kalasin"> Kalasin </option>
                          <option value="Kamphaengphet">
                            {" "}
                            Kamphaeng Phet{" "}
                          </option>
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
                            {" "}
                            Nakhon Ratchasima{" "}
                          </option>
                          <option value="Nakhon Si Thammarat">
                            {" "}
                            Nakhon Si Thammarat{" "}
                          </option>
                          <option value="Nakhon Sawan"> Nakhon Sawan </option>
                          <option value="Narathiwat"> Narathiwat </option>
                          <option value="Nan"> Nan </option>
                          <option value="Nonthaburi"> Nonthaburi </option>
                          <option value="Bueng Kan"> Bueng Kan </option>
                          <option value="Buriram"> Buriram </option>
                          <option value="Prachuap Khiri Khan">
                            {" "}
                            Prachuap Khiri Khan{" "}
                          </option>
                          <option value="Pathum Thani"> Pathum Thani </option>
                          <option value="Prachin Buri"> Prachin Buri </option>
                          <option value="Pattani"> Pattani </option>
                          <option value="Phayao"> Phayao </option>
                          <option value="Phra Nakhon Si Ayutthaya">
                            {" "}
                            Phra Nakhon Si Ayutthaya{" "}
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
                          <option value="Samut Songkhram">
                            {" "}
                            Samut Songkhram{" "}
                          </option>
                          <option value="Sa Kaew"> Sa Kaeo </option>
                          <option value="Saraburi"> Saraburi </option>
                          <option value="Sing Buri"> Sing Buri </option>
                          <option value="Sukhothai"> Sukhothai </option>
                          <option value="Suphan Buri"> Suphan Buri </option>
                          <option value="Surat Thani"> Surat Thani </option>
                          <option value="Surin"> Surin </option>
                          <option value="Stool"> Stool </option>
                          <option value="Nong Khai"> Nong Khai </option>
                          <option value="Nong Bua Lam Phu">
                            {" "}
                            Nong Bua Lam Phu{" "}
                          </option>
                          <option value="Amnat Charoen"> Amnat Charoen </option>
                          <option value="Udon Thani"> Udon Thani </option>
                          <option value="Uttaradit"> Uttaradit </option>
                          <option value="Uthai Thani"> Uthai Thani </option>
                          <option value="Ubon Ratchathani">
                            {" "}
                            Ubon Ratchathani{" "}
                          </option>
                          <option value="Ang Thong"> Ang Thong </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Cost </label>
                      </td>
                      <td>
                        <input
                          name="cost"
                          type="number"
                          ref={input => {
                            this.cost = input;
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Date </label>
                      </td>
                      <td>
                        <input
                          name="date"
                          type="date"
                          ref={input => {
                            this.date = input;
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Days </label>
                      </td>
                      <td>
                        <input
                          name="days"
                          type="number"
                          defaultValue="1"
                          ref={input => {
                            this.days = input;
                          }}
                        />
                      </td>
                    </tr>
                  </table>
                  <input type="submit" value="Submit" />
                </form>
              </td>
            </tr>
          </table>
        </div>
      );
    } else {
      return "Loading...";
    }
  }
}

export default Manage;
