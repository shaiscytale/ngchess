using MediatR;
using ngchess.domain;

namespace ngchess.contracts.GameHistories.Queries;

public record GetGameHistoryQuery(string GameId) : IRequest<GameHistory>;