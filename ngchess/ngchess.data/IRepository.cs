using MongoDB.Bson;

namespace ngchess.data;

public interface IRepository<T> where T : class
{
    Task<string> Create(T player);
    Task<T> Get(string id);
    Task<T?> Find(string id);
    Task<IEnumerable<T>> GetAll();
    Task<bool> Update(string id, T player);
    Task<bool> Delete(string id);
}