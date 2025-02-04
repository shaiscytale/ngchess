﻿using MediatR;
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
        //var existing = await _gameHistoryRepository.Find(request.Game.Id);
        //if (existing != null)
        //    await _gameHistoryRepository.Update(request.Game.Id, request.Game);
        //else
        //    await _gameHistoryRepository.Create(request.Game);

        throw new NotImplementedException();
    }
}