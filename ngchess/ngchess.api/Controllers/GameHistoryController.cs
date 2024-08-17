using MediatR;
using Microsoft.AspNetCore.Mvc;
using ngchess.contracts.GameHistories.Commands;
using ngchess.contracts.GameHistories.Queries;
using ngchess.domain;

namespace ngchess.api.Controllers;

[ApiController]
[Route("[controller]")]
public class GameHistoryController : BaseController
{
    public GameHistoryController(IMediator mediator) : base(mediator)
    {
    }

    [HttpPost]
    public async Task Post([FromBody] SaveGameHistoryCommand command)
    {
        await Mediator.Send(command);
    }

    [HttpGet]
    public async Task<List<GameHistory>> Get()
    {
        return await Mediator.Send(new GetAllGameHistoryQuery());
    }

    [HttpGet("{id}")]
    public async Task<GameHistory> Get(Guid id)
    {
        return await Mediator.Send(new GetGameHistoryQuery(id));
    }
}