import React from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ className, wrapperClassName, ...props }) => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <div className={cn("overflow-hidden rounded-md bg-muted", wrapperClassName)}>
      <img
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
