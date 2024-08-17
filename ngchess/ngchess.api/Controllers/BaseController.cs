using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ngchess.api.Controllers;

public class BaseController : ControllerBase
{
    protected readonly IMediator Mediator;
    public BaseController(IMediator mediator)
    {
        Mediator = mediator;
    }
}