export type OptionalKeys<
  BaseType extends Record<string, unknown>,
  Keys extends keyof BaseType,
> = Omit<BaseType, Keys> & Partial<Pick<BaseType, Keys>>;

export type RequiredKeys<
  BaseType extends Record<string, unknown>,
  Keys extends keyof BaseType,
> = Omit<BaseType, Keys> & Required<Pick<BaseType, Keys>>;
