document.querySelector("#wppRomina").addEventListener("click", () => {
  location.href = "https://wa.me/558597334805";
});

document.querySelector("#wppLavyne").addEventListener("click", () => {
  location.href = "https://wa.me/558894883784";
});

document.querySelector("#locLavyne").addEventListener("click", () => {
  location.href =
    "https://www.google.com.br/maps/place/Lavyne+Boutique/@-3.7437057,-39.78347,18z/data=!4m15!1m8!3m7!1s0x7c0103637df6ac7:0xcf734ef1318514aa!2sR.+Vinte+e+Um+de+Junho+-+Irau%C3%A7uba,+CE,+62620-000!3b1!8m2!3d-3.7490082!4d-39.7827409!16s%2Fg%2F1ymtw5rx6!3m5!1s0x7c011a118a58fdb:0x4ce2ee2de1d67f5b!8m2!3d-3.7435067!4d-39.782615!16s%2Fg%2F11ptqd7gf2";
});

document.querySelector("#Share-btn").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(
      "https://ericlescalvt.github.io/LavyneBoutique/"
    );
    await navigator.share({
      url: "https://ericlescalvt.github.io/LavyneBoutique/",
    });
  } catch (err) {
    console.error("Erro ao compartilhar:", err.message);
    if (navigator.share) {
      alert("navegador suporta compartilhamento");
    } else {
      alert("navegador não suporta compartilhamento");
      shareButton.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText("https://seu-link.com");
          alert(
            "Link copiado para a área de transferência. Cole-o manualmente para compartilhar."
          );
        } catch (err) {
          console.error("Erro ao copiar:", err.message);
        }
      });
    }
  }
});
