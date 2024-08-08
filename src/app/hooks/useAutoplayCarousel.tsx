import {
  type Dispatch,
  type MutableRefObject,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { type CarouselApi } from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export type UseAutoplayCarouselParams = Parameters<typeof Autoplay>[0];

export function useAutoplayCarousel({
  playOnInit = false,
  stopOnInteraction = false,
  delay = 6500,
  ...params
}: UseAutoplayCarouselParams = {}): [
  api: CarouselApi,
  setAPI: Dispatch<SetStateAction<CarouselApi>>,
  autoplayPlugin: MutableRefObject<ReturnType<typeof Autoplay>>,
] {
  const [api, setAPI] = useState<CarouselApi>();

  const autoplayPlugin = useRef(
    Autoplay({ playOnInit, stopOnInteraction, delay, ...params }),
  );

  useEffect(() => {
    if (api) {
      const resetAutoplayTimer = () => {
        autoplayPlugin.current?.reset();
      };

      api.on("select", resetAutoplayTimer);
      return () => {
        api.off("select", resetAutoplayTimer);
      };
    }
  }, [api]);

  return [api, setAPI, autoplayPlugin];
}