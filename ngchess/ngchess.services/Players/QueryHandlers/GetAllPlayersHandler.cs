using MediatR;
using ngchess.contracts.Players.Queries;
using ngchess.data;
using ngchess.domain;

namespace ngchess.services.Players.QueryHandlers;

public class GetAllPlayersHandler : IRequestHandler<GetAllPlayersQuery, IEnumerable<Player>>
{
    private readonly IPlayerRepository _playerRepository;

    public GetAllPlayersHandler(IPlayerRepository playerRepository)
    {
        _playerRepository = playerRepository;
    }

    public async Task<IEnumerable<Player>> Handle(GetAllPlayersQuery request, CancellationToken cancellationToken)
    {
        return await _playerRepository.GetAll();
    }
}