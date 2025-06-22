import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        {children}
      </body>
    </html>
  );
}
