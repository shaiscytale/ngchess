using MediatR;
using ngchess.domain;

namespace ngchess.contracts.Players.Queries;

public record GetAllPlayersQuery : IRequest<IEnumerable<Player>>;