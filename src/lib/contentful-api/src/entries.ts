// ! Copyright (c) 2024, Brandon Ramirez

import _BaseContentfulAPI from "./_BaseContentfulAPI";
import type { Link, LinkTypes } from "./links";
import type { ArrayResponse } from "./other";
import { type Resource, ResourceTypes } from "./resources";

export type Entry<
    EntryType extends string = string,
    FieldMap extends Record<string, unknown> = Record<string, unknown>,
> = Resource<
    ResourceTypes.Entry,
    FieldMap,
    { contentType: Link<LinkTypes.ContentType, EntryType> }
>;

export type _GetEntriesByParamsInput = Record<string, unknown> & {
    contentType?: string;
    limit?: number;
    skip?: number;
    include?: number;
    hasTags?: string | string[] | boolean;
    hasAllTags?: string | string[];
    orderBy?: string | EntryOrderQuerySpec | (string | EntryOrderQuerySpec)[];
};

export interface EntryOrderQuerySpec {
    field: string;
    // Sorts ascending by default
    asc?: boolean;
    desc?: boolean;
}

export interface GetEntriesByParams {
    content_type?: string;
    limit?: number;
    skip?: number;
    include?: number;
    "metadata.tags[exists]"?: boolean;
    "metadata.tags.sys.id[in]"?: string;
    "metadata.tags.sys.id[all]"?: string;
    order?: string;
}

export default class Entries extends _BaseContentfulAPI {
    public static isEntry(obj: unknown): obj is Entry {
        return (
            typeof obj === "object" &&
            (obj as Entry)?.sys?.type === ResourceTypes.Entry
        );
    }

    /**
     * Get a set of entries from the Contentful API with the given
     * input parameters.
     */
    public static getList<EntryType>(
        params: _GetEntriesByParamsInput = {},
    ): Promise<ArrayResponse<EntryType>> {
        return this._Get<never, unknown, ArrayResponse<EntryType>>("/entries", {
            params: this._formatEntryParams(params),
        });
    }

    /**
     * Get a Contentful API entry by its unique ID.
     */
    public static getByID<EntryType>(entryID: string): Promise<EntryType> {
        return this._Get(`/entries/${entryID}`);
    }

    /**
     * Parse the passed-in parameters object into the correct format.
     */
    private static _formatEntryParams({
        contentType,
        hasAllTags,
        hasTags,
        orderBy,
        ...inputParams
    }: _GetEntriesByParamsInput = {}): GetEntriesByParams {
        const resParams: GetEntriesByParams = inputParams;

        if (contentType) {
            resParams.content_type = contentType;
        }

        if (orderBy && !resParams.content_type) {
            console.warn(
                "Contentful cannot return ordered content without setting a content_type.",
            );
        } else if (orderBy) {
            const orderParams: string[] = [];

            const addParam = (param: string | EntryOrderQuerySpec): void => {
                if (typeof param === "string") {
                    orderParams.push(param);
                } else {
                    const isDesc = param.desc === true || param.asc === false;
                    orderParams.push(`${isDesc ? "-" : ""}${param.field}`);
                }
            };

            if (Array.isArray(orderBy)) {
                orderBy.forEach(addParam);
            } else {
                addParam(orderBy);
            }

            let orderParam: string | undefined;

            if (orderParams.length > 1) {
                orderParam = `(${orderParams.join(",")})`;
            } else if (orderParams.length === 1) {
                orderParam = orderParams[0];
            }

            if (orderParam) {
                resParams.order = orderParam;
            }
        }

        if (hasTags) {
            if (typeof hasTags === "boolean") {
                resParams["metadata.tags[exists]"] = hasTags;
            } else if (typeof hasTags === "string") {
                resParams["metadata.tags.sys.id[in]"] = hasTags;
            } else if (Array.isArray(hasTags)) {
                resParams["metadata.tags.sys.id[in]"] = hasTags.join(",");
            }
        }

        if (hasAllTags) {
            if (typeof hasAllTags === "string") {
                resParams["metadata.tags.sys.id[all]"] = hasAllTags;
            } else if (Array.isArray(hasAllTags)) {
                resParams["metadata.tags.sys.id[all]"] = hasAllTags.join(",");
            }
        }

        return resParams;
    }
}
