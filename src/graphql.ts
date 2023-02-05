
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class HelloWorldResponse {
    message?: Nullable<string>;
}

export abstract class IQuery {
    abstract helloWorld(): Nullable<HelloWorldResponse> | Promise<Nullable<HelloWorldResponse>>;
}

type Nullable<T> = T | null;
