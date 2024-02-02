import React from "react";
import CockTaillist from "../components/cocktaillist";
import SearchForm from "../components/searchform";
const Home = () => {
  return(
    <main>
     <SearchForm />
     <CockTaillist />
    </main>
  )
}
export default Home