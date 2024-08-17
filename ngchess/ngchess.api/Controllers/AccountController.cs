using MediatR;
using Microsoft.AspNetCore.Mvc;
using ngchess.contracts.Accounts.Commands;
using ngchess.contracts.Players.Queries;

namespace ngchess.api.Controllers;

public class AccountController : BaseController
{
    public AccountController(IMediator mediator) : base(mediator)
    {
    }

    [HttpPost("register")]
    public async Task<IActionResult> Post([FromBody] RegisterCommand command)
    {
        return Ok(await Mediator.Send(command));
    }

    [HttpPost("login")]
    public async Task<IActionResult> Post([FromBody] LoginCommand command)
    {
        var loginResponse = await Mediator.Send(command);

        if (loginResponse == null)
        {
            return NotFound();
        }

        return Ok(loginResponse);
    }
}