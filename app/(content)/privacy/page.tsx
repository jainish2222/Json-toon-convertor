import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo/buildMetadata";

export const metadata = buildMetadata({
  title: "Privacy",
  description:
    "Privacy policy for JSON to TOON. Your data never leaves your browser.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Container className="max-w-3xl py-14">
      <h1 className="text-3xl font-bold tracking-tight text-green-500  dark:text-green-600">
        Privacy Policy
      </h1>

      <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-400">
        Your privacy is important to us. JSON to TOON is designed with a
        privacy-first approach. All JSON conversion and compression happens
        locally in your browser, ensuring your data remains under your control.
      </p>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Local Processing
          </h2>
          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            JSON to TOON performs all processing directly in your browser.
            Uploaded or pasted JSON is never sent to our servers, stored in the
            cloud, or shared with third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            No Data Collection
          </h2>
          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            We do not collect, store, or analyze the content of the JSON you
            convert. Your files and text remain on your device throughout the
            conversion process.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Local Storage
          </h2>
          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            If you choose to use the History feature, recent conversions are
            saved only in your browser's local storage. This data never leaves
            your device and can be cleared at any time by deleting your browser
            data or using the application's clear history option.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Cookies
          </h2>
          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            JSON to TOON does not use cookies to store your conversion data.
            Essential browser storage may be used for preferences such as theme
            selection or application settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Third-Party Services
          </h2>
          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            We may use privacy-friendly analytics or hosting providers to
            improve the application. These services never receive the JSON data
            you process within the tool.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Data Security
          </h2>
          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            Because your data stays in your browser, the risk of server-side
            exposure is greatly reduced. However, you remain responsible for
            protecting your own device and browser environment.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Changes to This Policy
          </h2>
          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            This Privacy Policy may be updated from time to time to reflect
            changes in the application or legal requirements. Any updates will
            be published on this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Contact
          </h2>
          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            If you have any questions regarding this Privacy Policy or how JSON
            to TOON handles your data, please contact us through the support
            page.
          </p>
        </section>
      </div>

      <div className="mt-12 rounded-xl border border-neutral-200 bg-green-500/30 dark:bg-green-500/40 p-6 dark:border-neutral-800">
        <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
          <strong className="text-neutral-900 dark:text-neutral-100 ">
            Privacy Promise:
          </strong>{" "}
          Your JSON is processed locally in your browser. We do not upload,
          inspect, store, or sell your data. Your information stays on your
          device unless you explicitly choose to share it elsewhere.
        </p>
      </div>
    </Container>
  );
}