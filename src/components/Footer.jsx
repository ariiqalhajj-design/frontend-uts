function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {tahun} Sistem Registrasi Siswa. All rights reserved.</p>
    </footer>
  );
}

export default Footer;