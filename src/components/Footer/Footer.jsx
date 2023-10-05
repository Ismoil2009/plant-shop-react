import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-left">
            <h3>PLANTKU</h3>
            <h5>Plantku House</h5>
            <p>
              Jl. Laksda Adisucipto No.51, Demangan, Kec. Depok, Kota
              Yogyakarta, Daerah Istimewa Yogyakarta 55282
            </p>
          </div>
          <div className="footer-center1">
            <h3>Perusahaan</h3>
            <p>Tentang Kami</p>
            <p>Hubungi Kami</p>
          </div>
          <div className="footer-center2">
            <h3>Produk</h3>
            <p>Tanaman</p>
            <p>Tanaman Lain</p>
          </div>
          <div className="footer-right">
            <h3>Berlangganan Email Kami</h3>
            <input placeholder="Search" type="text" />
            <div>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
