// === Popup Notifikasi Pesan Terkirim ===
document.addEventListener("DOMContentLoaded", function () {
  const submitButtons = document.querySelectorAll(".submit");

  submitButtons.forEach(button => {
    button.addEventListener("click", function () {
      // bikin elemen popup
      const notif = document.createElement("div");
      notif.innerHTML = `
        <div style="
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        ">
          <div style="
            background: white;
            padding: 25px 40px;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            text-align: center;
            animation: fadeIn 0.4s ease;
            font-family: Arial, Helvetica, sans-serif;
          ">
            <h3 style="color: rgb(133, 55, 0); margin-bottom: 10px;">✅ Pesan Terkirim!</h3>
            <p style="color: #555;">Terima kasih, pesan kamu sudah kami terima.</p>
            <button id="okNotif" style="
              margin-top: 15px;
              background: linear-gradient(rgb(133, 55, 0), rgb(203, 108, 41));
              color: white;
              border: none;
              padding: 8px 16px;
              border-radius: 8px;
              cursor: pointer;
            ">Oke</button>
          </div>
        </div>
      `;

      // tampilkan popup
      document.body.appendChild(notif);

      // tombol untuk menutup popup
      document.getElementById("okNotif").addEventListener("click", () => {
        notif.remove();
      });
    });
  });
});