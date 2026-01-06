import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";

export default function PublicationsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-12">
        <h1 className="text-3xl font-semibold md:text-4xl">Publications</h1>
        <p className="mt-4 max-w-2xl text-zinc-700">
          Peer-reviewed and academic work related to intelligent systems and networks.
        </p>

        <div className="mt-10 space-y-6">
          <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="font-medium text-zinc-900">
              Title of Your Research Paper
            </p>
            <p className="mt-1 text-sm text-zinc-600">
              Authors · Journal / Conference · Year
            </p>
            <p className="mt-3 text-sm text-zinc-700">
              Brief description of the problem, approach, and contribution.
            </p>
            <div className="mt-4 flex gap-4 text-sm">
              <a href="#" className="text-indigo-700 hover:text-indigo-800">
                PDF
              </a>
              <a href="#" className="text-indigo-700 hover:text-indigo-800">
                DOI
              </a>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
