﻿using MediatR;
using ngchess.contracts.GameHistories.Queries;
using ngchess.data;
using ngchess.domain;

namespace ngchess.services.GameHistories.QueryHandlers;

public class GetGameHistoryHandler : IRequestHandler<GetGameHistoryQuery, Game>
{
    private readonly IGameHistoryRepository _gameHistoryRepository;

    public GetGameHistoryHandler(IGameHistoryRepository gameHistoryRepository)
    {
        _gameHistoryRepository = gameHistoryRepository;
    }

    public async Task<Game> Handle(GetGameHistoryQuery request, CancellationToken cancellationToken)
    {
        //return await _gameHistoryRepository.Get(request.GameId);

        throw new NotImplementedException();
    }
}