// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { SysTypes, type UniqueID } from "./other";

export enum LinkTypes {
    Content = "Content",
    Asset = "Asset",
    Space = "Space",
    Entry = "Entry",
    Environment = "Environment",
    ContentType = "ContentType",
    Tag = "Tag",
    User = "User",
}

export interface Link<
    Type extends LinkTypes = LinkTypes,
    ID extends string = UniqueID,
> {
    sys: {
        id: ID;
        type: SysTypes.Link;
        linkType: Type;
    };
}

export type AssetLink = Link<LinkTypes.Asset>;
export type EntryLink<EntryType extends string> = Link<
    LinkTypes.Entry,
    EntryType
>;
export type TagLink = Link<LinkTypes.Tag>;

export default class Links {
    /**
     * If true, the passed-in object is a Contentful API link.
     */
    public static isLink(obj: unknown): obj is Link {
        return (
            typeof obj === "object" &&
            (obj as Link)?.sys?.id !== undefined &&
            (obj as Link)?.sys?.type === SysTypes.Link &&
            (obj as Link)?.sys?.linkType in LinkTypes
        );
    }

    /**
     * Gets the link type from a Contentful API link object.
     */
    public static getLinkType(obj: Link): LinkTypes | void {
        if (this.isLink(obj)) {
            return obj.sys.linkType;
        }
    }

    /**
     * Gets the unique ID from a Contentful API link object.
     */
    public static getLinkID(obj: Link): string | undefined {
        if (this.isLink(obj)) {
            return obj.sys.id;
        }
    }
}
