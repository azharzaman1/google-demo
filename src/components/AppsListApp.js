import React from "react";
import { Avatar } from "@material-ui/core";

function App({
  specificImageClass,
  specificImageSrc,
  specificTitleClass,
  title,
  needAvatar,
  appRedirect__link,
}) {
  return (
    <div className="App">
      <a href={appRedirect__link}>
        <div className="appsIcon__box">
          {needAvatar && <Avatar className="appsList__avatar" />}
          <img
            className={`appsList__image ${specificImageClass} ${
              needAvatar && "avatarExtra__margin"
            }`}
            src={specificImageSrc}
          />
        </div>

        <p className={` appsList__title ${specificTitleClass}`}>{title}</p>
      </a>
    </div>
  );
}

export default App;
