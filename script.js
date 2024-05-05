function predictSentiment() {
  const reviewText = document.getElementById("reviewText").value;

  // Kirim teks review ke backend (misalnya menggunakan AJAX) untuk diproses oleh model sentimen analisis
  // Di sini kita akan menggunakan contoh sederhana
  const sentiment = analyzeSentiment(reviewText);

  // Tampilkan hasil prediksi sentimen
  const resultDiv = document.getElementById("result");
  if (sentiment === "positive") {
    resultDiv.innerHTML = "<p>sentiment ini <strong>positif</strong>.</p>";
  } else if (sentiment === "negative") {
    resultDiv.innerHTML = "<p>sentiment ini <strong>negative</strong>.</p>";
  } else {
    resultDiv.innerHTML =
      "<p>sentiment ini <strong>tidak tersedia</strong> silahkan coba yang lain.</p>";
  }
}

// Contoh sederhana fungsi untuk analisis sentimen
function analyzeSentiment(text) {
  // Di sini kita akan menggunakan logika sederhana, misalnya mendeteksi kata-kata positif/negatif
  const positiveWords = [
    "baik",
    "bagus",
    "mantap",
    "luar biasa",
    "hebat",
    "fantastis",
    "kreatif",
    "menyenangkan",
    "menarik",
    "suka",
    "senang",
    "puas",
    "mengagumkan",
    "terbaik",
    "membahagiakan",
    "bahagia",
    "ceria",
    "semangat",
    "gemilang",
    "optimis",
    "gigih",
    "bersemangat",
    "antusias",
    "percaya diri",
    "penuh energi",
    "sukses",
    "beruntung",
    "berani",
    "cerdas",
    "cemerlang",
    "penuh semangat",
    "mempesona",
    "menginspirasi",
    "menawan",
    "elegan",
    "ramah",
    "sopan",
    "pintar",
    "inovatif",
    "profesional",
  ];

  const negativeWords = [
    "buruk",
    "jelek",
    "mengerikan",
    "mengecewakan",
    "menyebalkan",
    "frustrasi",
    "menyakitkan",
    "sakit",
    "sial",
    "menyedihkan",
    "menyeramkan",
    "menjengkelkan",
    "mengecewakan",
    "membosankan",
    "merepotkan",
    "tidak menyenangkan",
    "menyusahkan",
    "menakutkan",
    "terpuruk",
    "putus asa",
    "sulit",
    "sengsara",
    "malang",
    "pahit",
    "sedih",
    "marah",
    "kesal",
    "kecewa",
    "frustrasi",
    "terganggu",
    "cemas",
    "gelisah",
    "takut",
    "sombong",
    "murung",
    "putus harapan",
    "malas",
    "lelah",
    "bosan",
    "tidak efektif",
    "jahat",
  ];

  const words = text.toLowerCase().split(" ");
  const positiveCount = words.filter((word) =>
    positiveWords.includes(word)
  ).length;
  const negativeCount = words.filter((word) =>
    negativeWords.includes(word)
  ).length;

  if (positiveCount > negativeCount) {
    return "positive";
  } else if (negativeCount > positiveCount) {
    return "negative";
  } else {
    return "neutral";
  }
}
