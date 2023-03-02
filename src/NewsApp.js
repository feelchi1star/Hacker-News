import React from "react";
import SearchForm from "./SearchForm";
import Stories from "./Stories";
import Buttons from "./Buttons";
import { AppProvider } from "./context";
import "./news.css";
function NewsApp() {
  return (
    <AppProvider>
      <>
        <SearchForm />
        <Buttons />
        <Stories />
      </>
    </AppProvider>
  );
}

export default NewsApp;
