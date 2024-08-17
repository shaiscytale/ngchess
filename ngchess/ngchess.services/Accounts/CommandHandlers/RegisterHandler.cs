using MediatR;
using ngchess.contracts.Accounts.Commands;
using ngchess.data;
using ngchess.domain;

namespace ngchess.services.Accounts.CommandHandlers;

public class RegisterHandler : IRequestHandler<RegisterCommand, string>
{
    private readonly IPlayerRepository _playerRepository;

    public RegisterHandler(IPlayerRepository playerRepository)
    {
        _playerRepository = playerRepository;
    }

    public async Task<string> Handle(RegisterCommand request, CancellationToken cancellationToken)
    {
        var newPlayer = new Player(
            request.Firstname,
            request.Lastname,
            request.Pseudo,
            request.PasswordHash,
            request.Email);

        // in case of shit
        //var existing = await _playerRepository.Find(newPlayer.Id!);
        //while (existing != null)
        //{
        //    newPlayer.GenerateNewId();
        //    existing = await _playerRepository.Find(newPlayer.Id!);
        //}

        return await _playerRepository.Create(newPlayer);
    }
}