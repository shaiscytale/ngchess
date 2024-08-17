using MediatR;
using ngchess.domain;

namespace ngchess.contracts.Players.Queries;

public record GetPlayerQuery(string PlayerId) : IRequest<Player>;