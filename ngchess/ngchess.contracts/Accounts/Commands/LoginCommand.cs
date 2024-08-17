using MediatR;

namespace ngchess.contracts.Accounts.Commands;

public record LoginCommand(
    string Pseudo,
    string PasswordHash) : IRequest<string?>;