import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { CompanySearch } from "../../company";
import AddPortfolio from "../../Portfolio/AddPortfolio/AddPortfolio";
import { Link } from
 "react-router";
// import { Button } from "@mui/material";

interface cardProps {
  id: string;
  searchResult: CompanySearch;
  onportfolioCreate: (e: React.SyntheticEvent) => void;
}
export default function CardCompany({
  id,
  searchResult,
  onportfolioCreate,
}: cardProps) {
  return (
    <Card
      sx={{ maxWidth: 345, margin: "15px auto", backgroundColor: "#CCC" }}
      className="my-3 bg-black"
    >
      <CardActionArea>
        <CardMedia
          sx={{
            margin: "auto",
            height: 140,
            width: 140,
            padding: "10px",
            borderRadius: "50%",
          }}
          className="rounded-3 "
          component="img"
          image="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="green iguana"
          id={id}
        />
        <CardContent>
          <div
            className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
            key={id}
            id={id}
          >
            <Link to={`/company/${searchResult.symbol}`} className="font-bold text-center text-black md:text-left">
              {searchResult.name} ({searchResult.symbol})
            </Link>
            <p className="text-veryDarkBlue">{searchResult.currency}</p>
            <p className="font-bold text-black">
              {" "}
              {searchResult.exchangeShortName} - {searchResult.stockExchange}
            </p>
          </div>
        </CardContent>

        <AddPortfolio
          onportfolioCreate={onportfolioCreate}
          symbol={searchResult.symbol}
        />
      </CardActionArea>
    </Card>
  );
}
