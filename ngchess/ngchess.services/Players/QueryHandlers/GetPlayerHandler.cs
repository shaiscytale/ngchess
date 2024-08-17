using MediatR;
using ngchess.contracts.Players.Queries;
using ngchess.domain;

namespace ngchess.services.Players.QueryHandlers;

public class GetPlayerHandler : IRequestHandler<GetPlayerQuery, Player>
{
    public Task<Player> Handle(GetPlayerQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}