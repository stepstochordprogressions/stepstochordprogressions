// script.js
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");

  menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
});

const majorButton = document.getElementById("major-button");
if (majorButton) {
  majorButton.addEventListener("click", function () {
    window.location.href = "major_keys.html";
  });
}

const IButton = document.getElementById("I-button");
if (IButton) {
  IButton.addEventListener("click", function () {
    window.location.href = "major_tonic_triad.html";
  });
}

const iiButton = document.getElementById("ii-button");
if (iiButton) {
  iiButton.addEventListener("click", function () {
    window.location.href = "major_supertonic_triad.html";
  });
}

const iiiButton = document.getElementById("iii-button");
if (iiiButton) {
  iiiButton.addEventListener("click", function () {
    window.location.href = "major_mediant_triad.html";
  });
}

const IVButton = document.getElementById("IV-button");
if (IVButton) {
  IVButton.addEventListener("click", function () {
    window.location.href = "major_subdominant_triad.html";
  });
}

const VButton = document.getElementById("V-button");
if (VButton) {
  VButton.addEventListener("click", function () {
    window.location.href = "major_dominant_triad.html";
  });
}

const viButton = document.getElementById("vi-button");
if (viButton) {
  viButton.addEventListener("click", function () {
    window.location.href = "major_submediant_triad.html";
  });
}

const viiButton = document.getElementById("vii-button");
if (viiButton) {
  viiButton.addEventListener("click", function () {
    window.location.href = "major_leading_tone_triad.html";
  });
}

const mrButton = document.getElementById("minor-button");
if (mrButton) {
  mrButton.addEventListener("click", function () {
    window.location.href = "minor_keys.html";
  });
}

const IButtonMinor = document.getElementById("i-mrbutton");
if (IButtonMinor) {
  IButtonMinor.addEventListener("click", function () {
    window.location.href = "minor_tonic_triad.html";
  });
}

const iiButtonMinor = document.getElementById("ii-mrbutton");
if (iiButtonMinor) {
  iiButtonMinor.addEventListener("click", function () {
    window.location.href = "minor_supertonic_triad.html";
  });
}

const iiiButtonMinor = document.getElementById("iii-mrbutton");
if (iiiButtonMinor) {
  iiiButtonMinor.addEventListener("click", function () {
    window.location.href = "minor_mediant_triad.html";
  });
}

const IVButtonMinor = document.getElementById("iv-mrbutton");
if (IVButtonMinor) {
  IVButtonMinor.addEventListener("click", function () {
    window.location.href = "minor_subdominant_triad.html";
  });
}

const VButtonMinor = document.getElementById("v-mrbutton");
if (VButtonMinor) {
  VButtonMinor.addEventListener("click", function () {
    window.location.href = "minor_dominant_triad.html";
  });
}

const viButtonMinor = document.getElementById("vi-mrbutton");
if (viButtonMinor) {
  viButtonMinor.addEventListener("click", function () {
    window.location.href = "minor_submediant_triad.html";
  });
}

const subtonicButton = document.getElementById("vii1-mrbutton");
if (subtonicButton) {
  subtonicButton.addEventListener("click", function () {
    window.location.href = "minor_subtonic_triad.html";
  });
}

const viiButtonMinor = document.getElementById("vii2-mrbutton");
if (viiButtonMinor) {
  viiButtonMinor.addEventListener("click", function () {
    window.location.href = "minor_leading_tone_triad.html";
  });
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    const emailInput = document.getElementById("email").value;
    const emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(emailInput)) {
      event.preventDefault();
      alert("Please enter a valid email address.");
    }
  });

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    const botCheck = document.querySelector('input[name="botcheck"]:checked');
    if (botCheck) {
      alert("Bot detected! Form submission blocked.");
      event.preventDefault();
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successContainer = document.getElementById("successContainer");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        form.style.display = "none";
        successContainer.style.display = "block";

        setTimeout(() => {
          successContainer.style.display = "none";
          form.reset();
          form.style.display = "block";
        }, 3000);
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("An unexpected error occurred. Please try again later.");
    }
  });
});
