using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using ngchess.data.Settings;
using ngchess.domain;

namespace ngchess.data;

public abstract class BaseRepository<T> : IRepository<T> where T : class, IEntity
{
    protected readonly IMongoCollection<T> Collection;
    protected BaseRepository(IMongoClient client, IOptions<MongoDbSettings> settings)
    {
        var database = client.GetDatabase(settings.Value.DatabaseName);
        Collection = database.GetCollection<T>(typeof(T).Name);
    }

    public async Task<ObjectId> Create(T item)
    {
        await Collection.InsertOneAsync(item);

        return item.Id;
    }

    public async Task<T> Get(ObjectId id)
    {
        var filter = Builders<T>.Filter.Eq(c => c.Id, id);

        return await Collection.Find(filter).SingleAsync();
    }

    public async Task<T?> Find(ObjectId id)
    {
        var filter = Builders<T>.Filter.Eq(c => c.Id, id);

        return await Collection.Find(filter).SingleOrDefaultAsync();
    }

    public async Task<IEnumerable<T>> GetAll()
    {
        return await Collection.Find(_ => true).ToListAsync();
    }

    public async Task<bool> Update(ObjectId id, T player)
    {
        var filter = Builders<T>.Filter.Eq(c => c.Id, id);

        // TODO: do some reflection here to update all properties of T
        //var update = Builders<T>.Update
        //    .Set(T => {});

        //var result = await Collection.UpdateOneAsync(filter, update);

        //return result.ModifiedCount == 1;

        throw new NotImplementedException("GENERIC_UPDATE_NOT_NEEDED_FOR_NOW_AND_NEED_SOME_RESEARCH");
    }

    public async Task<bool> Delete(ObjectId id)
    {
        var filter = Builders<T>.Filter.Eq(c => c.Id, id);
        var result = await Collection.DeleteOneAsync(filter);

        return result.DeletedCount == 1;
    }
}