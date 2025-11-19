export async function galleryLoader() {
    const response = await fetch("folder-reader.php");
    const images = await response.json();
    const gallery = document.querySelector(".gallery");

    images.array.forEach(file => {
        const img = document.createElement("img");
        img.src = 'images/slides/${file}';
        img.alt = file;
        gallery.appendChild(img);
    });
}