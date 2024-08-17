using MediatR;
using ngchess.contracts.GameHistories.Queries;
using ngchess.domain;

namespace ngchess.services.GameHistories.QueryHandlers;
public class GetGameHistoryHandler : IRequestHandler<GetGameHistoryQuery, GameHistory>
{
    public Task<GameHistory> Handle(GetGameHistoryQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}