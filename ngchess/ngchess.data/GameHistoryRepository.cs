using MongoDB.Driver;
using ngchess.domain;

namespace ngchess.data;

public class GameHistoryRepository : BaseRepository<GameHistory>, IGameHistoryRepository
{
    public GameHistoryRepository(IMongoClient client) : base(client)
    {
    }
}