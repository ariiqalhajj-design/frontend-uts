import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard";
import RegisterForm from "./components/RegisterForm";
import "./App.css";

function App() {
  const namaSekolah = "SMK Nusantara";
  const tahunAjaran = "2026/2027";

  const [jumlahSiswa, setJumlahSiswa] = useState(3);

  const tambahSiswa = () => {
    setJumlahSiswa(jumlahSiswa + 1);
  };

  const kurangiSiswa = () => {
    if (jumlahSiswa > 0) {
      setJumlahSiswa(jumlahSiswa - 1);
    }
  };

  return (
    <div className="app">
      <Header />

      <main>
        <section className="hero">
          <div>
            <p className="eyebrow">WELCOME</p>

            <h2>
              Sistem Registrasi
              <br />
              <span>Siswa Digital</span>
            </h2>

            <p className="hero-description">
              Selamat datang di {namaSekolah}. Tahun ajaran{" "}
              {tahunAjaran}.
            </p>
          </div>
        </section>

        <section className="students-section">
          <div className="section-heading">
            <span>PROFIL</span>
            <h2>Daftar Siswa</h2>
            <p>Contoh penggunaan reusable component dan Props.</p>
          </div>

          <div className="student-list">
            <StudentCard
              nama="Andi Pratama"
              kelas="XI RPL 1"
              jurusan="Rekayasa Perangkat Lunak"
            />

            <StudentCard
              nama="Siti Aulia"
              kelas="XI RPL 2"
              jurusan="Rekayasa Perangkat Lunak"
            />

            <StudentCard
              nama="Budi Santoso"
              kelas="XII RPL 1"
              jurusan="Teknik Komputer dan Jaringan"
            />
          </div>
        </section>

        <section className="counter-section">
          <div className="counter-box">
            <p className="eyebrow">STATE DEMO</p>
            <h2>Jumlah Siswa</h2>

            <div className="counter-number">{jumlahSiswa}</div>

            <div className="counter-buttons">
              <button onClick={kurangiSiswa}>−</button>
              <button onClick={tambahSiswa}>+</button>
            </div>

            <p>
              Nilai akan berubah secara otomatis menggunakan{" "}
              <strong>useState</strong>.
            </p>
          </div>
        </section>

        <RegisterForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;