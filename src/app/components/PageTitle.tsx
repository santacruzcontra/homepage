export function PageTitle({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.HTMLProps<HTMLHeadingElement>>) {
  return (
    <h1
      className={`${className ? className + " " : ""} w-full text-center font-title text-4xl font-bold uppercase tracking-tight sm:text-6xl desktop:text-7xl xl:text-8xl`}
      {...props}
    >
      {children}
    </h1>
  );
}
