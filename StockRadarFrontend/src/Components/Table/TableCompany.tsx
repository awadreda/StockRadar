import React from "react";
import { testIncomeStatementData } from "./testData";

const data = testIncomeStatementData;

// type Props = {
//   config: any;
    
//   data: any[];
// };

type Company = (typeof data)[0];

const config = [
  {
    label: "Year",
    render: (company: Company) => company.acceptedDate,
  },
  {
    label: "Cost of Revenue",
    render: (company: Company) => company.costOfRevenue,
  },
];











const TableCompany = () => {
  const renderedRows = data.map((company: any) => {
    return (
      <tr key={company.cik}>
        {config.map((val: any) => {
          return <td className="p-3">{val.render(company)}</td>;
        })}
      </tr>
    );
  });
  const renderedHeaders = config.map((config: any) => {
    return (
      <th
        className="p-4 text-left text-xs font-medium text-black uppercase tracking-wider"
        key={config.label}
      >
        {config.label}
      </th>
    );
  });
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
      <h1>Table </h1>
      <table className="min-w-full divide-y text-black m-5">
        <thead className="bg-gray-50">{renderedHeaders}</thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
};




// const Table = (props: Props) => {
//   const renderredRow = data.map((company) => {
//     return (
//       <tr key={company.cik}>
//         {configs.map((val:any) => {
//           return (
//             <td
//               key={val.label}
//               className="p-4 whitespace-nowrap text-sm font-normal text-gray-900"
//             >
//               {val.render(company)}
//             </td>
//           );
//         }
//         <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900"></td>
//       </tr>
//     );
//   });
//   return <div>Table</div>;
// };

export default TableCompany;













