const Footer = () => (
  <footer className="border-t border-border">
    <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p className="font-display">© {new Date().getFullYear()} Sagor's Chemistry Classroom</p>
      <p>Crafted with curiosity — and a little catalysis.</p>
    </div>
  </footer>
);

export default Footer;
