using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using stockRaderApi.DTOS;
using stockRaderApi.DTOS.Stock;
using stockRaderApi.Models;

namespace stockRaderApi.Mappers
{
    public static class StockMapper
    {

        public static StockDTO ToStockDTO(this Stock stock)

        {
            return new StockDTO
            {
                Id = stock.Id,
                Symbol = stock.Symbol,
                CompanyName = stock.CompanyName,
                Purchase = stock.Purchase,
                LastDiv = stock.LastDiv,
                Industry = stock.Industry,
                MarketCap = stock.MarketCap
            };

        }

        public static Stock ToStock(this CreateRequestStockDTO requestStockDTO)
        {
            return new Stock
            {
    
                Symbol = requestStockDTO.Symbol,
                CompanyName = requestStockDTO.CompanyName,
                Purchase = requestStockDTO.Purchase,
                LastDiv = requestStockDTO.LastDiv,
                Industry = requestStockDTO.Industry,
                MarketCap = requestStockDTO.MarketCap
            };
        }
            
        }
    }
