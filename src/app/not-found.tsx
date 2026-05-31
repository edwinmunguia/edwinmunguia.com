import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "72px 24px" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
        404
      </p>
      <h1 style={{ fontSize: 32, fontWeight: 600, color: "#fff", marginBottom: 16, letterSpacing: "-0.02em" }}>
        Page not found.
      </h1>
      <Link href="/" style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted)" }}>
        ← Back home
      </Link>
    </div>
  );
}
