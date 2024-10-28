import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          // Errores del cliente
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Errores del servidor
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }

        // Aquí puedes agregar lógica adicional, como mostrar un mensaje de error
        console.error(errorMessage);
        alert(errorMessage); // Por ejemplo, mostrar un alert (puedes cambiarlo por un snackbar u otro método)

        return throwError(errorMessage);
      })
    );
  }
}
