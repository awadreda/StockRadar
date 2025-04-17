

import React from 'react'
import TableCompany from '../../Components/Table/TableCompany';
import RatioList from '../../Components/RatioList/RatioList';
import { CompanyKeyMetrics } from '../../company';
import { formatLargeNonMonetaryNumber } from '../../Helpers/NumberFormatting';
import { testIncomeStatementData } from '../../Components/Table/testData';

type Props = {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNonMonetaryNumber(company.marketCapTTM),
    subTitle: "Total value of all a company's shares of stock",
  },
  
    
]

const DesginPage = (props: Props) => {
  return (
    <>
      <h1>Stock Radar Desgin Page</h1>
      <h2>
        this is the desgin page for stock radar ,this we will House various
        desgin aspects of the App
      </h2>
      <RatioList data={testIncomeStatementData} config = {tableConfig} />
      <TableCompany />
    </>
  );
}

export default DesginPage