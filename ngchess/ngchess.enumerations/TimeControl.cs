namespace ngchess.enumerations;

public class TimeControl : Enumeration<TimeControl>
{
    public static readonly TimeControl Bullet_1 = new(0, "1min");
    public static readonly TimeControl Bullet_1_1 = new(0, "1|1");
    public static readonly TimeControl Bullet_2_1 = new(0, "2|1");
    public static readonly TimeControl Blitz_3 = new(0, "3min");
    public static readonly TimeControl Blitz_3_2 = new(0, "3_2");
    public static readonly TimeControl Blitz_5 = new(0, "5min");
    public static readonly TimeControl Rapid_10 = new(0, "10min");
    public static readonly TimeControl Rapid_15_10 = new(0, "15|10");
    public static readonly TimeControl Standard_30 = new(0, "30min");
    public static readonly TimeControl Standard_60 = new(0, "60min");
    public static readonly TimeControl Unlimited = new(0, "Unlimited");

    public TimeControl(int value, string displayName) : base(value, displayName)
    {
    }
}