import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather
          city="Tunis"
          temperature={10}
          description="Cler sky"
          humidity={40}
          wind={2}
          month="October"
          date={25}
          day="Saturday"
          hour="12 : 00"
          day1="Sunday"
          day2="Monday"
          day3="Tuesday"
          day4="Wednesday"
          tempmax1={20}
          tempmax2={18}
          tempmax3={15}
          tempmax4={17}
          tempmin1={17}
          tempmin2={15}
          tempmin3={11}
          tempmin4={14}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
