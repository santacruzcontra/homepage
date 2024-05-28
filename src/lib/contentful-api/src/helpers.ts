// ! Copyright (c) 2024, Brandon Ramirez

import { type Asset } from "./assets";
import { type ArrayResponse, SysTypes } from "./other";

export function isArrayResponse<ResourceType>(
  obj: unknown,
): obj is ArrayResponse<ResourceType> {
  return (
    typeof obj === "object" &&
    (obj as ArrayResponse<ResourceType>)?.sys?.type === SysTypes.Array
  );
}

export function isImage(asset: Asset): boolean {
  return asset.fields.file.contentType.indexOf("image") >= 0;
}
