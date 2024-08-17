using MediatR;

namespace ngchess.contracts.Players.Queries;

public record GetAllPlayersQuery : IRequest<IEnumerable<Player>>;