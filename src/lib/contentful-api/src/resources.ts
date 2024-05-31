// ! Copyright (c) 2024, Brandon Ramirez

import type { Environment, Metadata, Space, UniqueID } from "./other";

export enum ResourceTypes {
  Asset = "Asset",
  Entry = "Entry",
  Tag = "Tag",
}

export interface Resource<
  ResourceType extends ResourceTypes = ResourceTypes,
  FieldMap extends Record<string, unknown> = Record<string, unknown>,
  ExtraSysData = Record<string, never>,
  OmitFields extends string = never,
> {
  metadata: Metadata;
  sys: Omit<
    {
      type: ResourceType;
      id: UniqueID;
      space: Space;
      environment: Environment;
      revision: number;
      createdAt: string;
      updatedAt: string;
      locale: "en-US";
    },
    OmitFields
  > &
    ExtraSysData;
  fields: FieldMap;
}
