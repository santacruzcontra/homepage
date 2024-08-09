// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { type APIFetchOptions } from "./API.types";

/**
 * Base class that wraps the fetch method with a bit of generic typing.
 */
export class API {
    // Standard HTTP method constants.
    public static METHOD_GET = "GET";
    public static METHOD_HEAD = "HEAD";
    public static METHOD_POST = "POST";
    public static METHOD_PUT = "PUT";
    public static METHOD_DELETE = "DELETE";
    public static METHOD_CONNECT = "CONNECT";
    public static METHOD_OPTIONS = "OPTIONS";
    public static METHOD_TRACE = "TRACE";

    // Private base URL for API calls. Override on subclasses.
    protected static BASE_URL = "";

    /**
     * A wrapper around the Fetch API that builds your URL based on your API class
     * data, and process your response data as JSON, then resolves to that result.
     */
    public static async _Fetch<
        BodyType = unknown,
        ParamType = unknown,
        ResponseType = unknown,
    >(
        path: string,
        {
            params,
            baseURL,
            ...fetchOpts
        }: APIFetchOptions<BodyType, ParamType> = {},
    ): Promise<ResponseType> {
        const url = this._GetURL<ParamType>(path, params, baseURL);

        try {
            // Run our fetch request
            const response = await fetch(url, fetchOpts as RequestInit);
            return response.json() as Promise<ResponseType>; // For now, just expect JSON
        } catch (err) {
            // Log out the error
            // TODO add a config check to see if logging is enabled, or do this with a logger class
            console.error(
                "The following API request was unsuccessful and returned this error:",
            );
            console.log("URL:", url);
            console.log("FETCH OPTS:", fetchOpts);
            console.error(err);

            // We catch the error for logging purposes, now throw it again
            throw err;
        }
    }

    /**
     * A wrapper around the fetch method that defaults the HTTP method to GET.
     */
    public static _Get<
        BodyType = void, // "GET" requests usually don't have a body.
        ParamType = unknown,
        ResponseType = unknown,
    >(path: string, apiFetchOpts: APIFetchOptions<BodyType, ParamType> = {}) {
        apiFetchOpts.method = API.METHOD_GET;
        return this._Fetch<BodyType, ParamType, ResponseType>(
            path,
            apiFetchOpts,
        );
    }

    /**
     * A wrapper around the fetch method that defaults the HTTP method to POST
     * and formats the passed-in body object for sending.
     */
    public static _Post<
        BodyType = unknown,
        ParamType = unknown,
        ResponseType = unknown,
    >(
        path: string,
        body?: BodyType,
        apiFetchOpts: APIFetchOptions<BodyType, ParamType> = {},
    ) {
        apiFetchOpts.method = API.METHOD_POST;
        if (body) apiFetchOpts.body = body;

        this._FormatFetchBody(apiFetchOpts);

        return this._Fetch<BodyType, ParamType, ResponseType>(
            path,
            apiFetchOpts,
        );
    }

    /**
     * A wrapper around the fetch method that defaults the HTTP method to PUT
     * and formats the passed-in body object for sending.
     */
    public static _Put<
        BodyType = unknown,
        ParamType = unknown,
        ResponseType = unknown,
    >(
        path: string,
        body?: BodyType,
        apiFetchOpts: APIFetchOptions<BodyType, ParamType> = {},
    ) {
        apiFetchOpts.method = API.METHOD_PUT;
        if (body) apiFetchOpts.body = body;

        this._FormatFetchBody(apiFetchOpts);

        return this._Fetch<BodyType, ParamType, ResponseType>(
            path,
            apiFetchOpts,
        );
    }

    /**
     * Run a DELETE request with the Fetch API.
     */
    public static _Delete<
        BodyType = void, // "DELETE" requests generally shouldn't have a body.
        ParamType = unknown,
        ResponseType = void, // They also should usually return empty.
    >(path: string, apiFetchOpts: APIFetchOptions<BodyType, ParamType> = {}) {
        apiFetchOpts.method = API.METHOD_DELETE;
        return this._Fetch<BodyType, ParamType, ResponseType>(
            path,
            apiFetchOpts,
        );
    }

    /**
     * Build a URL string based on the given inputs.
     */
    protected static _GetURL<ParamType = unknown>(
        path: string,
        params?: ParamType,
        baseURL: string = this.BASE_URL,
    ): string {
        // Make sure the path begins with a "/".
        if (!path.startsWith("/")) path = `/${path}`;

        // Since path has the slash, base URL should not.
        if (baseURL.charAt(-1) === "/") baseURL = baseURL.slice(0, -1);

        // Stringify our params, if any.
        const paramStr = params
            ? `?${new URLSearchParams(params).toString()}`
            : "";

        // Return our URL parts as a composed URL string.
        return `${baseURL}${path}${paramStr}`;
    }

    /**
     * Process the passed-in data object for use as the body of our fetch request.
     */
    protected static _FormatFetchBody<BodyType = unknown, ParamType = unknown>(
        fetchOpts: APIFetchOptions<BodyType, ParamType> = {},
    ): void {
        if (fetchOpts.body && typeof fetchOpts.body !== "string") {
            // Cast as "body type" since `string` won't overlap.
            fetchOpts.body = JSON.stringify(fetchOpts.body) as BodyType;

            // Set the JSON content type header as well.
            fetchOpts.headers ??= {};
            fetchOpts.headers["Content-type"] = "application/json";
        }
    }
}
