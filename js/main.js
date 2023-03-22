const images = document.querySelectorAll(".gallery img");

// mengambil elemen modal
const modal = document.querySelector("#exampleModal");

// mengambil elemen judul modal
const modalTitle = modal.querySelector(".modal-title");

// mengambil elemen isi modal
const modalBody = modal.querySelector(".modal-body");

// mengambil tombol simpan perubahan
const saveChangesButton = modal.querySelector(".btn-primary");

// menambahkan tombol download pada modal
const downloadButton = modal.querySelector(".btn-download");

// menambahkan event click pada setiap gambar
images.forEach((image) => {
  image.addEventListener("click", () => {
    // mengganti sumber gambar dan atribut alt pada elemen gambar modal
    const modalImage = modalBody.querySelector("img");
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    // mengganti teks pada elemen judul modal
    modalTitle.textContent = image.alt;

    // menampilkan modal
    modal.classList.add("show");

    // menambahkan link download pada tombol download
    downloadButton.href = image.src;
    downloadButton.download = image.alt;

    // menambahkan event click pada tombol simpan perubahan
    saveChangesButton.addEventListener("click", () => {
      // menyembunyikan modal
      modal.classList.remove("show");
    });
  });
});
