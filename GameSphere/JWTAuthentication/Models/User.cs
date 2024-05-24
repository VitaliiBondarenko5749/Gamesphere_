using Microsoft.AspNetCore.Identity;

namespace JWTAuthentication.Models;

public class User : IdentityUser
{
    public string? ImageDirectory { get; set; }
    public string? RefreshToken { get; set; }
    public DateTime RefreshTokenExpiryTime { get; set; }
    public bool IsLocked { get; set; }
    public DateTime? LockDate { get; set; }
}