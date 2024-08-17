using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ngchess.data;
using ngchess.data.Settings;
using ngchess.services;

namespace ngchess.api.Configuration;

public static class ServiceInjection
{
    public static IServiceCollection ConfigureMediatR(this IServiceCollection services)
    {
        services.AddMediatR(config =>
        {
            config.RegisterServicesFromAssembly(typeof(MediatREntryPoint).Assembly);
        });

        return services;
    }

    public static IServiceCollection ConfigureMongoDb(this IServiceCollection services, MongoDbSettings settings)
    {
        var mongoClient = new MongoClient(settings.ConnectionString);
        services.AddSingleton<IMongoClient>(mongoClient);

        return services;
    }

    public static IServiceCollection InjectRepositories(this IServiceCollection services)
    {
        services.AddTransient<IPlayerRepository, PlayerRepository>();
        services.AddTransient<IGameHistoryRepository, GameHistoryRepository>();

        return services;
    }
}
