import "./App.css";
import axios from "axios";
import CardList from "./Components/CardList";
import CardListVideo from "./Components/CardListVideo";
import React, { useState } from "react";

const App = () => {
  const URLApi = process.env.REACT_APP_API;
  const apiKey = process.env.REACT_APP_API_TOKEN;
    
  let [dataGoogle, setDataGoogle] = useState(null);
  let [dataYoutube, setDataYoutube] = useState(null);
  let [search, setSearch] = useState("");
  let [afterYear, setAfterYear] = useState(2000);
  let [beforeYear, setBeforeYear] = useState(2023);
  let [language, setLanguage] = useState("");

  const getData = (event) => {
    event.preventDefault();
    if (search) {
      getDataGoogle();
      getDataYoutube();
    }
  };

  const getDataGoogle = () => {
    const URL = `${URLApi}engine=google_scholar&q=${search.replace(" ","+")}&num=20&as_ylo=${afterYear}&as_yhi=${beforeYear}&hl=${language}&api_key=${apiKey}`;
    axios
      .get(URL)
      .then((response) => {
        console.log("GOOGLE", response.data)
        setDataGoogle(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDataYoutube = () => {
    const URL = `${URLApi}engine=google_videos&q=${search.replace(" ","+")}&num=20&hl=${language}&api_key=${apiKey}`;
    axios
      .get(URL)
      .then((response) => {
        console.log("VIDEOS", response.data)
        setDataYoutube(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h1 className="title">Library</h1>

      <div>
        <form action="#" className="formContainer">
          <input
            onChange={(event) => setSearch(event.target.value)}
            className="searchField"
            type="text"
            value={search}
            placeholder="Search"
          ></input>
          <button onClick={getData} className="buttonSearch">
            Go
          </button>

          <label className="textSearch" for="afterYear">
            From:
          </label>
          <input
            onChange={(event) => setAfterYear(event.target.value)}
            className="searchFieldDate"
            value={afterYear}
            type="number"
            id="afterYear"
            name="afterYear"
            min="1990"
            max="2023"
          ></input>

          <label className="textSearch" for="beforeYear">
            To:
          </label>
          <input
            onChange={(event) => setBeforeYear(event.target.value)}
            className="searchFieldDate"
            value={beforeYear}
            type="number"
            id="beforeYear"
            name="beforeYear"
            min="1990"
            max="2023"
          ></input>

          <label className="textSearch" htmlFor="miSelect">
            Language:
          </label>
          <select
            className="searchFieldDate"
            name="lenguajes"
            id="miSelect"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <option value="">Any language</option>
            <option value="zh-cn">Chinese</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ru">Russian</option>
            <option value="es">Spanish</option>
          </select>
        </form>
      </div>

      <div className="containerDashboard">
        <div className="SearchInfoContainer">
          <h2 className="SearchInfoContainerTitle">Search information</h2>
          <p>
            <b>Total results: </b>
            {dataYoutube && dataGoogle &&
              (
                dataGoogle.search_information.total_results +
                dataYoutube.search_information.total_results
              ).toLocaleString()}
          </p>
          <p>
            <b>Time: </b>
            {dataYoutube && dataGoogle &&
              (
                dataGoogle.search_information.time_taken_displayed +
                dataYoutube.search_information.time_taken_displayed
              ).toFixed(3) + "s"}
          </p>
          <p>
            <b>Query displayed: </b>
            {dataYoutube && dataYoutube.search_information.query_displayed}
          </p>
        </div>

        <div>
          <div className="SearchContainer">
            <h2>Google Scholar Data</h2>
            <CardList data={dataGoogle} />
          </div>
          <div className="SearchContainer">
            <h2>Google Videos Data</h2>
            <CardListVideo data={dataYoutube} />
          </div>
        </div>
      </div>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
