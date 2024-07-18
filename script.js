var khodamData = {};

// Fungsi untuk memainkan suara secara acak
function playRandomSound() {
    var sounds = [
        "sound/sound1.mp3",
        "sound/sound2.mp3",
        "sound/sound3.mp3",
        // Tambahkan suara lainnya di sini sesuai kebutuhan
    ];

    var randomIndex = Math.floor(Math.random() * sounds.length);
    var audio = new Audio(sounds[randomIndex]);
    audio.play();
}

document.getElementById("submitBtn").addEventListener("click", function() {
    var name = document.getElementById("name").value.trim();
    var notificationElement = document.getElementById("notification");

    if (name === "") {
        notificationElement.style.display = "block";
        document.getElementById("result").style.display = "none";
    } else {
        notificationElement.style.display = "none";
        name = name.charAt(0).toUpperCase() + name.slice(1);

        var khodamNames = [
            "Kadal Sakti", "Burung Hudhud", "Kucing Garong", "Monyet Sakti", "Ular Naga",
            "Kelinci Ajaib", "Tupai Gesit", "Katak Beracun", "Landak Berduri", "Kura-kura Ninja",
            "Harimau Putih", "Beruang Kutub", "Rubah Ekor Sembilan", "Singa Emas", "Gajah Biru",
            "Jerapah Terbang", "Kangguru Perak", "Koala Bermata Satu", "Panda Raksasa",
            "Kelelawar Vampir", "Burung Merak", "Burung Hantu", "Burung Kolibri", "Burung Bangau",
            "Burung Camar", "Ikan Hiu", "Ikan Pari", "Ikan Mas", "Ikan Koi", "Ikan Piranha",
            "Laba-laba Tarantula", "Kalajengking Raksasa", "Lebah Madu", "Kupu-kupu Raksasa",
            "Belalang Sembah", "Kecoa Terbang", "Semut Api", "Rayap Pelangi", "Kepiting Kenari",
            "Udang Galah", "Cacing Besar", "Siput Raksasa", "Keong Racun", "Bekicot Emas",
            "Lipan Biru", "Kumbang Badak", "Kunang-kunang", "Capung Raksasa", "Lalat Hijau",
            "Nyamuk Sakti", "Kadal Licin", "Burung Elang", "Kucing Anggora", "Monyet Salto",
            "Ular Kobra", "Kelinci Terbang", "Tupai Ninja", "Katak Loncat", "Landak Cerdas",
            "Kura-kura Perkasa", "Harimau Loreng", "Beruang Coklat", "Rubah Cerdik", "Singa Putih",
            "Gajah Afrika", "Jerapah Langit", "Kangguru Biru", "Koala Lucu", "Panda Mini",
            "Kelelawar Gua", "Burung Cendrawasih", "Burung Kakaktua", "Burung Merpati", "Burung Pelikan",
            "Burung Nuri", "Kosong", "Martabak Cokelat", "Naga Sakti", "Ratu Pantai Selatan", "Harimau Putih", "Raja Jin",
            "Dewi Bulan", "Penjaga Hutan", "Singa Emas", "Banteng Sakti", "Elang Perkasa",
            "Laba-laba Sunda", "Buaya Hitam", "Katak Sigma", "Skibidi Sigma", "Ikan Lohan Tidak Gyat",
            "Burung Puyuh Warna Bjir", "Monyet Hutan", "Gajah Ngawi", "Kursi Mewing", "Balon Ku Sigma",
            "Di Hina Tetap Sigma", "Kue Keju", "Mobil Bekas Toyota Gyat", "Rehan Toyota", "Ikbal Hotwil",
            "Kuda Pake Sendal", "Sendal", "Jaket Bapak", "Kambing Hitam", "Pintu Gerbang", "Kayu Jati",
            "Jati Diri", "Ayam Tidak Punya KTP", "Dino Sok Inggris", "Bibir Jontor Badag", "Teh Sari Wangi",
            "Indomi Kecap Asin", "Burung Elang Dari Jawa", "Tidak Ada/Kosong !", "Nokia Bapak",
            "Telur Gulung", "Sayur Asem Kecap Manis", "Baju Terbang", "Sendal Jepit", "Nasi Padang",
            "Pizza Mewah", "Jus Alpukat", "Sate Ayam", "Gado-Gado", "Kambing Guling", "Tahu Bulat",
            "Lontong Balap", "Soto Ayam", "Bakso Gepeng", "Cilok Kenyal", "Mie Ayam Lezat", "Es Cendol Manis",
            "Kopi Hitam Mantap", "Brownies Lumer", "Kerak Telor", "Tempe Mendoan", "Jajanan Pasar",
            "Pecel Lele", "Ayam Geprek", "Roti Bakar", "Pisang Goreng", "Bubur Ayam", "Nasi Goreng Spesial",
            "Sop Buntut", "Gule Kambing", "Rawon Hitam", "Ikan Bakar", "Sate Kambing", "Kue Cubit", "Cakwe",
            "Tahu Gejrot", "Kacang Polong", "Sayur Bayam", "Sambal Terasi", "Es Dawet", "Teh Tarik", "Es Teler",
            "Kerupuk Kulit", "Rengginang", "Emping Melinjo", "Mie Goreng", "Risoles", "Lumpia Semarang",
            "Pempek Palembang", "Asinan Betawi", "Lemper Ayam", "Bika Ambon", "Klepon", "Kue Lumpur",
            "Putu Ayu", "Onde-Onde", "Pukis", "Serabi", "Martabak Telur", "Sempol Ayam", "Bubur Ketan Hitam",
            "Kai Cenat", "Ibu Kai Cenat", "Bapak Kai Cenat", "Adek Kai Cenat", "Kakak Kai Cenat", "Nenek Kai Cenat",
            "Kakek Kai Cenat", "Bibi Kai Cenat", "Paman Kai Cenat", "Istri Kai Cenat", "Keponakan Kai Cenat",
            "Bapak Nya Istri Kai Cenat", "Istri nya Bapak nya Istri Kai Cenat", "Es Dawet Ketan Hitam Pekat Oli Bekas",
            "Kai Cenat Mode Sigma", "Bocil Mewing", "[Rare,Misterius,Cool,Sigma,Mewing,Made in ohio] Akbar Motor Mio Gas Elpiji Wibu Sejati Kasur Bekas Motor Supra Blukutuk-Blukutuk",
            "Kapten Bajak Laut Ngawi", "Mio Mirza", "Kak Gem Mode Mewing", "Kak Gem", "Uni Bakwan", "Sambal Goreng Kecap Hitam",
            "Kamu Bukan User Khodam !", "Kosong", "Ambatron Type 555 - y 9 UZ", "Ambatukam Mewing", "Mas Rusdi Tidak G4Y",
            "Suki Liar", "Suki Type G4", "The World", "Star Platinum"
        ];

        var randomIndex = Math.floor(Math.random() * khodamNames.length);
        var khodamName = khodamNames[randomIndex];

        if (khodamName === "Kosong") {
            var khodamDescription = "Maaf, sepertinya Anda belum memiliki khodam. Jangan sedih, mungkin khodam Anda masih dalam perjalanan menuju Anda.";
        } else {
            var promptText = "Jelaskan khodam " + khodamName + " dalam Bahasa Indonesia hanya 15 kata saja, menggunakan lelucon dan mengaitkannya pada karakteristik hewan atau makhluk dari nama " + name + ".";

            Swal.fire({
                title: "Mohon Tunggu...",
                html: "Mencari informasi tentang khodam Anda...",
                allowOutsideClick: false,
                showConfirmButton: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            axios.post(
                "https://api.groq.com/openai/v1/chat/completions",
                {
                    messages: [
                        {
                            role: "user",
                            content: promptText
                        }
                    ],
                    model: "mixtral-8x7b-32768"
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer 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"
                    }
                }
            ).then(function(response) {
                var khodamDescription = response.data.choices[0].message.content.trim();
                khodamData[name] = {
                    khodamName: khodamName,
                    khodamDescription: khodamDescription
                };
                document.getElementById("khodam-description").textContent = khodamDescription;
                document.getElementById("result").style.display = "block";
                Swal.close();
                playRandomSound(); // Memanggil fungsi untuk memainkan suara setelah mendapatkan deskripsi khodam
            }).catch(function(error) {
                console.error(error);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    console.error("Response data:", error.response.data);
                    console.error("Response status:", error.response.status);
                    console.error("Response headers:", error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error("Request:", error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error("Error:", error.message);
                }
                Swal.fire("Oops...", "Terjadi kesalahan saat mencari informasi tentang khodam. Silakan coba lagi nanti.", "error");
            });
        }

        document.getElementById("output-name").textContent = name;
        document.getElementById("khodam-name").textContent = khodamName;
        document.getElementById("khodam-description").textContent = khodamDescription;
    }
});
