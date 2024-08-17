using MediatR;
using ngchess.domain;

namespace ngchess.contracts.Players.Commands;

public record SavePlayerCommand(Player Player) : IRequest;