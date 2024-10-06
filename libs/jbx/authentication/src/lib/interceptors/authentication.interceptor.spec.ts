import { TestBed } from '@angular/core/testing';
import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { of } from 'rxjs';
import { authenticationInterceptor } from './authentication.interceptor';
import { ConfigManager } from '@jbx/config';
import { runInInjectionContext } from '@angular/core';

xdescribe('authenticationInterceptor', () => {
    let configManager: ConfigManager;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: ConfigManager,
                    useValue: {
                        getToken: jasmine.createSpy('getToken')
                    }
                }
            ]
        });

        configManager = TestBed.inject(ConfigManager);
    });

    it('should add Authorization header if token is present', () => {
        const token = 'test-token';
        (configManager.getToken as jasmine.Spy).and.returnValue(token);

        const request = new HttpRequest('GET', '/test');
        const next: HttpHandlerFn = jasmine.createSpy('next').and.returnValue(of({} as HttpEvent<any>));

        runInInjectionContext(TestBed, () => {
            authenticationInterceptor(request, next).subscribe();
        });

        expect(next).toHaveBeenCalledWith(jasmine.objectContaining({
            headers: jasmine.objectContaining({
                Authorization: token
            })
        }));
    });

});