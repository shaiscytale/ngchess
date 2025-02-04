﻿using Microsoft.Extensions.Options;
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
        Collection = database.GetCollection<T>($"{typeof(T).Name}s");
    }

    public async Task<string> Create(T item)
    {
        await Collection.InsertOneAsync(item);

        return item.Id!.ToString();
    }

    public async Task<T> Get(ObjectId id)
    {
        var filter = Builders<T>.Filter.Eq("_id", id);
        return await Collection.Find(filter).SingleAsync();
    }

    public async Task<T?> Find(ObjectId id)
    {
        var filter = Builders<T>.Filter.Eq("_id", id);

        return await Collection.Find(filter).SingleOrDefaultAsync();
    }

    public async Task<IEnumerable<T>> GetAll()
    {
        return await Collection.Find(_ => true).ToListAsync();
    }

    public abstract Task<bool> Update(ObjectId id, T item);

    public async Task<bool> Delete(ObjectId id)
    {
        var filter = Builders<T>.Filter.Eq("_id", id);
        var result = await Collection.DeleteOneAsync(filter);

        return result.DeletedCount == 1;
    }
}