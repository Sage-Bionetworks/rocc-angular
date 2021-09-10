/**
 * Registry of Open Community Challenge API
 * The OpenAPI specification implemented by the Challenge Registries. # Introduction TBA 
 *
 * The version of the OpenAPI document: 0.4.0
 * Contact: thomas.schaffter@sagebionetworks.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { Challenge } from '../model/models';
import { ChallengeCreateRequest } from '../model/models';
import { ChallengeCreateResponse } from '../model/models';
import { ChallengeStatus } from '../model/models';
import { DateRange } from '../model/models';
import { PageOfChallenges } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

    protected basePath = 'https://rocc.org/api/v1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}[${k}]` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Add a challenge
     * Adds a challenge
     * @param accountName The name of the account that owns the challenge
     * @param challengeCreateRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createChallenge(accountName: string, challengeCreateRequest: ChallengeCreateRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<ChallengeCreateResponse>;
    public createChallenge(accountName: string, challengeCreateRequest: ChallengeCreateRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<ChallengeCreateResponse>>;
    public createChallenge(accountName: string, challengeCreateRequest: ChallengeCreateRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<ChallengeCreateResponse>>;
    public createChallenge(accountName: string, challengeCreateRequest: ChallengeCreateRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (accountName === null || accountName === undefined) {
            throw new Error('Required parameter accountName was null or undefined when calling createChallenge.');
        }
        if (challengeCreateRequest === null || challengeCreateRequest === undefined) {
            throw new Error('Required parameter challengeCreateRequest was null or undefined when calling createChallenge.');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.post<ChallengeCreateResponse>(`${this.configuration.basePath}/challenges/${encodeURIComponent(String(accountName))}`,
            challengeCreateRequest,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete all challenges
     * Delete all challenges
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteAllChallenges(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<object>;
    public deleteAllChallenges(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<object>>;
    public deleteAllChallenges(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<object>>;
    public deleteAllChallenges(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.delete<object>(`${this.configuration.basePath}/challenges`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete a challenge
     * Deletes the challenge specified
     * @param accountName The name of the account that owns the challenge
     * @param challengeName The name of the challenge
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteChallenge(accountName: string, challengeName: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<object>;
    public deleteChallenge(accountName: string, challengeName: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<object>>;
    public deleteChallenge(accountName: string, challengeName: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<object>>;
    public deleteChallenge(accountName: string, challengeName: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (accountName === null || accountName === undefined) {
            throw new Error('Required parameter accountName was null or undefined when calling deleteChallenge.');
        }
        if (challengeName === null || challengeName === undefined) {
            throw new Error('Required parameter challengeName was null or undefined when calling deleteChallenge.');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.delete<object>(`${this.configuration.basePath}/challenges/${encodeURIComponent(String(accountName))}/${encodeURIComponent(String(challengeName))}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a challenge
     * Returns the challenge specified
     * @param accountName The name of the account that owns the challenge
     * @param challengeName The name of the challenge
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getChallenge(accountName: string, challengeName: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Challenge>;
    public getChallenge(accountName: string, challengeName: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Challenge>>;
    public getChallenge(accountName: string, challengeName: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Challenge>>;
    public getChallenge(accountName: string, challengeName: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (accountName === null || accountName === undefined) {
            throw new Error('Required parameter accountName was null or undefined when calling getChallenge.');
        }
        if (challengeName === null || challengeName === undefined) {
            throw new Error('Required parameter challengeName was null or undefined when calling getChallenge.');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<Challenge>(`${this.configuration.basePath}/challenges/${encodeURIComponent(String(accountName))}/${encodeURIComponent(String(challengeName))}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List all the challenges
     * Returns all the challenges
     * @param limit Maximum number of results returned
     * @param offset Index of the first result that must be returned
     * @param sort Property used to sort the results that must be returned
     * @param direction Can be either &#x60;asc&#x60; or &#x60;desc&#x60;. Ignored without &#x60;sort&#x60; parameter.
     * @param searchTerms A string of search terms used to filter the results
     * @param tagIds Array of tag ids used to filter the results
     * @param status Array of challenge status used to filter the results
     * @param platformIds Array of challenge platform ids used to filter the results
     * @param startDateRange Return challenges that start during the date range specified
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listChallenges(limit?: number, offset?: number, sort?: 'createdAt' | 'updatedAt', direction?: 'asc' | 'desc', searchTerms?: string, tagIds?: Array<string>, status?: Array<ChallengeStatus>, platformIds?: Array<string>, startDateRange?: DateRange, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<PageOfChallenges>;
    public listChallenges(limit?: number, offset?: number, sort?: 'createdAt' | 'updatedAt', direction?: 'asc' | 'desc', searchTerms?: string, tagIds?: Array<string>, status?: Array<ChallengeStatus>, platformIds?: Array<string>, startDateRange?: DateRange, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<PageOfChallenges>>;
    public listChallenges(limit?: number, offset?: number, sort?: 'createdAt' | 'updatedAt', direction?: 'asc' | 'desc', searchTerms?: string, tagIds?: Array<string>, status?: Array<ChallengeStatus>, platformIds?: Array<string>, startDateRange?: DateRange, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<PageOfChallenges>>;
    public listChallenges(limit?: number, offset?: number, sort?: 'createdAt' | 'updatedAt', direction?: 'asc' | 'desc', searchTerms?: string, tagIds?: Array<string>, status?: Array<ChallengeStatus>, platformIds?: Array<string>, startDateRange?: DateRange, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (limit !== undefined && limit !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>limit, 'limit');
        }
        if (offset !== undefined && offset !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>offset, 'offset');
        }
        if (sort !== undefined && sort !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>sort, 'sort');
        }
        if (direction !== undefined && direction !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>direction, 'direction');
        }
        if (searchTerms !== undefined && searchTerms !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>searchTerms, 'searchTerms');
        }
        if (tagIds) {
            tagIds.forEach((element) => {
                queryParameters = this.addToHttpParams(queryParameters,
                  <any>element, 'tagIds');
            })
        }
        if (status) {
            status.forEach((element) => {
                queryParameters = this.addToHttpParams(queryParameters,
                  <any>element, 'status');
            })
        }
        if (platformIds) {
            platformIds.forEach((element) => {
                queryParameters = this.addToHttpParams(queryParameters,
                  <any>element, 'platformIds');
            })
        }
        if (startDateRange !== undefined && startDateRange !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>startDateRange, 'startDateRange');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<PageOfChallenges>(`${this.configuration.basePath}/challenges`,
            {
                params: queryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
