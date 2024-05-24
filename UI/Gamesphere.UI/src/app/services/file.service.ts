import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FileService {

    private readonly dropboxBaseUrl = 'https://api.dropboxapi.com/2/files';
    private readonly accessToken = 'sl.B1wj8mP8vKybLZseFEUQWfRnmkbJU5-V2XdGLsXm_XB-VJ_BRqf9SH1pJLdjjFK1hNnZINJFPqAOqcmzpfmOdPtsj7iBpGDgQt9PI6-hoH1o00sOgO_BGzI7zvVoeetyZRcxphLc72JBk8U';

    constructor(private http: HttpClient) { }

    downloadFileFromDropbox(filePath: string): Observable<string> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.accessToken}`
        });

        return this.http.post<any>(
            `${this.dropboxBaseUrl}/get_temporary_link`,
            { path: filePath },
            { headers: headers }
        ).pipe(
            map(response => response.link),
            catchError(error => {
                console.error('Error getting temporary link from Dropbox:', error);
                return throwError(error);
            })
        );
    }

    deleteFileFromDropbox(filePath: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.accessToken}`
        });

        return this.http.post<any>(
            `${this.dropboxBaseUrl}/delete_v2`,
            { path: filePath },
            { headers: headers }
        ).pipe(
            map(response => response.metadata),
            catchError(error => {
                console.error('Error deleting file from Dropbox:', error);
                return throwError(error);
            })
        );
    }
}