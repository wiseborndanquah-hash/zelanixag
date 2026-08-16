"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".primary-navigation");

    if (toggle && nav) {
        const closeMenu = () => {
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Open navigation menu");
            nav.classList.remove("open");
        };

        toggle.addEventListener("click", () => {
            const expanded = toggle.getAttribute("aria-expanded") === "true";
            toggle.setAttribute("aria-expanded", String(!expanded));
            toggle.setAttribute("aria-label", expanded ? "Open navigation menu" : "Close navigation menu");
            nav.classList.toggle("open", !expanded);
        });

        nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeMenu();
                toggle.focus();
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 900) closeMenu();
        });
    }

    const form = document.querySelector("#project-inquiry");
    if (form) {
        const submitButton = form.querySelector('button[type="submit"]');
        const status = form.querySelector("#form-status");
        const defaultLabel = submitButton?.dataset.submitLabel || submitButton?.textContent || "Submit";

        const setStatus = (message, type = "") => {
            if (!status) return;
            status.textContent = message;
            status.className = `form-status${type ? ` ${type}` : ""}`;
        };

        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            if (!form.reportValidity()) return;

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = "Submitting…";
            }
            setStatus("Sending your project inquiry…", "is-sending");

            try {
                const response = await fetch(form.action, {
                    method: "POST",
                    body: new FormData(form),
                    headers: { "Accept": "application/json" }
                });

                if (response.ok) {
                    setStatus("Your inquiry was submitted successfully. Redirecting…", "is-success");
                    window.location.assign("contact-success.html");
                    return;
                }

                let message = "We could not submit your inquiry. Please review the form and try again.";
                try {
                    const data = await response.json();
                    if (Array.isArray(data.errors) && data.errors.length) {
                        message = data.errors.map((item) => item.message).filter(Boolean).join(" ") || message;
                    }
                } catch (_) {
                    // Keep the user-friendly fallback message.
                }
                throw new Error(message);
            } catch (error) {
                setStatus(error.message || "We could not submit your inquiry. Please try again or contact us by email.", "is-error");
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = defaultLabel;
                }
            }
        });
    }
});
