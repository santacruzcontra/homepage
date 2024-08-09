// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { env } from "~/env";
import { type ContentfulAPIFetchOptions } from "./other";
import { API } from "~/lib/base-api/src/API";

export default class _BaseContentfulAPI extends API {
    protected static BASE_URL = env.CONTENTFUL_API_BASE_URL;
    private static SPACE_ID = env.CONTENTFUL_API_SPACE_ID;
    private static ACCESS_TOKEN = env.CONTENTFUL_API_ACCESS_TOKEN;
    private static ENVIRONMENT = env.CONTENTFUL_API_ENVIRONMENT;

    /**
     * Call the base API.GetURL with the proper base URL.
     */
    public static _GetURL<ParamType = unknown>(
        path: string,
        params: ParamType,
        baseURL = `${this.BASE_URL}/spaces/${this.SPACE_ID}/environments/${this.ENVIRONMENT}/`,
    ) {
        return super._GetURL<ParamType>(path, params, baseURL);
    }

    /**
     * On the fetch method for the Assembla API, make sure we're adding in
     * the proper auth param from our ENV in order to access the API data.
     */
    public static _Fetch<
        BodyType = unknown,
        ParamType = unknown,
        ResponseType = unknown,
    >(
        path: string,
        {
            includeAuthToken = true,
            params = {} as ParamType,
            ...fetchOpts
        }: ContentfulAPIFetchOptions<BodyType, ParamType> = {},
    ) {
        if (includeAuthToken) {
            Object.assign(params as object, {
                access_token: this.ACCESS_TOKEN,
            });
        }

        return super._Fetch<BodyType, ParamType, ResponseType>(path, {
            params,
            ...fetchOpts,
        });
    }

    /* Override these to provide better options object typing. */

    public static _Get<
        BodyType = never,
        ParamType = unknown,
        ResponseType = unknown,
    >(
        path: string,
        apiFetchOpts: ContentfulAPIFetchOptions<BodyType, ParamType> = {},
    ) {
        return super._Get<BodyType, ParamType, ResponseType>(
            path,
            apiFetchOpts,
        );
    }

    public static _Post<
        BodyType = unknown,
        ParamType = unknown,
        ResponseType = unknown,
    >(
        path: string,
        body?: BodyType,
        apiFetchOpts: ContentfulAPIFetchOptions<BodyType, ParamType> = {},
    ) {
        return super._Post<BodyType, ParamType, ResponseType>(
            path,
            body,
            apiFetchOpts,
        );
    }

    public static _Put<
        BodyType = unknown,
        ParamType = unknown,
        ResponseType = unknown,
    >(
        path: string,
        body?: BodyType,
        apiFetchOpts: ContentfulAPIFetchOptions<BodyType, ParamType> = {},
    ) {
        return super._Put<BodyType, ParamType, ResponseType>(
            path,
            body,
            apiFetchOpts,
        );
    }

    public static _Delete<
        BodyType = void,
        ParamType = unknown,
        ResponseType = void,
    >(
        path: string,
        apiFetchOpts: ContentfulAPIFetchOptions<BodyType, ParamType> = {},
    ) {
        return super._Delete<BodyType, ParamType, ResponseType>(
            path,
            apiFetchOpts,
        );
    }
}
