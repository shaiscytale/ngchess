using MediatR;

namespace ngchess.contracts.Games.Commands;

public record CreateGameCommand(string PlayerId) : IRequest<string>;
