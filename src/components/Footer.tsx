export default function Footer() {
  return (
    <footer className="mt-32 pb-8 text-center text-gray-400">
      <p>© {new Date().getFullYear()} Nahom D. Negash. All rights reserved.</p>
      <p className="text-sm mt-2">Built with Next.js & Tailwind CSS</p>
    </footer>
  );
} 