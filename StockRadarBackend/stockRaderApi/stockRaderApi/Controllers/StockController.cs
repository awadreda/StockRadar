using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Azure.Core;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using stockRaderApi.Data;
using stockRaderApi.DTOS.Stock;
using stockRaderApi.interfaces;
using stockRaderApi.Mappers;

namespace stockRaderApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StockController : ControllerBase
    {
        private readonly IStockRepository _stockRepository;

        public StockController(IStockRepository stockRepository)
        {
            _stockRepository = stockRepository;
        }

        [HttpGet]
        [Route("GetAllStocks")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetAllStocks()
        {
            try
            {
                var stocks = await _stockRepository.GetAllStocks();

                var stockDTOs = stocks.Select(stock => stock.ToStockDTO()).ToList();

                if (stocks == null || stocks.Count == 0)
                {
                    return NotFound("No stocks found.");
                }
                return Ok(stocks);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet]
        [Route("GetStockById/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetStockById(int id)
        {
            try
            {
                var stock = await _stockRepository.GetStockById(id);
                if (stock == null)
                {
                    return NotFound($"Stock with ID {id} not found.");
                }
                return Ok(stock.ToStockDTO());
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost]
        [Route("AddStock")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> AddStock([FromBody] CreateRequestStockDTO requestStockDTO)
        {
            try
            {
                if (requestStockDTO == null)
                {
                    return BadRequest("Invalid stock data.");
                }
                var stock = requestStockDTO.ToStock();
                await _stockRepository.AddStock(stock);

                return CreatedAtAction(
                    nameof(GetStockById),
                    new { id = stock.Id },
                    stock.ToStockDTO()
                );
            }
            catch (DbUpdateException ex)
            {
                return StatusCode(500, $"Database update error: {ex.Message}");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPut]
        [Route("UpdateStock/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> UpdateStock(
            int id,
            [FromBody] UpdateRequestStockDTO requestStockDTO
        )
        {
            try
            {
                if (requestStockDTO == null)
                {
                    return BadRequest("Invalid stock data.");
                }
                var stock = await _stockRepository.UpdateStock(id, requestStockDTO);
                if (stock == null)
                {
                    return NotFound($"Stock with ID {id} not found.");
                }

                return Ok(stock.ToStockDTO());
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return StatusCode(500, $"Database concurrency error: {ex.Message}");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete]
        [Route("DeleteStock/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> DeleteStock([FromRoute] int id)
        {
            try
            {
                var stock = await _stockRepository.DeleteStock(id);
                if (stock == null)
                {
                    return NotFound($"Stock with ID {id} not found.");
                }

                return Ok($"Stock with ID {id} deleted successfully.");
            }
            catch (DbUpdateException ex)
            {
                return StatusCode(500, $"Database update error: {ex.Message}");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
