import React from "react";
import Wrapper from "@/components/Shared/ComponentWrapper/Wrapper";
import { HOMEPAGE_FAQS } from "@/data/faqs";

export default function Faqs() {
  return (
    <Wrapper styles="bg-brand-surface py-12 md:py-24">
      <div id="faqs" className="mx-auto max-w-3xl">
        <p className="section-kicker text-center">Questions, answered</p>
        <h2 className="mt-3 text-center font-poppins text-[28px] font-semibold leading-tight text-brand-navy md:text-[42px]">
          Know before you enroll
        </h2>
        <div className="mt-8 space-y-3">
          {HOMEPAGE_FAQS.map(({ question, answer }) => (
            <details key={question} className="card-surface group p-4 sm:p-5">
              <summary className="cursor-pointer list-none pr-8 font-poppins text-[17px] font-semibold text-brand-ink">
                {question}
              </summary>
              <p className="mt-3 border-t border-brand-line pt-3 leading-7 text-brand-muted">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
