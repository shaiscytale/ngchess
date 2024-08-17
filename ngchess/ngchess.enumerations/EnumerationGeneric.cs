using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace ngchess.enumerations;
public abstract class Enumeration<T> : Enumeration, IComparable where T : Enumeration<T>
{
    private static readonly IDictionary<int, T> _allValues = new Dictionary<int, T>();
    private static bool _fieldsInitialized;

    protected Enumeration(int value, string displayName)
        : base(value, displayName)
    {
        _allValues.Add(value, (T)this);
    }

    public int CompareTo(object other)
    {
        return Value.CompareTo(((Enumeration)other).Value);
    }

    public static IEnumerable<T> GetAll()
    {
        ForceFieldInit();
        return _allValues.Values;
    }

    private static void ForceFieldInit()
    {
        if (_fieldsInitialized)
            return;
        foreach (var field in typeof(T).GetFields(
                     BindingFlags.DeclaredOnly | BindingFlags.Static | BindingFlags.Public))
            field.GetValue(null);
        _fieldsInitialized = true;
    }

    public static T FromValue(int value)
    {
        return Parse(value, nameof(value), item => item.Value == value);
    }

    public static T Parse(string displayName)
    {
        if (displayName == null)
            throw new ArgumentNullException(nameof(displayName));
        if (displayName.Trim() == string.Empty)
            throw new ArgumentException("Value cannot be an empty or white space string.", nameof(displayName));
        return Parse(displayName, "display name", item => item.DisplayName == displayName);
    }

    public static bool TryParse(Func<T, bool> predicate, out T matchingItem)
    {
        matchingItem = GetAll().FirstOrDefault(predicate);
        return matchingItem != null;
    }

    private static T Parse<TK>(TK value, string description, Func<T, bool> predicate)
    {
        T matchingItem;
        if (TryParse(predicate, out matchingItem))
            return matchingItem;
        throw new ArgumentException($"'{value}' is not a valid {description} in {typeof(T)}",
            nameof(value));
    }
}