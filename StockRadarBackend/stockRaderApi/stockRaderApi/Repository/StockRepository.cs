using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using stockRaderApi.Data;
using stockRaderApi.DTOS;
using stockRaderApi.DTOS.Stock;
using stockRaderApi.interfaces;
using stockRaderApi.Models;

namespace stockRaderApi.Repository
{
  public class StockRepository : IStockRepository
  {
    private readonly AppDbContext _context;

    public StockRepository(AppDbContext context)
    {
      _context = context;
    }

    public async Task<Stock> AddStock(Stock stockModel)
    {
      await _context.Stocks.AddAsync(stockModel);
      await _context.SaveChangesAsync();

      return stockModel;

    }

    public async Task<Stock?> DeleteStock(int id)
    {
      var stock = await _context.Stocks.FirstOrDefaultAsync(x => x.Id == id);

      if (stock == null)
      {
        return null;
      }
      _context.Stocks.Remove(stock);
      await _context.SaveChangesAsync();
      return stock;

    }

    public async Task<List<Stock>> GetAllStocks()
    {
      return await _context.Stocks.ToListAsync();
    }

    public async Task<Stock?> GetStockById(int id)
    {
      return await _context.Stocks.FirstOrDefaultAsync(x => x.Id == id);

    }

    public async Task<Stock?> UpdateStock(int id, UpdateRequestStockDTO requestStockDTO)
    {

      var stock = _context.Stocks.FirstOrDefault(x => x.Id == id);

      if (stock == null)
      {
        return null
        ;
      }

      stock.Symbol = requestStockDTO.Symbol;
      stock.CompanyName = requestStockDTO.CompanyName;
      stock.Purchase = requestStockDTO.Purchase;
      stock.LastDiv = requestStockDTO.LastDiv;
      stock.Industry = requestStockDTO.Industry;
      stock.MarketCap = requestStockDTO.MarketCap;

      _context.Stocks.Update(stock);
      await _context.SaveChangesAsync();
      return stock;

    }
    
  }
}