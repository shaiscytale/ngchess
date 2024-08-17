using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ngchess.domain;

public interface IEntity
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    string? Id { get; set; }
}

public class Player : IEntity
{
    public string Firstname { get; set; } = null!;
    public string Lastname { get; set; } = null!;
    public string Pseudo { get; set; } = null!;
    public int Rating { get; set; }

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
}