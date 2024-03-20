import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import StarGrid from "@/components/StarGrid";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
      <div className="relative">
        <StarGrid />
        {isFilled.richText(slice.primary.heading) && (
          <h1 className="flex text-balance text-center text-3xl font-medium md:text-6xl md:leading-snug">
            <PrismicRichText
              field={slice.primary.heading}
              components={{
                heading2: ({ children }) => (
                  <h2 className="max-w-3xl text-balance text-center text-5xl font-medium md:text-7xl ">
                    {children}
                  </h2>
                ),
                em: ({ children }) => (
                  <em className="bg-gradient-to-b from-red-500 to-blue-600 bg-clip-text font-black not-italic text-transparent">
                    {children}
                  </em>
                ),
              }}
            />
          </h1>
        )}
        {isFilled.richText(slice.primary.body) && (
          <div className="mx-auto mt-6 max-w-lg text-balance text-slate-300">
            <PrismicRichText field={slice.primary.body} />
          </div>
        )}
        {isFilled.link(slice.primary.buttonlink) && (
          <div className="mx-auto mt-6 max-w-lg text-balance text-slate-300">
            <ButtonLink className="mt-6" field={slice.primary.buttonlink}>
              {slice.primary.button_label}
            </ButtonLink>
          </div>
        )}
        {isFilled.image(slice.primary.image) && (
          <div className="glass-container mt-16 w-fit">
            <div className="absolute inset-0 -z-10 bg-blue-500/40 blur-3xl filter" />
            <PrismicNextImage
              className="rounded-lg"
              field={slice.primary.image}
            />
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default Hero;
