using MediatR;

namespace ngchess.contracts.Players.Queries;

public record GetPlayerQuery(string PlayerId) : IRequest<Player>;