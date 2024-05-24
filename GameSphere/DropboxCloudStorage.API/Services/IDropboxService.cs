using Dropbox.Api;
using Dropbox.Api.Files;
using Dropbox.Api.Stone;
using DropboxCloudStorage.API.Extensions;
using DropboxCloudStorage.API.ViewModels;

namespace DropboxCloudStorage.API.Services;

public interface IDropboxService
{
    Task<ServerResponse> UploadFileAsync(UploadFileViewModel model);
    Task<ServerResponse> DeleteFileAsync(string filePath);
    Task<IDownloadResponse<FileMetadata>> DownloadFileAsync(string filePath);
}

public class DropboxService : IDropboxService
{
    private readonly IConfiguration configuration;

    public DropboxService(IConfiguration configuration)
    {
        this.configuration = configuration;
    }

    public async Task<ServerResponse> UploadFileAsync(UploadFileViewModel model)
    {
        string accessToken = configuration["DropboxAPI:Token"];

        using (DropboxClient dbxClient = new(accessToken))
        {
            using (MemoryStream stream = new(model.FileBytes))
            {
                FileMetadata responce = await dbxClient.Files.UploadAsync($"/{model.Folder}/{model.FileName}",
                    WriteMode.Overwrite.Instance,
                    body: stream);
            }
        }

        return new ServerResponse
        {
            Message = "File has been downloaded successfully!",
            IsSuccess = true
        };
    }

    public async Task<ServerResponse> DeleteFileAsync(string filePath)
    {
        string accessToken = configuration["DropboxAPI:Token"];

        using (DropboxClient dbxClient = new(accessToken))
        {
            DeleteResult responce = await dbxClient.Files.DeleteV2Async(filePath);
        }

        return new ServerResponse
        {
            Message = $"File by path \"{filePath}\" is deleted!",
            IsSuccess = true
        };
    }

    public async Task<IDownloadResponse<FileMetadata>> DownloadFileAsync(string filePath)
    {
        string accessToken = configuration["DropboxAPI:Token"];
        IDownloadResponse<FileMetadata> response = null;

        using (DropboxClient dbxClient = new(accessToken))
        {
            response = await dbxClient.Files.DownloadAsync(filePath);  
        }
        return response;
    }
}