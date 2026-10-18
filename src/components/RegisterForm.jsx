import { useState } from "react";

function RegisterForm() {
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [kelas, setKelas] = useState("");
  const [setuju, setSetuju] = useState(false);

  const [error, setError] = useState("");
  const [hasil, setHasil] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nama || !jurusan || !kelas || !setuju) {
      setError(
        "Mohon lengkapi seluruh data dan centang persetujuan syarat."
      );
      setHasil(null);
      return;
    }

    setError("");

    setHasil({
      nama,
      jurusan,
      kelas,
    });
  };

  return (
    <section className="register-section">
      <div className="section-heading">
        <span>FORM</span>
        <h2>Registrasi Siswa</h2>
        <p>Isi data berikut untuk membuat kartu profil siswa.</p>
      </div>

      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="nama">Nama Lengkap</label>
          <input
            id="nama"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Masukkan nama lengkap"
          />
        </div>

        <div className="form-group">
          <label htmlFor="jurusan">Jurusan</label>
          <input
            id="jurusan"
            type="text"
            value={jurusan}
            onChange={(e) => setJurusan(e.target.value)}
            placeholder="Contoh: Rekayasa Perangkat Lunak"
          />
        </div>

        <div className="form-group">
          <label htmlFor="kelas">Pilihan Kelas</label>
          <select
            id="kelas"
            value={kelas}
            onChange={(e) => setKelas(e.target.value)}
          >
            <option value="">-- Pilih Kelas --</option>
            <option value="X RPL 1">X RPL 1</option>
            <option value="X RPL 2">X RPL 2</option>
            <option value="XI RPL 1">XI RPL 1</option>
            <option value="XI RPL 2">XI RPL 2</option>
            <option value="XII RPL 1">XII RPL 1</option>
            <option value="XII RPL 2">XII RPL 2</option>
          </select>
        </div>

        <label className="checkbox-group">
          <input
            type="checkbox"
            checked={setuju}
            onChange={(e) => setSetuju(e.target.checked)}
          />
          <span>Saya menyetujui bahwa data yang saya masukkan benar.</span>
        </label>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="submit-button">
          Daftar Sekarang
        </button>
      </form>

      {hasil && (
        <div className="result-card">
          <div className="result-header">
            <span>REGISTRASI BERHASIL</span>
          </div>

          <div className="result-body">
            <div className="result-avatar">
              {hasil.nama.charAt(0).toUpperCase()}
            </div>

            <div>
              <h3>{hasil.nama}</h3>
              <p>{hasil.kelas}</p>
              <p>{hasil.jurusan}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default RegisterForm;