using ngchess.enumerations;

namespace ngchess.domain;

public class HyattMove
{
    public int From { get; set; }
    public int To { get; set; }
    public Color Color { get; set; }
    public string Code { get; set; }
    public int Points { get; set; }
}