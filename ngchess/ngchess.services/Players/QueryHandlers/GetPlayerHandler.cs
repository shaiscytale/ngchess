using MediatR;
using ngchess.contracts.Players.Queries;
using ngchess.data;
using ngchess.domain;

namespace ngchess.services.Players.QueryHandlers;

public class GetPlayerHandler : IRequestHandler<GetPlayerQuery, Player>
{
    private readonly IPlayerRepository _playerRepository;

    public GetPlayerHandler(IPlayerRepository playerRepository)
    {
        _playerRepository = playerRepository;
    }

    public async Task<Player> Handle(GetPlayerQuery request, CancellationToken cancellationToken)
    {
        return await _playerRepository.Get(request.PlayerId);
    }
}