import PortfolioGuide from "../components/PortfolioGuide";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p>© {new Date().getFullYear()} Kartikeya Singh</p>
        <div className="footer-actions">
          <PortfolioGuide />
          <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  );
}
