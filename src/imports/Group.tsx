import imgRectangle1 from "@/assets/b1d2456dd2d3fd263007a84425e37bd99e2f19fa.webp";
import { imgRectangle } from "./svg-zax6u";

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[389.835px_385.375px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}