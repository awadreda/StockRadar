// import { Button } from '@mui/material';
import React from 'react'

interface Props  {

  onDeletePortfolio: (e: React.SyntheticEvent) => void;
  portfolioValue: string;
}


const DeleteProtfolio = ({onDeletePortfolio, portfolioValue}: Props) => {
 
  return (
    <form onSubmit={onDeletePortfolio}>
      <input hidden={true} value={portfolioValue} />
      <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
        X
      </button>
    </form>
  );
}


export default DeleteProtfolio
