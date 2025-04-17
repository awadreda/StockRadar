import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Components/incomeStatement/IncomeStatement";
import DesginPage from "../Pages/DesginPage/DesginPage";



export const router = createBrowserRouter([{

      path: "/",
      element:<App/>,
      errorElement: <div>404</div>,
      children:[
        {path: "",element: <HomePage/>},
        {path: "search", element:<SearchPage/>},
        {path: "design-guide", element:<DesginPage/>},
        {path: "company/:ticker", element:<CompanyPage/>,
          children:[
            {path: "company-profile",element:<CompanyProfile/>},
            {path: "income-statement",element:<IncomeStatement/>},
          ]
         }, 
      ]

  
}])