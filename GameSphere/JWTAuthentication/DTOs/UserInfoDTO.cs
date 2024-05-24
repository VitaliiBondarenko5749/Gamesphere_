namespace JWTAuthentication.DTOs;

public class UserInfoDTO
{
    public string Id { get; set; } = default!;
    public string UserName { get; set; } = default!;
    public string? Role { get; set; }
}