import "./globals.css";

export const metadata = {
  title: "MERN Job Board",
  description: "Job board app built with the MERN stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-slate-800 text-white p-4 flex justify-between items-center">
          <a href="/" className="font-bold text-xl">Job Board</a>
          <a href="/jobs/new" className="btn" >Post Job</a>
        </nav>
        <main className="container m-auto p-5">
          {children}
        </main>
      </body>
    </html>
  );
}
