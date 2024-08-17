using MediatR;
using ngchess.contracts.GameHistories.Commands;
using ngchess.data;

namespace ngchess.services.GameHistories.CommandHandlers;

public class SaveGameHistoryHandler : IRequestHandler<SaveGameHistoryCommand>
{
    private readonly IGameHistoryRepository _gameHistoryRepository;

    public SaveGameHistoryHandler(IGameHistoryRepository gameHistoryRepository)
    {
        _gameHistoryRepository = gameHistoryRepository;
    }

    public async Task Handle(SaveGameHistoryCommand request, CancellationToken cancellationToken)
    {
        var existing = await _gameHistoryRepository.Find(request.GameHistory.Id);
        if (existing != null)
            await _gameHistoryRepository.Update(request.GameHistory.Id, request.GameHistory);
        else
            await _gameHistoryRepository.Create(request.GameHistory);
    }
}