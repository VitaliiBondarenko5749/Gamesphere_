namespace JWTAuthentication.Models;

public class ConfirmEmailModel
{
    public string UserId { get; set; } = default!;
    public string Code { get; set; } = default!;
}