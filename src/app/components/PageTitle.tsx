export function PageTitle({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.HTMLProps<HTMLHeadingElement>>) {
  return (
    <h1
      className={`${className ? className + " " : ""} w-full text-center font-title text-4xl sm:text-6xl xl:text-8xl desktop:text-7xl [@media(min-width:525px)]:text-5xl`}
      {...props}
    >
      {children}
    </h1>
  );
}
