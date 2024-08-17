using MediatR;
using ngchess.contracts.GameHistories.Queries;
using ngchess.domain;

namespace ngchess.services.GameHistories.QueryHandlers;

public class GetAllGameHistoryHandler : IRequestHandler<GetAllGameHistoryQuery, List<GameHistory>>
{
    public Task<List<GameHistory>> Handle(GetAllGameHistoryQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}