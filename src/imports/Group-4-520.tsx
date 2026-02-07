import imgRectangle1 from "@/assets/9a8f1ffd6f1cdefbe2baad1889fa9b15c0c7a3ba.webp";
import { imgRectangle } from "./svg-gjirx";

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <div className="absolute inset-[-18.59%_-41.34%_-22.75%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_36.118px] mask-size-[194.289px_194.289px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }}>
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