using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ngchess.domain;

namespace ngchess.data;

public class PlayerRepository: BaseRepository<Player>, IPlayerRepository
{
    public PlayerRepository(IMongoClient client) : base(client)
    {
    }
}