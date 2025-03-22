import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


export const metadata = {
  title: "Công ty tnhh máy văn phòng siêu việt",
  description: "Ứng dụng React với Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Thêm favicon */}
        <link rel="icon" href="/logo.png"type="image/png" />
      </head>
      <body>
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
