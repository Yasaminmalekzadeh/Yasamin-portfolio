document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".expandable-card");


    cards.forEach(function (card) {

        const openButton = card.querySelector(".details-btn:not(.close-details)");
        const closeButton = card.querySelector(".close-details");

        const details =
            card.querySelector(".project-details") ||
            card.querySelector(".experience-details");


        if (!openButton || !details) {
            return;
        }


        /* =========================
           OPEN DETAILS
        ========================== */

        openButton.addEventListener("click", function () {

            /*
             Close other cards first
            */

            cards.forEach(function (otherCard) {

                if (otherCard !== card) {

                    otherCard.classList.remove("active");

                    const otherDetails =
                        otherCard.querySelector(".project-details") ||
                        otherCard.querySelector(".experience-details");

                    if (otherDetails) {
                        otherDetails.classList.remove("show");
                    }

                }

            });


            /*
             Open current card
            */

            card.classList.add("active");

            details.classList.add("show");

            openButton.style.display = "none";

        });


        /* =========================
           CLOSE DETAILS
        ========================== */

        if (closeButton) {

            closeButton.addEventListener("click", function () {

                card.classList.remove("active");

                details.classList.remove("show");

                openButton.style.display = "inline-block";

            });

        }

    });

});