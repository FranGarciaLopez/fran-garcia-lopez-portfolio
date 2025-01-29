document.addEventListener("astro:page-load", () => {
          if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
            console.error("GSAP or ScrollTrigger not loaded.");
            return;
          }
        
          gsap.registerPlugin(ScrollTrigger);
        
          gsap.utils.toArray("[data-scroll]").forEach((element) => {
            gsap.fromTo(
              element,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 90%",
                  end: "top 50%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          });
        });
        