import Footer from "../footer/Footer";
import Header from "../header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Header />
      <main className="w-full max-w-screen-md flex-grow mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
