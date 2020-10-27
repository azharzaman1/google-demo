import React from "react";
import App from "./AppsListApp";
import GoogleLogo from "../logos/g.png";
import YoutubeLogo from "../logos/yt.png";
import DriveLogo from "../logos/d.png";
import CalenderLogo from "../logos/cal.png";
import ContactsLogo from "../logos/c.png";
import PhotosLogo from "../logos/p.png";
import DuoLogo from "../logos/duo.png";
import TranslateLogo from "../logos/t.png";
import GmailLogo from "../logos/gm.png";
import MapsLogo from "../logos/m.png";
import PlaystoreLogo from "../logos/play.png";

const AppsList = ({ appsList__container__className }) => {
  return (
    <div className={`appsList__container ${appsList__container__className}`}>
      <div className="appsRow rowOne">
        <App
          title="Account"
          needAvatar
          specificTitleClass="accountClass"
          appRedirect__link="#"
        />
        <App
          title="Google"
          specificImageSrc={GoogleLogo}
          appRedirect__link="#"
        />
        <App
          title="Youtube"
          specificImageSrc={YoutubeLogo}
          appRedirect__link="#"
        />
      </div>
      <div className="appsRow rowTwo">
        <App
          title="Drive"
          specificImageSrc={DriveLogo}
          specificImageClass="driveLogo"
          appRedirect__link="#"
        />

        <App
          title="Gmail"
          specificImageSrc={GmailLogo}
          specificImageClass="gmailLogo"
          appRedirect__link="#"
        />

        <App
          title="Play"
          specificImageSrc={PlaystoreLogo}
          specificImageClass="playstoreLogo"
          appRedirect__link="#"
        />
      </div>
      <div className="appsRow rowThree">
        <App
          title="Photos"
          specificImageSrc={PhotosLogo}
          specificImageClass="photosClass"
          appRedirect__link="#"
        />
        <App
          title="Translate"
          specificImageSrc={TranslateLogo}
          specificImageClass="translateClass"
          appRedirect__link="#"
        />
        <App
          title="Contacts"
          specificImageSrc={ContactsLogo}
          specificImageClass="contactsClass"
          appRedirect__link="#"
        />
      </div>
      <div className="appsRow rowFour">
        <App
          title="Drive"
          specificImageSrc={MapsLogo}
          specificImageClass="mapsLogo"
          appRedirect__link="#"
        />
        <App title="Meet" specificImageSrc={DuoLogo} appRedirect__link="#" />
        <App
          title="Calender"
          specificImageSrc={CalenderLogo}
          specificImageClass="calenderLogo"
          appRedirect__link="#"
        />
      </div>
    </div>
  );
};

export default AppsList;
