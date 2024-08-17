using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ngchess.domain;

public interface IEntity
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    string? Id { get; set; }
}