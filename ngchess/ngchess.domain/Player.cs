﻿using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ngchess.domain;

public class Player : IEntity
{
    public string Firstname { get; set; } = null!;
    public string Lastname { get; set; } = null!;
    public string Pseudo { get; set; } = null!;
    public string Password { get; set; } = null!;
    public string Email { get; set; } = null!;
    public int Rating { get; set; }

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public Player()
    {

    }

    /// <summary>
    /// Registration ctor
    /// </summary>
    /// <param name="firstname"></param>
    /// <param name="lastname"></param>
    /// <param name="pseudo"></param>
    /// <param name="password"></param>
    /// <param name="email"></param>
    public Player(
        string firstname,
        string lastname,
        string pseudo,
        string password,
        string email)
    {
        Firstname = firstname;
        Lastname = lastname;
        Pseudo = pseudo;
        Password = password;
        Email = email;
        Rating = 0;
    }

    /// <summary>
    /// full ctor
    /// </summary>
    /// <param name="id"></param>
    /// <param name="firstname"></param>
    /// <param name="lastname"></param>
    /// <param name="pseudo"></param>
    /// <param name="password"></param>
    /// <param name="email"></param>
    /// <param name="rating"></param>
    public Player(
        string? id,
        string firstname, 
        string lastname, 
        string pseudo, 
        string password, 
        string email, 
        int rating)
    {
        Id = id;
        Firstname = firstname;
        Lastname = lastname;
        Pseudo = pseudo;
        Password = password;
        Email = email;
        Rating = rating;
    }
}