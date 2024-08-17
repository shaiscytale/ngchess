using MediatR;
using ngchess.domain;

namespace ngchess.contracts.GameHistories.Commands;

public class SaveGameHistoryCommand : IRequest
{
    public GameHistory GameHistory { get; set; }
}
