import React from "react";
import CardCompany from "./Cards/CardCompany";
import { CompanySearch } from "../company";
import { v4 as uuidv4 } from "uuid";

type Props = {
  searchResults: CompanySearch[];
  onportfolioCreate: (e: React.SyntheticEvent) => void;
};

const CardCompnyList = ({ searchResults, onportfolioCreate }: Props) => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <CardCompany
              id={result.symbol}
              key={uuidv4()}
              searchResult={result}
              onportfolioCreate={onportfolioCreate}
            />
          );
        })
      ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
      )}
    </>
  );
};

export default CardCompnyList;

{
  /* <CardCompany id='1' onPortfolioCreate={handlePortfolioCreate} searchResults={{name:'Apple',symbol:'AAPL',exchangeShortName:'NASDAQ',currency:'USD',stockExchange:'NASDAQ'}} />

  <CardCompany id='5' onPortfolioCreate={handlePortfolioCreate} searchResults={{name:'Apple',symbol:'AAPL',exchangeShortName:'NASDAQ',currency:'USD',stockExchange:'NASDAQ'}} /> */
}
