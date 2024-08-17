using MediatR;
using ngchess.domain;

namespace ngchess.contracts.GameHistories.Commands;

public class SaveGameHistoryCommand : IRequest
{
    public Guid WhitePlayerId { get; set; }
    public Guid BlackPlayerId { get; set; }
    public DateTimeOffset StartedOn { get; set; }
    public DateTimeOffset? EndedOn { get; set; }
    public List<HyattMove> Moves { get; set; }
}
