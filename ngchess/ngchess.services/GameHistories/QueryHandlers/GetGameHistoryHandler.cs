using MediatR;
using MongoDB.Bson;
using ngchess.contracts.GameHistories.Queries;
using ngchess.data;
using ngchess.domain;

namespace ngchess.services.GameHistories.QueryHandlers;
public class GetGameHistoryHandler : IRequestHandler<GetGameHistoryQuery, GameHistory>
{
    private readonly IGameHistoryRepository _gameHistoryRepository;

    public GetGameHistoryHandler(IGameHistoryRepository gameHistoryRepository)
    {
        _gameHistoryRepository = gameHistoryRepository;
    }

    public async Task<GameHistory> Handle(GetGameHistoryQuery request, CancellationToken cancellationToken)
    {
        return await _gameHistoryRepository.Get(new ObjectId(request.GameId));
    }
}