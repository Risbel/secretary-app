import Navbar from "../navigation/Navbar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="pt-14">{children}</div>
    </div>
  );
}
