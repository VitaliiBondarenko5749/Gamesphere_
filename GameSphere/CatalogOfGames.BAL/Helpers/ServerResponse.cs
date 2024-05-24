namespace CatalogOfGames.BAL.Helpers;

public class ServerResponse
{
    public string Message { get; set; } = null!;
    public bool IsSuccess { get; set; }
    public IEnumerable<string>? Errors { get; set; }
}