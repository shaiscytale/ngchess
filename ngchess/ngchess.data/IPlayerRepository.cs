using ngchess.domain;

namespace ngchess.data;

public interface IPlayerRepository : IRepository<Player>
{
    Task<Player?> Find(string pseudo, string passwordHash);
    Task<bool> UpdateCredentials(string id, string pseudo, string password, string email);
}

public interface IGameRepository : IRepository<Game>
{
    Task<Game> Create(Player player);
}