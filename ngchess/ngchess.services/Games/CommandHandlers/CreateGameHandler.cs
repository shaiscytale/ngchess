using MediatR;
using MongoDB.Bson;
using ngchess.contracts.Games.Commands;
using ngchess.data;

namespace ngchess.services.Games.CommandHandlers;
public class CreateGameHandler : IRequestHandler<CreateGameCommand, string>
{
    private readonly IGameRepository _gameRepository;
    private readonly IPlayerRepository _playerRepository;

    public CreateGameHandler(IGameRepository gameRepository, IPlayerRepository playerRepository)
    {
        _gameRepository = gameRepository;
        _playerRepository = playerRepository;
    }

    public async Task<string> Handle(CreateGameCommand request, CancellationToken cancellationToken)
    {
        if (!ObjectId.TryParse(request.PlayerId, out var objectId))
            throw new InvalidOperationException(nameof(ObjectId));

        var player = await _playerRepository.Get(objectId);
        var game = await _gameRepository.Create(player);

        return game.Id.ToString();
    }
}
