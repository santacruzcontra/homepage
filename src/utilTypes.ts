export type OptionalKeys<
  BaseType extends Record<string, unknown>,
  Keys extends string,
> = Omit<BaseType, Keys> & Partial<Pick<BaseType, Keys>>;
