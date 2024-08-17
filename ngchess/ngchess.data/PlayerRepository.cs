using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using ngchess.data.Settings;
using ngchess.domain;

namespace ngchess.data;

public class PlayerRepository : BaseRepository<Player>, IPlayerRepository
{
    public PlayerRepository(IMongoClient client, IOptions<MongoDbSettings> settings) : base(client, settings)
    {
    }

    public override async Task<bool> Update(ObjectId id, Player item)
    {
        var filter = Builders<Player>.Filter.Eq("_id", id);

        var update = Builders<Player>.Update
            .Set(c => c.Firstname, item.Firstname)
            .Set(c => c.Lastname, item.Lastname)
            .Set(c => c.Email, item.Email)
            .Set(c => c.Rating, item.Rating);
        var result = await Collection.UpdateOneAsync(filter, update);

        return result.ModifiedCount == 1;
    }

    public async Task<Player?> Find(string pseudo, string passwordHash)
    {
        var filter = Builders<Player>.Filter.Eq(c => c.Pseudo, pseudo);
        filter &= Builders<Player>.Filter.Eq(c => c.Password, passwordHash);

        return await Collection.Find(filter).SingleOrDefaultAsync();
    }

    public async Task<bool> UpdateCredentials(string id, string pseudo, string password, string email)
    {
        var filter = Builders<Player>.Filter.Eq("_id", id);

        var update = Builders<Player>.Update
            .Set(c => c.Pseudo, pseudo)
            .Set(c => c.Email, email)
            .Set(c => c.Password, password);
        var result = await Collection.UpdateOneAsync(filter, update);

        return result.ModifiedCount == 1;
    }
}