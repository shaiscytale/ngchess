using MediatR;
using ngchess.domain;

namespace ngchess.contracts.GameHistories.Queries;

public class GetAllGameHistoryQuery : IRequest<IEnumerable<Game>>
{
}