import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class AuthInterceptorService  implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Request is on its way");
        const modifiedReq = req.clone({
            headers: req.headers.append('Auth', 'AuthHeader')
        })
        return next.handle(modifiedReq).pipe(tap(event => {
            // console.log("Response from interceptor", event)
            if(event.type == HttpEventType.Response) {
                console.log("Response Arrived ");
                console.log(event.body);
            } 
        }));
    }
}