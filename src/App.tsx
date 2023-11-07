import React, { FC } from "react";
import "./App.css";
import Header from "./components/Header";
import CardList from "./components/CardList";
import Button from "./components/Button";

const App: FC = () => {
  return (
    <div className="bg-[#F5F5F8] pb-[30px]">
      <Header />
      <CardList />
      <div className="mt-[30px] mx-auto w-[300px]">
        <Button title="GET STARTED" />
      </div>
    </div>
  );
};

export default App;
