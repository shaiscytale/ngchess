using MediatR;
using ngchess.contracts.GameHistories.Commands;

namespace ngchess.services.GameHistories.CommandHandlers;


public class SaveGameHistoryHandler : IRequestHandler<SaveGameHistoryCommand>
{
    public Task Handle(SaveGameHistoryCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}