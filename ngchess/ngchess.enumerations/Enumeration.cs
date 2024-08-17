namespace ngchess.enumerations;

public abstract class Enumeration
{
    protected Enumeration(int value, string displayName)
    {
        DisplayName = displayName ?? throw new ArgumentNullException(nameof(displayName));
        if (displayName.Trim() == string.Empty)
            throw new ArgumentException("Value cannot be an empty or white space only string.", nameof(displayName));
        Value = value >= 0 ? value : throw new ArgumentException("Value cannot be < 0.", nameof(value));
    }

    public int Value { get; }

    public string DisplayName { get; }

    public override string ToString()
    {
        return DisplayName;
    }
}