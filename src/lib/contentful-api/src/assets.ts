// ! Copyright (c) 2024, Brandon Ramirez

import _BaseContentfulAPI from "./_BaseContentfulAPI";
import { type FileRef } from "./other";
import { type Resource, ResourceTypes } from "./resources";

export type Asset = Resource<
    ResourceTypes.Asset,
    {
        title: string;
        description: string;
        file: FileRef;
    }
>;

export default class Assets extends _BaseContentfulAPI {
    /**
     * If true, the passed-in object is a Contentful API asset.
     */
    public static isAsset(obj: unknown): obj is Asset {
        return (
            typeof obj === "object" &&
            (obj as Asset)?.sys?.type === ResourceTypes.Asset
        );
    }

    /**
     * Get information on a Contentful API asset by its unique ID.
     */
    public static getByID(assetID: string): Promise<Asset> {
        return this._Get(`/assets/${assetID}`);
    }
}
