using MediatR;
using ngchess.contracts.Players.Commands;
using ngchess.data;

namespace ngchess.services.Players.CommandHandlers;
public class SavePlayerHandler : IRequestHandler<SavePlayerCommand>
{
    private readonly IPlayerRepository _playerRepository;

    public SavePlayerHandler(IPlayerRepository playerRepository)
    {
        _playerRepository = playerRepository;
    }

    public async Task Handle(SavePlayerCommand request, CancellationToken cancellationToken)
    {
        var existing = await _playerRepository.Find(request.Player.Id);
        if (existing != null)
        {
            await _playerRepository.Update(request.Player.Id, request.Player);
        }
        else
        {
            await _playerRepository.Create(request.Player);
        }
    }
}
