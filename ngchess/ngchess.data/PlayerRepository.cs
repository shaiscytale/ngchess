using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ngchess.data.Settings;
using ngchess.domain;

namespace ngchess.data;

public class PlayerRepository : BaseRepository<Player>, IPlayerRepository
{
    public PlayerRepository(IMongoClient client, IOptions<MongoDbSettings> settings) : base(client, settings)
    {
    }

    public override async Task<bool> Update(string id, Player item)
    {
        var filter = Builders<Player>.Filter.Eq("_id", id);

        var update = Builders<Player>.Update
            .Set(c => c.Firstname, item.Firstname)
            .Set(c => c.Lastname, item.Lastname)
            .Set(c => c.Pseudo, item.Pseudo)
            .Set(c => c.Rating, item.Rating);
        var result = await Collection.UpdateOneAsync(filter, update);

        return result.ModifiedCount == 1;
    }
}