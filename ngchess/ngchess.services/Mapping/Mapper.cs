using Player = ngchess.domain.Player;
using PlayerContract = ngchess.contracts.Players.Player;

namespace ngchess.services.Mapping;
public static class Mapper
{
    #region Player

    public static PlayerContract Map(Player player)
    {
        return new PlayerContract
        {
            Id = player.Id,
            Firstname = player.Firstname,
            Lastname = player.Lastname,
            Pseudo = player.Pseudo,
            Rating = player.Rating
        };
    }

    #endregion
}
