export function PageTitle({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.HTMLProps<HTMLHeadingElement>>) {
  return (
    <h1
      className={`${className ? className + " " : ""} font-title w-full text-center text-4xl sm:text-5xl md:text-6xl desktop:text-7xl xl:text-8xl`}
      {...props}
    >
      {children}
    </h1>
  );
}
