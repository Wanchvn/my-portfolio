const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} <span className="text-foreground font-medium">Iddrisu Umar Farouk</span>. Crafted with care in Ghana.
        </p>
        <p className="font-mono text-xs">
          <span className="text-primary">{`</>`}</span> Designed & developed by IUF
        </p>
      </div>
    </footer>
  );
};

export default Footer;
