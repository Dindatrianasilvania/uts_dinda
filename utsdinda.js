// Popup Selamat Datang 
window.addEventListener("load", function () {
  const popup = document.createElement("div");
  popup.id = "welcomePopup";
  popup.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      padding: 25px 40px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      border-radius: 15px;
      text-align: center;
      font-family: Arial, sans-serif;
      z-index: 9999;
      animation: fadeIn 0.5s ease;
    ">
      <h2 style="color: rgb(133, 55, 0); margin-bottom: 10px;">Selamat Datang di Roti'O 🍞</h2>
      <p style="color: #555;">Nikmati pengalaman terbaik bersama kami!</p>
      <button id="closePopup" style="
        margin-top: 15px;
        background: linear-gradient(rgb(133, 55, 0), rgb(203, 108, 41));
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
      ">Tutup</button>
    </div>
  `;
  document.body.appendChild(popup);

  document.getElementById("closePopup").addEventListener("click", () => {
    popup.remove();
  });
});

// Popup Konfirmasi Saat Klik Artikel 
document.addEventListener("DOMContentLoaded", function () {
  const articleLinks = document.querySelectorAll(".card-artikel a");

  articleLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); 

      const confirmBox = document.createElement("div");
      confirmBox.id = "confirmPopup";
      confirmBox.innerHTML = `
        <div style="
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          padding: 25px 40px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
          border-radius: 15px;
          text-align: center;
          font-family: Arial, sans-serif;
          z-index: 9999;
          animation: fadeIn 0.5s ease;
        ">
          <h3 style="color: rgb(133, 55, 0); margin-bottom: 15px;">Apakah kamu ingin membuka artikel ini?</h3>
          <button id="yesBtn" style="
            background-color: rgb(133, 55, 0);
            color: white;
            border: none;
            padding: 8px 16px;
            margin-right: 10px;
            border-radius: 8px;
            cursor: pointer;
          ">Ya</button>
          <button id="noBtn" style="
            background-color: gray;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 8px;
            cursor: pointer;
          ">Tidak</button>
        </div>
      `;
      document.body.appendChild(confirmBox);

      document.getElementById("yesBtn").addEventListener("click", () => {
        window.location.href = link.href; 
      });
      document.getElementById("noBtn").addEventListener("click", () => {
        confirmBox.remove(); 
      });
    });
  });

});
