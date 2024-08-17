namespace ngchess.contracts.Players;
public class Player
{
    public string Firstname { get; set; } = null!;
    public string Lastname { get; set; } = null!;
    public string Pseudo { get; set; } = null!;
    public int Rating { get; set; }
    
    public string? Id { get; set; }
}
