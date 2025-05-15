export const metadata = {
  title: "Consultoria Farmacêutica",
  description: "Serviços farmacêuticos online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
