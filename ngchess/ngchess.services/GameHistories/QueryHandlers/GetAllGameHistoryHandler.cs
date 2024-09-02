using MediatR;
using ngchess.contracts.GameHistories.Queries;
using ngchess.data;
using ngchess.domain;

namespace ngchess.services.GameHistories.QueryHandlers;

public class GetAllGameHistoryHandler : IRequestHandler<GetAllGameHistoryQuery, IEnumerable<Game>>
{
    private readonly IGameHistoryRepository _gameHistoryRepository;

    public GetAllGameHistoryHandler(IGameHistoryRepository gameHistoryRepository)
    {
        _gameHistoryRepository = gameHistoryRepository;
    }

    public async Task<IEnumerable<Game>> Handle(GetAllGameHistoryQuery request,
        CancellationToken cancellationToken)
    {
        return await _gameHistoryRepository.GetAll();
    }
}