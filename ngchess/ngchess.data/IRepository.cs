using MongoDB.Bson;

namespace ngchess.data;

public interface IRepository<T> where T : class
{
    Task<ObjectId> Create(T player);
    Task<T> Get(ObjectId id);
    Task<T?> Find(ObjectId id);
    Task<IEnumerable<T>> GetAll();
    Task<bool> Update(ObjectId id, T player);
    Task<bool> Delete(ObjectId id);
}