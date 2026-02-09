import { Link } from "react-router-dom";
import { FileText, Download, Calendar, ArrowRight } from "lucide-react";

type FeaturedWhitePaperProps = {
  title: string;
  version: string;
  date: string;
  pages: string;
  readingTime: string;
  abstract: string;
  bullets: string[];
  slug: string;
  pdfHref?: string; // optional, if you have direct download
};

export function FeaturedWhitePaper(props: FeaturedWhitePaperProps) {
  const {
    title,
    version,
    date,
    pages,
    readingTime,
    abstract,
    bullets,
    slug,
    pdfHref
  } = props;

  return (
    <section className="mb-[10vh] md:mb-[14vh]">
      <div className="bg-white border-2 border-[#e0e0e0] rounded-3xl p-[4vh] md:p-[6vh] lg:p-[8vh]">
        {/* Header */}
        <div className="flex flex-col gap-[3vh]">
          {/* Icon and Badge */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#026448]/10 flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 md:w-7 md:h-7 text-[#026448]" />
            </div>

            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEFF41]/30 rounded-full">
                <span
                  className="text-[#026448] uppercase tracking-wider"
                  style={{ fontSize: "clamp(0.7rem, 0.85vw, 0.9rem)", fontWeight: 700 }}
                >
                  Featured white paper
                </span>
              </div>
            </div>
          </div>

          {/* Title and Abstract */}
          <div className="w-full">
            <h3
              className="text-[#1a1a1a] leading-[1.15] mb-[2vh]"
              style={{ fontSize: "clamp(1.8rem, 2.4vw, 3rem)", fontWeight: 750, letterSpacing: "-0.02em" }}
            >
              {title}
            </h3>

            <p
              className="text-[#4a4a4a] leading-[1.7] w-full"
              style={{ fontSize: "clamp(1rem, 1.15vw, 1.35rem)", fontWeight: 400 }}
            >
              {abstract}
            </p>
          </div>

          {/* Meta */}
          <div className="w-full">
            <div className="w-full md:inline-block md:w-auto px-4 py-3 bg-[#f6f6f6] rounded-2xl">
              <div className="flex flex-col gap-2">
                <p className="text-[#666]" style={{ fontSize: "clamp(0.85rem, 0.95vw, 1.05rem)", fontWeight: 600 }}>
                  {version}
                </p>
                <div className="flex items-center gap-2 text-[#666]" style={{ fontSize: "clamp(0.85rem, 0.95vw, 1.05rem)" }}>
                  <Calendar className="w-4 h-4" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center gap-2 text-[#666]" style={{ fontSize: "clamp(0.85rem, 0.95vw, 1.05rem)" }}>
                  <span>{pages}</span>
                  <span>•</span>
                  <span>{readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#eaeaea] my-[4vh]" />

        {/* Contents and CTA row */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-[4vh] md:gap-[3vw]">
          {/* What's inside */}
          <div className="w-full md:col-span-8">
            <p className="text-[#026448] uppercase tracking-[0.14em] mb-[2vh]"
              style={{ fontSize: "clamp(0.75rem, 0.9vw, 0.9rem)", fontWeight: 750 }}>
              What's inside
            </p>

            <ul className="space-y-3 w-full">
              {bullets.slice(0, 5).map((b, i) => (
                <li key={i} className="text-[#1a1a1a] leading-[1.6] w-full"
                  style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.25rem)", fontWeight: 450 }}>
                  • {b}
                </li>
              ))}
            </ul>
          </div>

          {/* CTAs */}
          <div className="w-full md:col-span-4 flex flex-col gap-3">
            <Link
              to={`/research/${slug}`}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#026448] text-white rounded-full hover:bg-[#035039] transition-colors"
              style={{ fontSize: "clamp(0.95rem, 1.05vw, 1.2rem)", fontWeight: 700 }}
            >
              <ArrowRight className="w-4 h-4" />
              Open summary
            </Link>

            {pdfHref ? (
              <a
                href={pdfHref}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#026448] text-[#026448] rounded-full hover:bg-[#026448]/5 transition-colors font-ui"
                style={{ fontSize: "clamp(0.95rem, 1.05vw, 1.2rem)", fontWeight: 700 }}
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            ) : (
              <a
                href="mailto:tutki@ripeswitch.com?subject=Request%20Featured%20White%20Paper%20PDF"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#e0e0e0] text-[#1a1a1a] rounded-full hover:border-[#026448] transition-colors font-ui"
                style={{ fontSize: "clamp(0.95rem, 1.05vw, 1.2rem)", fontWeight: 650 }}
              >
                Request PDF
              </a>
            )}

            <p className="text-[#666] text-left md:text-right w-full" style={{ fontSize: "clamp(0.85rem, 0.95vw, 1.05rem)", fontWeight: 400 }}>
              Some appendices may be shared under NDA depending on partner stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
