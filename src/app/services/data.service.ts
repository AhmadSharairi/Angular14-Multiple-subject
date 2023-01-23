import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/NotFoundError';
import { BadInput } from './../common/bad-input';
import { throwError } from 'rxjs';






@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(@Inject(String) private url, private http: HttpClient) { }

    getAll() {
        return this.http.get(this.url).pipe(
            map(response => response),
            catchError(this.handleError)
        );
    }



    create(resource) {

        return this.http.post<{ id: Number }>(this.url, JSON.stringify(resource)).pipe(
            map(response => response),
            catchError(this.handleError));
    }


    update(resource) {
        return this.http.patch(this.url + '/' + resource.id,
            JSON.stringify({ isRead: true })).pipe
            (map(response => response),
                catchError(this.handleError)
            );
    }



    delete(id) {
        return this.http.delete(this.url + '/' + id).pipe
            (map(response => response),

                catchError(this.handleError)
            );
    }


    private handleError(error: Response) {
        if (error.status === 400)
            return throwError(() => new BadInput(error.json()));


        if (error.status === 404)
            return throwError(() => new NotFoundError(error));

        return throwError(() => new AppError(error));



    }

}



