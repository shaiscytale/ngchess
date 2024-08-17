using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using ngchess.contracts.Players.Commands;

namespace ngchess.services.Players.CommandHandlers;
public class SavePlayerHandler : IRequestHandler<SavePlayerCommand>
{
    public Task Handle(SavePlayerCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
