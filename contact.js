const contactForm = document.getElementById("contact-form");
const contactFormStatus = document.getElementById("contact-form-status");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !phone || !service || !message) {
      if (contactFormStatus) {
        contactFormStatus.textContent = "Please fill all required fields before sending.";
      }
      return;
    }

    const lines = [
      "Hello DOVE CHAMBERS LEGAL,",
      "",
      "I would like to make an enquiry:",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "Not provided"}`,
      `Service: ${service}`,
      `Message: ${message}`
    ];

    if (contactFormStatus) {
      contactFormStatus.textContent = "WhatsApp number is pending confirmation. Please call the office once the number is provided.";
    }
  });
}


