using ngchess.domain;

namespace ngchess.data;

public interface IPlayerRepository : IRepository<Player>
{
    Task<Player?> Find(string pseudo, string passwordHash);
    Task<bool> UpdateCredentials(string id, string pseudo, string password, string email);
}