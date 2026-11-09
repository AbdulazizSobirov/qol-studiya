# Qo'l Studiya

Kamera orqali qo'l bilan boshqariladigan brauzer dasturi. Havoda shakl chizasiz, dastur uni tekis aylana, kvadrat yoki uchburchakka aylantiradi. Keyin shaklni ushlab ko'chirasiz, kattalashtirasiz, burasiz va 3D qilasiz.

Video hech qayerga yuborilmaydi: qo'lni tanish kompyuterning o'zida ishlaydi.

## Ishga tushirish

Kamera ishlashi uchun dasturni oddiy fayl qilib emas, lokal server orqali oching:

```bash
python -m http.server 5178
```

Keyin Chrome'da `http://localhost:5178` manzilini oching va kameraga ruxsat bering.

## Boshqarish

| Harakat | Natija |
|---|---|
| 🤏 Bosh va ko'rsatkich barmoqni jipslash | Bosish |
| Barmoqni chetdagi tugmaga olib borib chimdish yoki ushlab turish | Tugmani tanlash |
| Bo'sh joyda chimdib chizish | Tanlangan asbob bilan shakl yaratish |
| Shakl ustida chimdib ko'chirish | Shaklni ko'chirish, qo'yib yuborsangiz qotadi |
| Shaklni pastdagi 🗑 savatga tashlash | O'chirish |
| Bir qo'l ushlab turib, ikkinchisi bilan chimdib cho'zish | Kattalashtirish va burash |

O'ngdagi tugmalar tanlangan shaklga ishlov beradi: rang, 3D, to'ldirish, aylantirish, nusxa, o'chirish, bekor qilish, tozalash.

Kamera bo'lmasa, sichqoncha bilan ham ishlaydi.

## Fayllar

- `index.html` — Qo'l Studiya, asosiy dastur
- `sehr.html` — eski versiya: zarrachalar, portlash va chaqmoq effektlari
- `sw.js`, `manifest.webmanifest`, `icon.svg` — ilova sifatida o'rnatish va oflayn ishlash uchun

## Texnologiyalar

[Three.js](https://threejs.org/) va [MediaPipe Tasks Vision](https://ai.google.dev/edge/mediapipe). Kutubxonalar va modellar internetdan yuklanadi.
