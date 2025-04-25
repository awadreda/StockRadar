using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using stockRaderApi.DTOS;
using stockRaderApi.DTOS.Stock;
using stockRaderApi.Models;

namespace stockRaderApi.interfaces
{
    public interface IStockRepository
    {
        Task<List<Stock>> GetAllStocks();
        Task<Stock> GetStockById(int id);
        Task<Stock> AddStock(Stock stockModel);
        Task<Stock?> UpdateStock(int id, UpdateRequestStockDTO requestStockDTO);
        Task<Stock?> DeleteStock(int id);

        
    }
}