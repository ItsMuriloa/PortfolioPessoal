export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__content">
        <span className="footer__name">Murilo Alves</span>
        <span className="footer__copy">© {year} — Todos os direitos reservados</span>
        <span className="footer__signature">Desenhado & codificado com dedicação</span>
      </div>
    </footer>
  );
}
