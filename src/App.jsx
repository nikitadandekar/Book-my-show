import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

import Header from "./Components/Header";

import Nav from "./Components/Nav";
import Movies from "./Components/Components3/Movies";
import Play from "./Components/Components5/Play";
import Sport from "./Components/Components6/Sport";
import Activities from "./Components/Components7/Activities";
import List from "./Components/Component8/List";
import Carporates1 from "./Components/Carporates/Carporates1";
import Adv from "./Components/Adv";
import Recome from "./Components/Recome";
import Centre from "./Components/Centre";
import Live from "./Components/Live";
import Premiere from "./Components/Premiere";
import Events from "./Components/Events";
import Online from "./Online";
import Out from "./Out";
import Laughter from "./Components/Laughter";
import Popular from "./Components/Popular";
import Games from "./Components/Games";
import Trending from "./Components/Trending";
import Explore from "./Components/Explore";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Icon from "./Components/Icon";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />

      <Nav />

      <Routes>
        <Route path="movies-nagpur" element={<Movies />} />

        <Route path="plays-nagpur" element={<Play />} />

        <Route path="sports-nagpur" element={<Sport />} />
        <Route path="activities-nagpur" element={<Activities />} />

        <Route path="list-your-show/" element={<List />} />
        <Route path="voucher" element={<Carporates1 />} />
      </Routes>
      <Adv />
      <Recome heading={"Recommeded Movies"} Movies={"See All >"} />

      <Centre />

      <Live heading={"The Best of Live Events"} />

      <Premiere
        Topic={"Premieres"}
        subheading={"Brand new Release every Friday"}
        heading={"Wolves of War"}
        title={"English"}
        head={"Winnie the Pooh: Blood "}
        Honey={"and Honey"}
        name={"English"}
        date={"The Trick"}
        location={"English"}
        subtitle={" Joyland"}
        para={"Urdu"}
        desc={"The Five Devils"}
        trend={"French"}
      />

      <Events heading={"Events Happening Near You"} />

      <Online Movies={"See All >"} heading={"Online Streaming Events"} />

      <Out Movies={"See All >"} heading={"Outdoor Events"} />

      <Laughter Movies={"See All >"} heading={"Laughter Therapy"} />

      <Popular Movies={"See All >"} />

      <Games Movies={"See All >"} />

      <Trending />

      <Explore Movies={"See All >"} heading={"Maa Kamakhya Devi "} />

      <Contact />

      <Icon />
    </div>
  );
}

export default App;
