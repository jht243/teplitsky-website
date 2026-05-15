import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jonathan Teplitsky — Dapper Labs Class Action",
  description:
    "Why Jonathan Teplitsky chose to participate in the class action against Dapper Labs and the Flow Foundation over Flow Token decentralization.",
  openGraph: {
    title: "Jonathan Teplitsky — Dapper Labs Class Action",
    description:
      "Why Jonathan Teplitsky chose to participate in the class action against Dapper Labs over Flow Token decentralization.",
    type: "article",
    authors: ["Jonathan Teplitsky"],
  },
  twitter: {
    card: "summary",
    title: "Jonathan Teplitsky — Dapper Labs Class Action",
    description:
      "Why Jonathan Teplitsky chose to participate in the class action against Dapper Labs over Flow Token decentralization.",
  },
  alternates: {
    canonical: "/dapper-labs-class-action",
  },
};

export default function DapperLabsClassAction() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Jonathan Teplitsky — Dapper Labs Class Action",
    author: {
      "@type": "Person",
      name: "Jonathan Teplitsky",
    },
    description:
      "Why Jonathan Teplitsky chose to participate in the class action against Dapper Labs and the Flow Foundation over Flow Token decentralization.",
    datePublished: "2026-05-15",
    publisher: {
      "@type": "Person",
      name: "Jonathan Teplitsky",
    },
  };

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="flex flex-1 w-full max-w-3xl flex-col py-16 px-6 sm:py-24 sm:px-16 bg-white dark:bg-black">
        <nav className="mb-12">
          <Link
            href="/"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            &larr; Back to Home
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50 mb-4">
            Why Jonathan Teplitsky Chose to Participate in the Dapper Labs Class Action
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            Plaintiff &middot; Proposed Class Representative &middot; Flow
            Token Class Action Lawsuit
          </p>
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              Why I Chose to Participate in This Case
            </h2>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300 mb-6">
              I chose to participate in this case because people who bought and held Flow
              Tokens deserved the truth.
            </p>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300 mb-6">
              Flow was marketed as a decentralized blockchain. Dapper Labs and
              the Flow Foundation told the public that Flow was open,
              decentralized, and controlled by the community. That mattered
              because decentralization is not a side feature of blockchain. It is
              the core promise. People trust a blockchain because they believe
              they are relying on rules, transparency, and cryptography — not the
              discretion of a small group of insiders.
            </p>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              But when Flow was tested, that promise broke.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              The Flow Blockchain Security Incident
            </h2>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300 mb-6">
              In December 2025, the Flow blockchain suffered a security
              incident. An attacker exploited the network, minted fraudulent
              tokens, transferred them across numerous Flow accounts, and
              extracted approximately $3.9 million from the network. More than
              1,000 accounts were contaminated in some way.
            </p>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              What happened next revealed the real issue.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              Centralized Control Over a &ldquo;Decentralized&rdquo; Network
            </h2>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300 mb-6">
              First, the Flow Foundation announced that the network would be
              restored to a checkpoint before the exploit. In plain English, Flow
              would roll back the blockchain and erase transaction history. That
              decision struck at one of the core principles of blockchain:
              immutability.
            </p>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300 mb-6">
              After public backlash, the plan changed. The revised plan gave a
              privileged service account temporary administrative powers to enter
              affected accounts and destroy counterfeit tokens. That meant the
              system could be altered through a centralized administrative
              mechanism.
            </p>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              That is the heart of this case.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              Accountability for Decentralization Claims
            </h2>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300 mb-6">
              If a blockchain can be paused, rolled back, or altered through
              decisions made by a concentrated core team, then users are not
              simply trusting code. They are trusting the people who control the
              system. That is not the same thing as the decentralized,
              community-controlled network that was promoted to the public.
            </p>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300 mb-6">
              This case is not an attack on blockchain. I believe in blockchain.
              But blockchain only works when the public can trust that a network
              is what it claims to be. If a company builds value by telling users
              that its network is decentralized, open, and community-controlled,
              then it should be held accountable when that claim does not match
              reality.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              The Damage to Flow Token Holders
            </h2>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300 mb-6">
              The damage was not theoretical.
            </p>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300 mb-6">
              After the rollback announcement and the governance crisis that
              followed, the price of Flow Token fell more than 40%. The market
              capitalization of Flow lost more than $100 million within hours,
              and losses later surpassed $400 million. The loss of trust was not
              just about the hack itself. It was about governance, control, and
              whether Flow was actually decentralized in the way people had been
              led to believe.
            </p>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              The people hurt by this were not just institutions or insiders.
              Many were ordinary token holders and retail investors. They bought
              into an ecosystem that was promoted as decentralized and
              community-controlled. They did not know that meaningful control
              over the blockchain was concentrated in the hands of a small core
              team.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              Why This Class Action Matters
            </h2>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300 mb-6">
              This is a David-and-Goliath situation: a large blockchain company
              and its related foundation on one side, and thousands of token
              holders on the other. Most people harmed by this would never be
              able to take on that fight alone. A class action gives them a way
              to be heard together.
            </p>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              I chose to participate in this case because someone had to stand up for those
              people.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              A Case About Accountability
            </h2>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              At bottom, this case is about accountability. If a company benefits
              from the language of decentralization, it should have to live by
              the substance of decentralization. And if people were misled into
              trusting a system that was not what it claimed to be, they deserve
              a fair process, a full accounting, and a chance to recover what
              they lost.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
