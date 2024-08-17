﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using ngchess.domain;

namespace ngchess.contracts.Players.Queries;

public record GetAllPlayersQuery() : IRequest<List<Player>>;