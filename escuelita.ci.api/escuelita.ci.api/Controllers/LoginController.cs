using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using escuelita.ci.api.Models;

namespace escuelita.ci.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        // POST api/login
        [HttpPost]
        public async Task<ActionResult<string>> Post([FromBody] User user)
        {
            try
            {
                return Ok(DateTime.Now.Ticks.ToString());
            }
            catch (System.Exception ex)
            {
                return BadRequest($"ERROR:POST:{ex.StackTrace}");
            }
        }

    }
}
