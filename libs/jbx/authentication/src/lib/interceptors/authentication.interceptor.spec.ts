import { HttpRequest, HttpHandlerFn, HttpEvent } from "@angular/common/http";
import { of } from "rxjs";
import { authenticationInterceptor } from "./authentication.interceptor";

describe('authenticationInterceptor', () => {
    it('should add the token to the headers', () => {
        const request = new HttpRequest('GET', '/test');
        const next: HttpHandlerFn = (req) => {
            expect(req.headers.has('Authorization')).toBe(true);
            expect(req.headers.get('Authorization')).toBe('JobelixToken2024!');
            return of({} as HttpEvent<any>);
        };

        authenticationInterceptor(request, next).subscribe();
    });
});