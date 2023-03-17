import React from "react";
import "./items.css";

const items = [
  {
    image: "src/assets/icons8-instagram-100.png",
    name: "Instagram",
    link: "https://www.instagram.com/elrincondeldev/",
  },
  {
    image: "src/assets/icons8-tik-tok-100.png",
    name: "TikTok",
    link: "https://www.tiktok.com/@elrincondeldev",
  },
  {
    image: "src/assets/icons8-twitch-100.png",
    name: "Twitch",
    link: "https://www.twitch.tv/elrincondeldev",
  },
  {
    image: "src/assets/icons8-youtube-play-100.png",
    name: "Youtube",
    link: "https://www.youtube.com/channel/UCWn_0MmgojB711LFX-jaCDQ",
  },
  {
    image: "src/assets/icons8-currículum-100.png",
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
