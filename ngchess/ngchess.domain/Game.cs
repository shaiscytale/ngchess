using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using ngchess.enumerations;

namespace ngchess.domain;

public class Game : IEntity
{
    public ObjectId WhitePlayerId { get; set; }
    public ObjectId BlackPlayerId { get; set; }
    public GameType GameType { get; set; }
    public TimeControl TimeControl { get; set; }
    public DateTimeOffset StartedOn { get; set; }
    public DateTimeOffset? EndedOn { get; set; }
    public List<HyattMove> Moves { get; set; }

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public ObjectId Id { get; set; }
}