// Re-mounts on every navigation, so the fade-in replays per page.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
