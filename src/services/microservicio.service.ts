import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
var CONSTANTS = {
    ENDPOINT: 'http://localhost:3001/microservicios/osvt/',
    ENDPOINTS: 'http://localhost:3001/microservicios/osvt/'
}
@Injectable()
export class MicroservicioService {
    public endpoints: any = {
        microserviciosBuscarColegios: {
            url: CONSTANTS.ENDPOINT,
            urlS: CONSTANTS.ENDPOINTS,
            path: {
                obtenerParametria: 'obtenerParametria',
               
            },
        },
    };
    constructor(private http: HttpClient) { }
    getEndpoint(bff: string) {
        return this.endpoints[bff];
    }
    getEndpointS(bffS: string) {
        return this.endpoints[bffS];
    }
    resolveUrl(bff: string, path?: string) {
        const endpoint = this.getEndpoint(bff);
        if (!endpoint) {
            return bff + (path ? path : '');
        }
        return endpoint.url + (endpoint.url && endpoint.path[path]) || path || '';
    }
    resolveUrlS(bffS: string, path?: string) {
        const endpoint = this.getEndpointS(bffS);
        if (!endpoint) {
            return bffS + (path ? path : '');
        }
        return endpoint.urlS + (endpoint.urlS && endpoint.path[path]) || path || '';
    }
    makeGetRequestSin(bffS: string, path: string, data?: any): Observable<any> {
        let tempHeader = {
            url: this.resolveUrlS(bffS, path) 
        };
       
        return this.http.get(this.resolveUrlS(bffS, path), { headers: tempHeader });
    }
   /*  makeGetRequest(bff: string, path: string, data?: any): Observable<any> {
        let tempHeader = {
            authorization: sessionStorage.getItem('authorization'),
            codigosesion: sessionStorage.getItem('codigosesion'),
            identificationnumber: data.identificationNumber,
            identificationcomplement: data.identificationComplement,
            xTrackID: this.Utils.generateUUID(data.identificationNumber, data.identificationComplement, false),
            url: this.resolveUrl(bff, path),
        };
        
        return this.http.get(this.resolveUrl(bff, path), { headers: tempHeader });
    }
    makePostRequestSin(bffS: string, path: string, data: any): Observable<any> {
        let tempHeader = {
            codigosesion: sessionStorage.getItem('codigosesion'),
            identificationnumber: data.identificationNumber,
            identificationcomplement: data.identificationComplement,
            xTrackID: this.Utils.generateUUID(data.identificationNumber, data.identificationComplement, false),
            url: this.resolveUrlS(bffS, path),
        };
        return this.http.post(this.resolveUrlS(bffS, path), data, { headers: tempHeader });
    }
    makePostRequest(bff: string, path: string, data: any): Observable<any> {
        let tempHeader = {
            authorization: sessionStorage.getItem('authorization'),
            codigosesion: sessionStorage.getItem('codigosesion'),
            identificationnumber: data.identificationNumber,
            identificationcomplement: data.identificationComplement,
            xTrackID: this.Utils.generateUUID(data.identificationNumber, data.identificationComplement, false),
            url: this.resolveUrl(bff, path)
        };
        return this.http.post(this.resolveUrl(bff, path), data, { headers: tempHeader });
    }

    makePutRequest(bff: string, path: string, data: any): Observable<any> {
        let tempHeader = {
            authorization: sessionStorage.getItem('authorization'),
            codigosesion: sessionStorage.getItem('codigosesion'),
            identificationnumber: data.identificationNumber,
            identificationcomplement: data.identificationComplement,
            xTrackID: this.Utils.generateUUID(data.identificationNumber, data.identificationComplement, false),
            url: this.resolveUrl(bff, path)
        };
        console.log('PUT: ', this.resolveUrl(bff, path));
        console.log('data', data);
        console.log('tempHeader', tempHeader);
        return this.http.put(this.resolveUrl(bff, path), data, { headers: tempHeader });
    } */
}