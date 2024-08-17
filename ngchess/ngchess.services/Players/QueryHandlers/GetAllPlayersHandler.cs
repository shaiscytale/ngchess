using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using ngchess.contracts.Players.Queries;
using ngchess.domain;

namespace ngchess.services.Players.QueryHandlers;
public class GetAllPlayersHandler : IRequestHandler<GetAllPlayersQuery, List<Player>>
{
    public Task<List<Player>> Handle(GetAllPlayersQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}