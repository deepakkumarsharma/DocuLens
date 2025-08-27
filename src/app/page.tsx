import Link from "next/link";

import Header from "@/components/global/Header";

import { Button } from "@/components/ui/button";

const SECTION_ONE = () => {
  return (
    <div className="border-bottom-only">
      <div className="container padding-x">
        <div className="border-left-split" />
        <div className="border-right-split" />
        <div className="w-full block md:grid grid-cols-2 grid-rows-1">
          <div className="py-10 md:pt-10">
            <div className="mt-4 text-2xl lg:text-4xl/[140%] font-bold">
              Unlock Knowledge with{" "}
              <span className="text-[var(--text-primary)]">
                AI-Powered PDF Analysis
              </span>
            </div>
            <div className="text-base mt-4 mb-10">
              DocuLens reads your PDFs, answers your questions instantly, and
              exports results effortlessly.
            </div>
            <div className="flex gap-4">
              <Link href="/dashboard">
                <Button variant="outline" className="cursor-pointer">
                  Get Started
                </Button>
              </Link>
              <Button>Learn More</Button>
            </div>
          </div>
          <div className="my-8 hidden md:block">
            <div className="bg-[url('/landing-page-illustrate/ReadNotesIllustration.svg')] bg-contain bg-center bg-no-repeat w-full h-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SECTION_TWO = () => {
  return (
    <div className="border-bottom-only">
      <div className="container padding-x border-x">
        <div className="pt-8 text-2xl md:text-4xl font-light">
          Empowering Knowledge Seekers
        </div>
        <div className="py-6 text-sm md:text-base text-pretty">
          A leading research team uses DocuLens to extract answers from academic
          papers, saving hours and enabling seamless collaboration with
          exported, annotated PDFs.
        </div>
      </div>
    </div>
  );
};

const SECTION_THREE = () => {
  return (
    <div className="border-bottom-only">
      <div className="container margin-x">
        <div className="grid grid-cols-2 border-x border-y ">
          <div className="p-10 bg-white">
            <div className="bg-[url('/landing-page-illustrate/WebsiteBuilderIllustration.svg')] bg-contain bg-center bg-no-repeat w-full h-60" />
            <div className="pt-8 pb-3 text-2xl font-semibold">
              Research: Accelerate Discovery
            </div>
            <div className="">
              Instantly query complex PDFs to uncover key findings and export
              annotated results for sharing. Read Case Study
            </div>
          </div>
          <div className="p-10 bg-white">
            <div className="bg-[url('/landing-page-illustrate/AddFileIllustration.svg')] bg-contain bg-center bg-no-repeat w-full h-60" />
            <div className="pt-8 pb-3 text-2xl font-semibold">
              Business: Streamline Insights
            </div>
            <div>
              Extract critical insights from reports and export PDFs with
              embedded answers for presentations. Read Case Study
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SECTION_FOUR = () => {
  return (
    <div className="border-bottom-only">
      <div className="container padding-x border-x">
        <div className="pt-8 text-2xl md:text-4xl font-light">
          Streamlining Business Decisions
        </div>
        <div className="py-6 text-sm md:text-base text-pretty">
          A corporate analyst uses DocuLens to instantly query financial
          reports, extracting key insights and exporting annotated PDFs for
          stakeholder presentations.
        </div>
      </div>
    </div>
  );
};

const SECTION_FIVE = () => {
  return (
    <div className="border-bottom-only">
      <div className="container">
        <div className="border-left-split" />
        <div className="border-right-split" />
        <div className="grid grid-cols-2 grid-rows-1 items-center py-10 md:pt-10">
          <div className="bg-[url('/landing-page-illustrate/OnlineTestIllustration.svg')] bg-contain bg-center bg-no-repeat w-full h-80" />
          <div>
            <div className="my-4 text-2xl lg:text-4xl font-bold">
              Effortless Analysis, Simplified
            </div>
            <div>
              <ul>
                <li>
                  <span className="text-[var(--text-primary)]">
                    Instant Setup:
                  </span>{" "}
                  Upload your PDF and start asking questions in seconds.
                </li>
                <li>
                  <span className="text-[var(--text-primary)]">
                    Smart Answers:
                  </span>{" "}
                  Get precise, context-aware responses powered by advanced AI.
                </li>
                <li>
                  <span className="text-[var(--text-primary)]">
                    Export with Ease:
                  </span>{" "}
                  Download PDFs with embedded answers for archiving or sharing.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <SECTION_ONE />
        <SECTION_TWO />
        <SECTION_THREE />
        <SECTION_FOUR />
        <SECTION_FIVE />
      </main>
    </div>
  );
}
