using MediatR;
using Microsoft.AspNetCore.Mvc;
using ngchess.contracts.Players.Commands;
using ngchess.contracts.Players.Queries;
using ngchess.domain;

namespace ngchess.api.Controllers;

[ApiController]
[Route("[controller]")]
public class PlayerController : BaseController
{
    public PlayerController(IMediator mediator) : base(mediator)
    {
    }

    [HttpPost]
    public async Task Post([FromBody] SavePlayerCommand command)
    {
        await Mediator.Send(command);
    }

    [HttpGet]
    public async Task<IEnumerable<Player>> Get()
    {
        return await Mediator.Send(new GetAllPlayersQuery());
    }

    [HttpGet("{id}")]
    public async Task<Player> Get(string id)
    {
        return await Mediator.Send(new GetPlayerQuery(id));
    }
}