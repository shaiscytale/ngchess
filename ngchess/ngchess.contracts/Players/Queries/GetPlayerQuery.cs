using MediatR;
using ngchess.domain;

namespace ngchess.contracts.Players.Queries;

public record GetPlayerQuery(Guid PlayerId) : IRequest<Player>;