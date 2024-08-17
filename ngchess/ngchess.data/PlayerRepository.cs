using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ngchess.data.Settings;
using ngchess.domain;

namespace ngchess.data;

public class PlayerRepository: BaseRepository<Player>, IPlayerRepository
{
    public PlayerRepository(IMongoClient client, IOptions<MongoDbSettings> settings) : base(client, settings)
    {
    }
}