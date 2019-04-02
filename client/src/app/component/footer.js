import React, { PureComponent } from "react";
import "./footer.css";
import facebook from "../img/facebookNav.png";
import line from "../img/line.png";
import SPU from "../img/SPU.png";

export default class Footer extends PureComponent {
  openNewTab = () => {
    window.open("https://www.facebook.com/pasutora/", "_blank");
  };
  render() {
    return (
      <div className="footer">
        <div className="hideFooter">
          <div className="headerFooter">Location Power Spot in Thailand</div>
          <div className="footerRegion">
            <div className="footerHeaderRegion">
              <div className="txtFooterHeader">Central</div>

              <div>Bangkok</div>
              <div>Nakhon Pathom</div>
              <div>Nonthaburi</div>
              <div>Pathum Thani</div>
              <div>Samut Prakan</div>
              <div>Samut Sakhon</div>
              <div>Ang Thong</div>
              <div>Chainat</div>
              <div>Lopburi</div>
              <div>Phra Nakhon Si Ayutthaya</div>
              <div>Saraburi</div>
              <div>Sing buri</div>
              <div>
                <div className="txtFooterHeader">Western</div>

                <div>Kanchanaburi</div>
                <div>Prachuab Khiri Khan</div>
                <div>Phetchaburi</div>
                <div>Ratchaburi</div>
                <div>Samut Songkhram</div>
                <div>Suphan Buri</div>
              </div>
            </div>
            <div className="footerHeaderRegion">
              <div className="txtFooterHeader">Eastern</div>

              <div>Chachoengsao</div>
              <div>Chantaburi</div>
              <div>Chonburi</div>
              <div>Nakhon Nayok</div>
              <div>Prachinburi</div>
              <div>Rayong</div>
              <div>Sa Kaeo</div>
              <div>Trat</div>
            </div>
            <div className="footerHeaderRegion">
              <div className="txtFooterHeader">Northeastern</div>

              <div>Amnat Charoen</div>
              <div>Bueng Kan</div>
              <div>Buriram</div>
              <div>Chaiyaphum</div>
              <div>Kalasin</div>
              <div>Khon Kaen</div>
              <div>Loei</div>
              <div>Maha Sarakham</div>
              <div>Muksahan</div>
              <div>Nakhon Phanom</div>
              <div>Nakhon Ratchasima</div>
              <div>Nong Bua Lamphu</div>
              <div>Nong Kai</div>
              <div>Roi Et</div>
              <div>Sakon Nakhon</div>
              <div>Sisaket</div>
              <div>Surin</div>
              <div>Ubon Ratchathani</div>
              <div>Udon Thani</div>
              <div>Yasothon</div>
            </div>
            <div className="footerHeaderRegion">
              <div className="txtFooterHeader">Northern</div>

              <div>Chaing Mai</div>
              <div>Chaing Rai</div>
              <div>Kamphaeng Phet</div>
              <div>Lampang</div>
              <div>Lamphun</div>
              <div>Mae Hong Son</div>
              <div>Nakhon Sawan</div>
              <div>Nan</div>
              <div>Phayao</div>
              <div>Phetchabun</div>
              <div>Phichit</div>
              <div>Phitsanulok</div>
              <div>Phrae</div>
              <div>Sukhonthai</div>
              <div>Tak</div>
              <div>Uthai Thani</div>
              <div>Utaradit</div>
            </div>
            <div className="footerHeaderRegion">
              <div className="txtFooterHeader">Southern</div>

              <div>Chumphon</div>
              <div>Krabi</div>
              <div>Nakhon Si Thammarat</div>
              <div>Narathiwat</div>
              <div>Pattani</div>
              <div>Phang Nga</div>
              <div>Phattalung</div>
              <div>Phuket</div>
              <div>Ranong</div>
              <div>Stun</div>
              <div>SongKhla</div>
              <div>Surat Thani</div>
              <div>Trang</div>
              <div>Yala</div>
            </div>
          </div>
        </div>

        <div className="footerContact">
          <img className="iconContactSocialSPU" src={SPU} alt="Sripatum" />
          <div className="txtDepartment">Passion Team</div>
          <div>Sripatum University KhonKaen</div>
          <div style={{ marginTop: "10px" }} className="contactSocial">
            <img
              className="iconContactSocial"
              alt="FB"
              style={{ cursor: "pointer" }}
              src={facebook}
              onClick={this.openNewTab}
            />
            <img className="iconContactSocial" alt="line" src={line} />
          </div>
        </div>
        <div style={{ clear: "both" }} />
      </div>
    );
  }
}
