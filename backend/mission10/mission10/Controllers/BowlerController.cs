using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using mission10.Models;

namespace mission10.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private BowlingLeagueContext _bowlerContext;
        public BowlerController(BowlingLeagueContext temp)
        {
            _bowlerContext = temp;
        }



        [HttpGet(Name = "GetBowler")]
        public IEnumerable<Bowler> Get()
        {
            var bowlerList = _bowlerContext.Bowlers.ToList();

            return (bowlerList);
        }

    }
}
