import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { ApiService } from '../service/service.service';


/*
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: ApiService) {}

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtener el token del servicio de autenticación
    const token = this.authService.getToken(); // Asegúrate de tener un método en tu AuthService para obtener el token

    // Clonar la solicitud y agregar el token al encabezado de autorización
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Manejo de errores de autenticación
        if (error.status === 401) {
          // Aquí puedes redirigir al usuario a la página de inicio de sesión
          console.error('No autorizado: redirigiendo a la página de inicio de sesión.');
          this.authService.logout(); // Asegúrate de tener un método de logout en tu AuthService
        }

        return throwError(error); // Lanzar el error para que pueda ser manejado en otros lugares
      })
    );
  }
}
*/
  

