import "./globals.css";
import Header from "@/components/Header"; // Import the new Header

export const metadata = {
  title: "InnovateWeb - AI Powered Website Builder",
  description: "Create stunning websites in minutes with the power of AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Use the new Header Component */}
        <Header />

        {/* Main Content */}
        <main className="pt-20">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-800 text-white mt-16">
          <div className="container mx-auto px-6 py-8 text-center">
            <p>© {new Date().getFullYear()} InnovateWeb. All Rights Reserved.</p>
            <p className="mt-2">
              <a href="mailto:info@innovateweb.online" className="text-blue-400 hover:underline">info@innovateweb.online</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}