import React from "react";
import "./items.css";

const items = [
  {
    image: "https://github.com/jmontes33/Linktree/blob/main/src/assets/icons8-instagram-100.png?raw=true",
    name: "Instagram",
    link: "https://www.instagram.com/elrincondeldev/",
  },
  {
    image: "https://github.com/jmontes33/Linktree/blob/main/src/assets/icons8-tik-tok-100.png?raw=true",
    name: "TikTok",
    link: "https://www.tiktok.com/@elrincondeldev",
  },
  {
    image: "https://github.com/jmontes33/Linktree/blob/main/src/assets/icons8-twitch-100.png?raw=true",
    name: "Twitch",
    link: "https://www.twitch.tv/elrincondeldev",
  },
  {
    image: "https://github.com/jmontes33/Linktree/blob/main/src/assets/icons8-youtube-play-100.png?raw=true",
    name: "Youtube",
    link: "https://www.youtube.com/channel/UCWn_0MmgojB711LFX-jaCDQ",
  },
  {
    image: "https://github.com/jmontes33/Linktree/blob/main/src/assets/icons8-curr%C3%ADculum-100.png?raw=true",
    name: "Mi portfolio",
    link: "https://portfolio-joser.vercel.app/",
  },
];

function Items() {
  return (
    <div className="main-container">
      {items.map((item, i) => (
        <a key={i} href={item.link} target="_blank">
          <div className="item-div">
            <img src={item.image} alt="social-img" className="social-img" />
            <h2>{item.name}</h2>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Items;
