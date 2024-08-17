using MediatR;
using MongoDB.Bson;
using ngchess.contracts.Players;
using ngchess.contracts.Players.Queries;
using ngchess.data;
using ngchess.services.Mapping;

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
        if (!ObjectId.TryParse(request.PlayerId, out var objectId))
            throw new InvalidOperationException(nameof(ObjectId));

        var player = await _playerRepository.Get(objectId);
        return Mapper.Map(player);
    }
}