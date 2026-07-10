import Head from "next/head";
import Link from "next/link";
import { FiAlertTriangle, FiArrowRight, FiHome, FiMapPin } from "react-icons/fi";
import { STATES_OF_UNITED } from "@/data/states";

const FEATURED_STATES = ["california", "texas", "florida", "new-york"];

function NotFoundPage() {
  const featuredStates = STATES_OF_UNITED.filter((state) =>
    FEATURED_STATES.includes(state.slug)
  );

  return (
    <div className="page-shell">
      <Head>
        <title>Page Not Found | DriversEdDepot</title>
        <meta
          name="description"
          content="The requested DriversEdDepot page could not be found. Choose a state course guide or return home."
        />
        <meta name="robots" content="noindex,follow" />
      </Head>

      <section className="grid gap-8 lg:grid-cols-[1fr,360px] lg:items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-[14px] font-semibold text-red-700">
            <FiAlertTriangle aria-hidden="true" />
            404 error
          </div>
          <h1 className="mt-5 max-w-3xl font-poppins text-[36px] font-semibold leading-tight text-brand-navy md:text-[54px]">
            We could not find that page.
          </h1>
          <p className="mt-4 max-w-2xl text-[17px] leading-8 text-brand-muted md:text-[19px]">
            The URL may be misspelled, outdated, or no longer available. Use one of the links
            below to get back to the course information you were looking for.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="btn-primary gap-2">
              <FiHome aria-hidden="true" />
              Back to home
            </Link>
            <Link href="/states-online-drivers-ed" className="btn-secondary gap-2">
              Browse state guides
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <aside className="rounded-[16px] border border-brand-line bg-brand-surface p-5">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white-main text-brand-primary">
              <FiMapPin aria-hidden="true" size={22} />
            </span>
            <div>
              <h2 className="font-poppins text-[20px] font-semibold text-brand-ink">
                Popular states
              </h2>
              <p className="text-[14px] text-brand-muted">Jump to a valid state page.</p>
            </div>
          </div>

          <ul className="mt-5 space-y-2">
            {featuredStates.map((state) => (
              <li key={state.slug}>
                <Link
                  href={`/states/${state.slug}`}
                  className="flex min-h-[44px] items-center justify-between rounded-[10px] border border-brand-line bg-white-main px-3 text-[15px] font-semibold text-brand-ink hover:border-brand-primary hover:text-brand-primary"
                >
                  {state.name}
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  );
}

export default NotFoundPage;
