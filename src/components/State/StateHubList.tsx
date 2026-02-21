import Link from "next/link";
import { StateOption } from "@/data/states";

type Props = {
  states: StateOption[];
};

function StateHubList({ states }: Props) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {states.map((state) => (
        <li key={state.slug}>
          <Link
            href={`/states/${state.slug}`}
            className="block rounded-[10px] border border-[#e5e7eb] px-3 py-2 text-[15px] md:text-[16px] text-black-main hover:border-brand-primary hover:text-brand-primary transition-colors"
          >
            {state.name} drivers ed
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default StateHubList;
