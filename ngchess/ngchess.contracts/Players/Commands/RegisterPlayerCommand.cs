using MediatR;

namespace ngchess.contracts.Players.Commands;

public record RegisterPlayerCommand(
    string Firstname,
    string Lastname,
    string Pseudo,
    string PasswordHash,
    string Email) : IRequest;