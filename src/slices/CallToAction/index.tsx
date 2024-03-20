import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import LogoCrop from "@/components/LogoCrop";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative text-balance py-32 text-center font-medium md:py-40"
    >
      <div className="glow absolute -z-10 aspect-auto w-full max-w-sm rounded-full bg-blue-500/50 blur-[160px] filter" />
      <div className="glass-container-oval rounded-full p-1 max-w-32 md:rounded-full">
        <LogoCrop />
      </div>
      <div className="mt-8 max-w-xl text-5xl">
        <PrismicText field={slice.primary.heading} />
      </div>
      <ButtonLink field={slice.primary.button_link} className="mt-6">
        {slice.primary.button_text || "Learn more"}
      </ButtonLink>
    </Bounded>
  );
};

export default CallToAction;
