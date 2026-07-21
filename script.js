async function loadProjects() {

    try {

        const response = await fetch("projects.json");

        if (!response.ok) {
            throw new Error("No se pudo cargar projects.json");
        }

        const data = await response.json();

        renderProjects(data.professional, "professional-projects");

        renderProjects(data.personal, "personal-projects");

        initSwipers();

    } catch (error) {

        console.error(error);

    }

}
function renderProjects(projects, containerId) {

    const container = document.getElementById(containerId);

    projects.forEach(project => {

        const tags = project.tags
            .map(tag => `<span>${tag}</span>`)
            .join("");

        const linkButton = project.link
            ? `
                <a href="${project.link}" target="_blank" class="project-link">
                    Ver web ↗
                </a>
              `
            : "";

        container.innerHTML += `

            <div class="swiper-slide">

                <article class="project-card">

                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>

                    <div class="project-content">

                        <div class="project-top">

                            <h3>${project.title}</h3>

                            ${linkButton}

                        </div>

                        <p>${project.description}</p>

                        <div class="project-tags">
                            ${tags}
                        </div>

                    </div>

                </article>

            </div>

        `;
    });
}

function initSwipers() {

    new Swiper(".professional-swiper", {

        slidesPerView: 3,
        spaceBetween: 30,

        grabCursor: true,
        loop: true,

        speed: 800,

        navigation: {
            nextEl: ".professional-swiper .swiper-button-next",
            prevEl: ".professional-swiper .swiper-button-prev",
        },

        pagination: {
            el: ".professional-swiper .swiper-pagination",
            clickable: true,
        },

        breakpoints: {

            0: {
                slidesPerView: 1.1,
                spaceBetween: 20,
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 25,
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            }

        }

    });

    new Swiper(".personal-swiper", {

        slidesPerView: 3,
        spaceBetween: 30,

        grabCursor: true,
        loop: true,

        speed: 800,

        navigation: {
            nextEl: ".personal-swiper .swiper-button-next",
            prevEl: ".personal-swiper .swiper-button-prev",
        },

        pagination: {
            el: ".personal-swiper .swiper-pagination",
            clickable: true,
        },

        breakpoints: {

            0: {
                slidesPerView: 1.1,
                spaceBetween: 20,
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 25,
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            }

        }

    });
}

loadProjects();