// Jobs Overseas - Main JavaScript

document.addEventListener("DOMContentLoaded", () => {
    console.log("Jobs Overseas website loaded successfully.");

    const buttons = document.querySelectorAll("[data-action]");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const action = button.dataset.action;

            if (action === "login") {
                alert("Login system coming next.");
            }

            if (action === "register") {
                alert("Registration system coming next.");
            }

            if (action === "jobs") {
                document
                    .getElementById("jobs")
                    ?.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
