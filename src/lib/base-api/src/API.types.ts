// ! Copyright (c) 2024, Brandon Ramirez

// Fetch options specific to our API class handlers.
export type APIFetchOptions<
	BodyType = unknown,
	ParamType = unknown
> = {
	body?: BodyType;
	baseURL?: string;
	headers?: Record<string, string>;
	method?: string;
	params?: ParamType;
};
