(() => {
    const header = document.querySelector(".site-header");
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");

    const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    menuToggle?.addEventListener("click", () => {
        const isOpen = nav?.classList.toggle("open") ?? false;
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle?.setAttribute("aria-expanded", "false");
    }));

    const items = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: .08 });
        items.forEach(item => observer.observe(item));
    } else {
        items.forEach(item => item.classList.add("visible"));
    }
})();
