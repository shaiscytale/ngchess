using MongoDB.Bson;

namespace ngchess.data;

public interface IRepository<T> where T : class
{
    Task<string> Create(T item);
    Task<T> Get(ObjectId id);
    Task<T?> Find(ObjectId id);
    Task<IEnumerable<T>> GetAll();
    Task<bool> Update(ObjectId id, T item);
    Task<bool> Delete(ObjectId id);
}