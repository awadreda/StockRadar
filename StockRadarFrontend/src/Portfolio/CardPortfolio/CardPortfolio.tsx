import React from 'react'
import DeleteProtfolio from '../DeleteProtfolio/DeleteProtfolio';
import { Link } from 'react-router';

interface  Props {
  onDeletePortfolio: (e: React.SyntheticEvent) => void;
  portfolioValue: string;
}

const CardPortfolio = ({ onDeletePortfolio,portfolioValue}: Props) => {
  return (
    
    <>
     <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <Link to={`/company/${portfolioValue}`} className="pt-6 text-xl font-bold">{portfolioValue}</Link>
     <DeleteProtfolio onDeletePortfolio={onDeletePortfolio} portfolioValue={portfolioValue}/>
    </div>
    </>
  
  )
 
  
}

export default CardPortfolio