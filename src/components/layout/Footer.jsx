export default function Footer() {
  return (
    <footer className="w-full py-8 bg-dark-800 border-t border-dark-600/50">
      <div className="section-container text-center">
        <p className="text-text-muted">
          © {new Date().getFullYear()} Created by Yen-Ting Chou. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
