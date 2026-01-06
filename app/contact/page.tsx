import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-10">
        <h1 className="text-3xl font-semibold md:text-4xl">Contact</h1>
        <p className="mt-3 text-zinc-700">
          If the work matches what you’re hiring for, email is best.
        </p>

        <div className="mt-8 rounded-2xl border border-zinc-200 p-5">
          <p className="text-sm font-medium text-zinc-900">Email</p>
          <a
            href="mailto:nitinsinghrathore97522@gmail.com"
            className="mt-2 block text-sm text-zinc-700 underline underline-offset-4 hover:text-zinc-900"
          >
            nitinsinghrathore97522@gmail.com
          </a>

          <div className="mt-6 space-y-2 text-sm">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="block underline underline-offset-4 hover:text-zinc-700"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="block underline underline-offset-4 hover:text-zinc-700"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
