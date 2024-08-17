using MediatR;
using ngchess.contracts.Players;
using ngchess.contracts.Players.Queries;
using ngchess.data;
using ngchess.services.Mapping;

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
        var players = await _playerRepository.GetAll();

        return players.Select(Mapper.Map);
    }
}