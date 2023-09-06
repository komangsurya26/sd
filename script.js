AOS.init();

var musik = "";

var audio = document.querySelector(".audio");
if (musik) {
  audio.src = musik;
}

function mulai() {
  audio.play();
  window.scrollTo(0, 0);
  document.querySelector(".open").style = "opacity: 0;";
  document.querySelector(".body").style = "overflow-y: scroll";
  setTimeout(function() {
    document.querySelector(".open").style.display = "none";
  }, 1200);
}

function wa(isi) {
  window.open("https://api.whatsapp.com/send?text=Makasih%20ya%20udah%20iseng%20buat%20web,%20di%20hari%20sidang%20nantik " + isi);
}

async function tanya() {
  var {
    value: kado
  } = await swal.fire({
    imageUrl: 'resources/foto.png',
    title: 'Tulis Aja Kamu Mau Apa?',
    input: 'text',
    inputAttributes: {
      placeholder: 'Misal Aku Mau Jalan", Baju dll 😊' // Tambahkan placeholder yang Anda inginkan di sini
    },
    showCancelButton: false
  });

  if (kado) {
    await swal.fire({
      imageUrl: 'resources/wa.png',
      title: 'Kirim jawabannya ke wa aku ya'
    });
    wa(kado);
  } else {
    await swal.fire({
      icon: 'error',
      title: 'Jangan dikosongin dong 😢'
    });
    tanya();
  }
}