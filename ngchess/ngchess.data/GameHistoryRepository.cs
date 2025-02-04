﻿using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using ngchess.data.Settings;
using ngchess.domain;

namespace ngchess.data;

public class GameHistoryRepository : BaseRepository<Game>, IGameHistoryRepository
{
    public GameHistoryRepository(IMongoClient client, IOptions<MongoDbSettings> settings) : base(client, settings)
    {
    }

    public override async Task<bool> Update(ObjectId id, Game item)
    {
        var filter = Builders<Game>.Filter.Eq("_id", id);

        var update = Builders<Game>.Update
            .Set(c => c.Moves, item.Moves)
            .Set(c => c.EndedOn, item.EndedOn);
        var result = await Collection.UpdateOneAsync(filter, update);

        return result.ModifiedCount == 1;
    }
}