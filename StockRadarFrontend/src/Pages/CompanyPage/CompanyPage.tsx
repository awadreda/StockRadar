import React, { useEffect } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../Apis/FinancialmodelinApi";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashBord from "../../Components/CompanyDashBord/CompanyDashBord";
import Tile from "../../Components/Tile/Tile";

const CompanyPage = () => {
  const { ticker } = useParams();
  const [company, setCompany] = React.useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, []);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <CompanyDashBord ticker={ticker!}>
            <Tile title="Company Name" subTitle={company?.companyName} />
          </CompanyDashBord>
          <Sidebar />
        </div>
      ) : (
        <div>Company Not Found</div>
      )}
    </>
  );
};

export default CompanyPage;
