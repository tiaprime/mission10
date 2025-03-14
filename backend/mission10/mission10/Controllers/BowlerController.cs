
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mission10.Models;
using System.Collections.Generic;
using System.Linq;

namespace mission10.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private readonly BowlingLeagueContext _bowlerContext;

        public BowlerController(BowlingLeagueContext temp)
        {
            _bowlerContext = temp;
        }

        [HttpGet(Name = "GetBowler")]
        public IEnumerable<object> Get()
        {
            var bowlerList = _bowlerContext.Bowlers
                .Include(b => b.Team) // Eager loading of the Team navigation property
                .Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks")
                .Select(b => new
                {
                    b.BowlerId,
                    b.BowlerFirstName,
                    b.BowlerLastName,
                    b.BowlerMiddleInit,
                    b.BowlerAddress,
                    b.BowlerCity,
                    b.BowlerState,
                    b.BowlerZip,
                    b.BowlerPhoneNumber,
                    TeamName = b.Team.TeamName // Fetch team name from the related Team entity
                })
                .ToList();

            return bowlerList;
        }
    }
}


//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using mission10.Models;

//namespace mission10.Controllers
//{
//    [Route("[controller]")]
//    [ApiController]
//    public class BowlerController : ControllerBase
//    {
//        private BowlingLeagueContext _bowlerContext;
//        public BowlerController(BowlingLeagueContext temp)
//        {
//            _bowlerContext = temp;
//        }



//[HttpGet(Name = "GetBowler")]
//public IEnumerable<Bowler> Get()
//{
//    var bowlerList = _bowlerContext.Bowlers.ToList();

//    return (bowlerList);
//}

//    }
//}
