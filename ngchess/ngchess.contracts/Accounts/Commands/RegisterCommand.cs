using MediatR;

namespace ngchess.contracts.Accounts.Commands;

public record RegisterCommand(
    string Firstname,
    string Lastname,
    string Pseudo,
    string PasswordHash,
    string Email) : IRequest<string>;