using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace ngchess.domain;

public interface IEntity
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    string? Id { get; set; }
}

public class Player : IEntity
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }


    public string Firstname { get; set; } = null!;
    public string Lastname { get; set; } = null!;
    public string Pseudo { get; set; } = null!;
    public int Rating { get; set; }
}