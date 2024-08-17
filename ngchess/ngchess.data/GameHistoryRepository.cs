using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ngchess.data.Settings;
using ngchess.domain;

namespace ngchess.data;

public class GameHistoryRepository : BaseRepository<GameHistory>, IGameHistoryRepository
{
    public GameHistoryRepository(IMongoClient client, IOptions<MongoDbSettings> settings) : base(client, settings)
    {
    }
}