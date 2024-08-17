using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using ngchess.enumerations;

namespace ngchess.domain;

public class GameHistory : IEntity
{
    public Guid WhitePlayerId { get; set; }
    public Guid BlackPlayerId { get; set; }
    public GameType GameType { get; set; }
    public TimeControl TimeControl { get; set; }
    public DateTimeOffset StartedOn { get; set; }
    public DateTimeOffset? EndedOn { get; set; }
    public List<HyattMove> Moves { get; set; }

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
}