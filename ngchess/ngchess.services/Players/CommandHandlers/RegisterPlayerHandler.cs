using MediatR;
using ngchess.contracts.Players.Commands;
using ngchess.data;
using ngchess.domain;

namespace ngchess.services.Players.CommandHandlers;

public class RegisterPlayerHandler : IRequestHandler<RegisterPlayerCommand>
{
    private readonly IPlayerRepository _playerRepository;

    public RegisterPlayerHandler(IPlayerRepository playerRepository)
    {
        _playerRepository = playerRepository;
    }

    public Task Handle(RegisterPlayerCommand request, CancellationToken cancellationToken)
    {
        var newPlayer = new Player(
            request.Firstname,
            request.Lastname,
            request.Pseudo,
            request.PasswordHash,
            request.Email);
        return _playerRepository.Create(newPlayer);
    }
}