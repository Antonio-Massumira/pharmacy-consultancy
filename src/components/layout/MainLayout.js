import Navbar from "./Navbar";
import "@/app/globals.css"

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-blue-800 text-white py-4 text-center">
        &copy; {new Date().getFullYear()} Arubeia. Todos os direitos reservados.
      </footer>
    </div>
  );
}
