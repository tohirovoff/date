const btn = document.getElementById("sendLocationBtn");
const status = document.getElementById("status");

btn.addEventListener("click", () => {
    if (!navigator.geolocation) {
        status.textContent = "Brauzeringiz geolokatsiyani qo'llab-quvvatlamaydi.";
        return;
    }

    status.textContent = "Lokatsiya olinmoqda...";

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const response = await fetch("/api/send-location", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    latitude,
                    longitude,
                    googleMaps: `https://maps.google.com/?q=${latitude},${longitude}`
                })
            });

            if (response.ok) {
                status.textContent = "✅ Lokatsiya yuborildi.";
            } else {
                status.textContent = "❌ Xatolik yuz berdi.";
            }
        },
        () => {
            status.textContent = "Lokatsiyaga ruxsat berilmadi.";
        }
    );
});
