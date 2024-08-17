using MediatR;
using ngchess.contracts.Accounts.Commands;
using ngchess.data;

namespace ngchess.services.Accounts.CommandHandlers;

public class LoginHandler : IRequestHandler<LoginCommand, string?>
{
    private readonly IPlayerRepository _playerRepository;

    public LoginHandler(IPlayerRepository playerRepository)
    {
        _playerRepository = playerRepository;
    }

    public async Task<string?> Handle(LoginCommand request, CancellationToken cancellationToken)
    {
        var player = await _playerRepository.Find(request.Pseudo, request.PasswordHash);
        
        return player?.Id;
    }
}