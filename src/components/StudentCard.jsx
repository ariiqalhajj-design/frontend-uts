function StudentCard({ nama, kelas, jurusan }) {
  return (
    <div className="student-card">
      <div className="student-avatar">
        {nama.charAt(0).toUpperCase()}
      </div>

      <div className="student-info">
        <h3>{nama}</h3>
        <p>
          <strong>Kelas:</strong> {kelas}
        </p>
        <p>
          <strong>Jurusan:</strong> {jurusan}
        </p>
      </div>
    </div>
  );
}

export default StudentCard;