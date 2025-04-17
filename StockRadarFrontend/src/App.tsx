// import React from "react";
// import { searchCompany } from "./Apis/FinancialmodelinApi";
import "./App.css";
// import CardCompnyList from "./Components/CardCompnyList";
// import Search from "./Components/Search";
// import { CompanySearch } from "./company";
// import { useEffect } from "react";
// import ListPortfolio from "./Portfolio/ListPortfolio/ListPortfolio";
import Navbar from "./Components/Navbar/Navbar";
// import Hero from "./Components/Hero/Hero";
import { Outlet } from "react-router";

function App() {
  // const [search, setSearch] = React.useState<string | undefined>("");

  // const [searchResults, setSearchResults] = React.useState<CompanySearch[]>([]);

  // const [PortfolioValues, setPortfolioValues] = React.useState<string[]>([]);

  // const [serverError, setServerError] = React.useState<string | null>(null);

  // const [loading, setLoading] = React.useState<boolean>(false);

  // console.log("Api response", searchCompany("tsla"));
  // function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>): void {
  //   setSearch(e.target.value);
  // }

  // const onSearchSubmit = async (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const result = await searchCompany(search);
  //   setLoading(false);

  //   if (typeof result === "string") {
  //     setServerError(result);
  //   } else if (Array.isArray(result)) {
  //     setSearchResults(result);
  //   }

  // setSearchResults(result as unknown as CompanySearch[]);
  //   console.log("Search results:", searchResults);
  // };

  // useEffect(() => {
  //   console.log("Search results updated:", searchResults);
  // }, [searchResults]); // هذه الـ useEffect ستعمل كلما تغيرت searchResults

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const onportfolioCreate = (e:any ) => {
  // e.preventDefault();

  //   const symbol = e.target[0].value;

  //   console.log("Symbol:", symbol);
  //   const newPortfolioValues = [...PortfolioValues,symbol];
  //   setPortfolioValues(newPortfolioValues);
  //   console.log("Portfolio Values:", newPortfolioValues);

  // console.log("Portfolio created");
  //   console.log(e);

  // };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //  const  onPortfolioDelete = (e:any) => {
  //   e.preventDefault();
  //   const symbol = e.target[0].value;
  //   const newPortfolioValues = PortfolioValues.filter((value) => value !== symbol);
  //   setPortfolioValues(newPortfolioValues);
  //   console.log("Symbol:", symbol);
  //   console.log("Portfolio deleted");
  //   }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;

{
  /* {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Navbar />
          <Hero />
          <Search
            search={search}
            handleSearchChange={handleSearchChange}
            onSearchSubmit={onSearchSubmit}
          />
          <ListPortfolio
            onDeletePortfolio={onPortfolioDelete}
            portfolioValues={PortfolioValues}
          />
          <CardCompnyList
            searchResults={searchResults}
            onportfolioCreate={onportfolioCreate}
          />
        </div>
      )} */
}
