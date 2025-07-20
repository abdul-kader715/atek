import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ScrollTextAnimation = () => {
  useEffect(() => {
    const runAnimations = () => {
      initGsapAnimations();
    };

    if (document.fonts) {
      document.fonts.ready.then(runAnimations);
    } else {
      window.addEventListener("load", runAnimations);
      return () => window.removeEventListener("load", runAnimations);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const initGsapAnimations = () => {
    const revealContainers = document.querySelectorAll<HTMLElement>(".reveal");
    revealContainers.forEach((container) => {
      const image = container.querySelector("img");
      if (!image) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "play none none none",
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, {
        xPercent: -100,
        duration: 1,
        ease: "power2.out",
      });
      tl.from(image, {
        xPercent: 100,
        scale: 1,
        delay: -1,
        duration: 1,
        ease: "power2.out",
      });
    });

    const thContainers = document.querySelectorAll<HTMLElement>(".th-anim");
    thContainers.forEach((container) => {
      const image = container.querySelector("img");
      if (!image) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "play none none none",
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, {
        xPercent: -100,
        duration: 1.5,
        ease: "power2.out",
      });
      tl.from(image, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        duration: 1.5,
        ease: "power2.out",
      });
    });

    const textStyle1 = document.querySelectorAll<HTMLElement>(".text-anime-style-1");
    textStyle1.forEach((element) => {
      const split = new SplitText(element, { type: "chars, words" });
      gsap.from(split.words, {
        duration: 1,
        delay: 0.5,
        x: 20,
        autoAlpha: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
        },
      });
    });

    const textStyle2 = document.querySelectorAll<HTMLElement>(".text-anime-style-2");
    textStyle2.forEach((element) => {
      const split = new SplitText(element, { type: "chars, words" });
      gsap.from(split.chars, {
        duration: 2,
        delay: 0.1,
        x: 20,
        autoAlpha: 0,
        stagger: 0.03,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
        },
      });
    });

    const textStyle3 = document.querySelectorAll<HTMLElement & { split?: SplitText; animation?: gsap.core.Tween }>(".text-anime-style-3");
    textStyle3.forEach((element) => {
      if (element.animation) {
        element.animation.progress(1).kill();
        element.split?.revert();
      }

      element.split = new SplitText(element, {
        type: "lines,words,chars",
        linesClass: "split-line",
      });

      gsap.set(element, { perspective: 400 });
      gsap.set(element.split.chars, {
        opacity: 0,
        x: 50,
      });

      element.animation = gsap.to(element.split.chars, {
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
        },
        x: 0,
        y: 0,
        rotateX: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.02,
      });
    });

    const defaults = {
      duration: 1.2,
      ease: "power4.out",
      animation: "fade_from_bottom",
    };

    const animations: Record<string, gsap.TweenVars> = {
      fade_from_bottom: { y: 180, opacity: 0 },
      fade_from_top: { y: -180, opacity: 0 },
      fade_from_left: { x: -180, opacity: 0 },
      fade_from_right: { x: 180, opacity: 0 },
      fade_in: { opacity: 0 },
      rotate_up: { y: 180, rotation: 10, opacity: 0 },
    };

    const scrollAnimations = document.querySelectorAll<HTMLElement>(".scroll-text-animation");
    scrollAnimations.forEach((box) => {
      const animationType =
        animations[box.dataset.animation || ""] || animations[defaults.animation];

      gsap.set(box, { clearProps: "all" });

      gsap.from(box, {
        ...animationType,
        duration: parseFloat(box.dataset.animationDuration || "") || defaults.duration,
        ease: defaults.ease,
        scrollTrigger: {
          trigger: box,
          start: "top bottom+=10%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });
    });
  };

  return (
    <div>
      <div className="reveal"></div>

      <div className="th-anim"></div>

      <span className="text-anime-style-1"></span>
      <span className="text-anime-style-2"></span>
      <span className="text-anime-style-3"></span>

      <div className="scroll-text-animation" data-animation="fade_from_bottom"></div>
      <div className="scroll-text-animation" data-animation="fade_from_top"></div>
      <div className="scroll-text-animation" data-animation="fade_from_left"></div>
      <div className="scroll-text-animation" data-animation="fade_from_right"></div>
      <div className="scroll-text-animation" data-animation="fade_in"></div>
      <div className="scroll-text-animation" data-animation="rotate_up"></div>
    </div>
  );
};

export default ScrollTextAnimation;
