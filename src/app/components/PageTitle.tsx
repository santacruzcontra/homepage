export function PageTitle({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.HTMLProps<HTMLHeadingElement>>) {
  return (
    <h1
      className={`${className ? className + " " : ""} font-title w-full text-center text-4xl min-[525px]:text-5xl sm:text-6xl desktop:text-7xl xl:text-8xl`}
      {...props}
    >
      {children}
    </h1>
  );
}
