export function PageTitle({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.HTMLProps<HTMLHeadingElement>>) {
  return (
    <h1
      className={`${className ? className + " " : ""} xs:text-5xl w-full text-center font-title text-4xl sm:text-6xl xl:text-8xl desktop:text-7xl`}
      {...props}
    >
      {children}
    </h1>
  );
}
