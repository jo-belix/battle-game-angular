import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

/**
 * @description Intercepts the request and adds the token to the headers
 * @param request 
 * @param next 
 * @returns 
 */
export function authenticationInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

    const token = 'JobelixToken2024!'
    if (token) {
        return next(request.clone({
            headers: request.headers.set('Authorization', token)
        }));
    } else {
        return next(request);
    }
  }