import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";

export default function CertificatesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-12">
        <h1 className="text-3xl font-semibold md:text-4xl">Certificates</h1>
        <p className="mt-4 max-w-2xl text-zinc-700">
          Selected certifications relevant to software engineering and cloud systems.
        </p>

        <ul className="mt-10 space-y-4 text-zinc-700">
          <li>• AWS Cloud Practitioner</li>
          <li>• Machine Learning Specialization (Coursera)</li>
          <li>• Data Structures & Algorithms (Platform)</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
