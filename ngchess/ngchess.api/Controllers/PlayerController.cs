﻿using MediatR;
using Microsoft.AspNetCore.Mvc;
using ngchess.contracts.Players;
using ngchess.contracts.Players.Queries;

namespace ngchess.api.Controllers;

[ApiController]
[Route("[controller]")]
public class PlayerController : BaseController
{
    public PlayerController(IMediator mediator) : base(mediator)
    {
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