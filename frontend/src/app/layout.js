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
          <span className="font-bold text-xl">Job Board</span>
          <button className="bg-purple-700 p-2 rounded" >Post Job</button>
        </nav>
        <main className="container m-auto p-5">
          {children}
        </main>
      </body>
    </html>
  );
}
