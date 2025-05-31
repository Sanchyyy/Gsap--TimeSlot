const myAnimations = {
  initializeAnimations: function () {
    const tl = gsap.timeline();

    tl.to(".loader-spinner", {
      width: "100%",
      duration: 1,
      onComplete: () => {
        document.querySelector(".loader-spinner").style.display = "none";
      },
    });

    tl.to(".loader__top, .loader__bottom", {
      height: 0,
      duration: 1,
      onComplete: () => {
        document.querySelector(".loader").style.display = "none";
      },
    });

    gsap.to(".bg-scroll", {
      transform: "translate3d(0px, -300vh, 0px)",
      scrollTrigger: {
        trigger: ".bg-scroll",
        scroller: "body",
        scrub: 2,
      },
    });

    gsap.from(".title", {
      x: 200,
      y: 60,
      duration: 0.5,
      delay: 1,
    });

    gsap.to(".title__message", {
      x: "-120vw",
      opacity: 0,
      scrollTrigger: {
        trigger: ".title",
        scroller: "body",
        start: "top 30%",
        end: "top -150%",
        scrub: 3,
      },
    });

    gsap.from(".phone", {
      opacity: 0,
      y: 100,
      duration: 1.5,
      delay: 0.5,
    });

    gsap.to(".phone-mockup, .phone-media-images", {
      transform: "translate(0px,0vh) scale(1, 1)",
      scrollTrigger: {
        trigger: ".header",
        scroller: "body",
        start: "top 0",
        scrub: 2,
      },
    });

    gsap.to(".phone-notch", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".header",
        scroller: "body",
        start: "top -100%",
        scrub: 2,
      },
    });

    gsap.to(".phone-media-box", {
      transform: "translate3d(0px, 0px, 0px)",
      scrollTrigger: {
        trigger: ".header",
        scroller: "body",
        start: "top 0",
        scrub: 2,
      },
    });

    const imagesTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".phone-media-box",
        scroller: "body",
        scrub: 2,
        end: "top 0",
      },
    });

    imagesTimeline.to(".phone-media-box__images--1", {
      transform: "rotateZ(-18.2deg)",
    });
    imagesTimeline.to(
      ".phone-media-box__images--2",
      {
        transform: "rotateZ(-15.19deg)",
      },
      "<"
    );
    imagesTimeline.to(
      ".phone-media-box__images--3",
      {
        transform: "rotateZ(-11deg)",
      },
      "<"
    );
    imagesTimeline.to(
      ".phone-media-box__images--4",
      {
        transform: "rotateZ(20.6deg)",
      },
      "<"
    );
    imagesTimeline.to(
      ".phone-media-box__images--5",
      {
        transform: "rotateZ(23deg)",
      },
      "<"
    );
    imagesTimeline.to(
      ".phone-media-box__images--6",
      {
        transform: "rotateZ(29deg)",
      },
      "<"
    );
    imagesTimeline.to(
      ".phone-media-box__images--1,.phone-media-box__images--2,.phone-media-box__images--3,.phone-media-box__images--4,.phone-media-box__images--5,.phone-media-box__images--6",
      {
        transform: "rotateZ(0deg)",
      }
    );

    for (let i = 1; i <= 6; i++) {
      imagesTimeline.to(`.phone-media-box__images--${i}`, {
        transform: "translate3d(0vw, 0vh, 0px) scale3d(1,1,1)",
        width: window.innerWidth > 1024 ? "360px" : "250px",
        height: window.innerWidth > 1024 ? "280px" : "210px",
        scrollTrigger: {
          trigger: ".phone-media-box",
          scroller: "body",
          end: "top 0",
          scrub: 2,
        },
      });
    }
    imagesTimeline.to(".phone-media-box__images", {
      display: "none",
      duration: 0.1,
    });

    const breathingEffectTimeline = gsap.timeline();

    breathingEffectTimeline.fromTo(
      ".phone-media-box__images--2, .phone-media-box__images--3, .phone-media-box__images--5, .phone-media-box__images--6",
      {
        scale: 0.75,
      },
      {
        scale: 1,
        duration: 1,
      },
      "<"
    );

    breathingEffectTimeline.fromTo(
      ".phone-media-box__images--1,.phone-media-box__images--4",
      {
        scale: 0.75,
      },
      {
        scale: 1,
        duration: 1,
        repeat: 0,
      },
      "<0.3"
    );

    gsap.to("body", {
      backgroundColor: "rgba(50,74,87)",
      scrollTrigger: {
        trigger: ".main-description__feed",
        scroller: "body",
        start: "top -30%",
        end: "top -200%",
        scrub: 2,
      },
    });

    gsap.to("body", {
      backgroundColor: "rgb(80, 134, 153)",
      scrollTrigger: {
        trigger: ".main-description__friends",
        scroller: "body",
        start: "top -30%",
        end: "bottom",
        scrub: 2,
      },
    });

    gsap.to("body", {
      backgroundColor: "rgba(116,107,104)",
      scrollTrigger: {
        trigger: ".main-description__search",
        scroller: "body",
        start: "top -20%",
        end: "top center",
        scrub: 2,
      },
    });

    gsap.to("body", {
      backgroundColor: "rgba(177,71,118)",
      scrollTrigger: {
        trigger: ".main-description__news",
        scroller: "body",
        start: "top -20%",
        end: "top center",
        scrub: 2,
      },
    });

    gsap.to("body", {
      backgroundColor: "rgba(146,72,148)",
      scrollTrigger: {
        trigger: ".main-description__profile",
        scroller: "body",
        start: "top -20%",
        end: "top center",
        scrub: 2,
      },
    });

    gsap.to("body", {
      backgroundColor: "rgba(65,60,126)",
      scrollTrigger: {
        trigger: ".main-description__slot",
        scroller: "body",
        start: "top -20%",
        end: "top center",
        scrub: 2,
      },
    });

    const sections = [
      {
        trigger: ".main-description__feed",
        title: ".main-side__scroll--wrapper .side-title-feed",
        end: "top -120%",
      },
      {
        trigger: ".main-description__friends",
        title: ".main-side__scroll--wrapper .side-title-friends",
        start: "top -20%",
        end: "top -150%",
      },
      {
        trigger: ".main-description__search",
        title: ".main-side__scroll--wrapper .side-title-search",
        end: "top -100%",
      },
      {
        trigger: ".main-description__news",
        title: ".main-side__scroll--wrapper .side-title-news",
        end: "top -100%",
      },
      {
        trigger: ".main-description__profile",
        title: ".main-side__scroll--wrapper .side-title-profile",
        end: "top -100%",
      },
      {
        trigger: ".main-description__slot",
        title: ".main-side__scroll--wrapper .side-title-slot",
        end: "top -100%",
      },
    ];

    sections.forEach(({ trigger, title, start, end }) => {
      gsap.to(title, {
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: trigger,
          scroller: "body",
          start: start ?? "top 0",
          end: end,
          scrub: true,
          onLeave: () => gsap.to(title, { opacity: 0, duration: 0.5 }),
          onEnterBack: () => gsap.to(title, { opacity: 1, duration: 0.5 }),
          onLeaveBack: () => gsap.to(title, { opacity: 0, duration: 0.5 }),
        },
      });
    });

    gsap.to(".nav-scroll__pin", {
      x: () =>
        document.querySelector(".nav-scroll").offsetWidth -
        document.querySelector(".nav-scroll__pin").offsetWidth,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    const welcomeImagesTimeline = gsap.timeline({ repeat: -1 });

    gsap.utils
      .toArray(".phone-flow__welcome--images-img")
      .forEach((img, index) => {
        welcomeImagesTimeline.fromTo(
          img,
          { display: "none" },
          { display: "block", duration: 1 },
          index
        );

        welcomeImagesTimeline.to(
          img,
          { display: "none", display: "block" },
          index + 1
        );
      });

    const welcomeTimeline = gsap.timeline();
    welcomeTimeline.to(
      ".phone-flow__welcome",
      {
        top: "0%",
        transform: "translate(0,0vh)",
        scrollTrigger: {
          trigger: ".main-description__feed",
          scroller: "body",
          end: "top center",
          scrub: 2,
        },
      },
      "<"
    );

    welcomeTimeline.to(".phone-media-images", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".main-description__feed",
        scroller: "body",
        end: "top center",
        scrub: 2,
      },
    });

    const feedTimeline = gsap.timeline();
    feedTimeline.to(
      ".phone-flow__feed",
      {
        transform: "translate(0,-100vh)",
        scrollTrigger: {
          trigger: ".main-description__friends",
          scroller: "body",
          start: "top 110%",
          end: "top -100%",
          scrub: 2,
        },
      },
      "<"
    );
    feedTimeline.to(
      ".phone-flow__welcome",
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ".main-description__friends",
          scroller: "body",
          start: "top 80%",
          end: "top center",
          scrub: 2,
        },
      },
      "<"
    );
    feedTimeline.to(".phone-flow__navbar", {
      transform: "translate(0, 0vh)",
      scrollTrigger: {
        trigger: ".main-description__friends",
        scroller: "body",
        start: "top 80%",
        end: "top 90%",
        scrub: 2,
      },
    });

    const friendsTimeline = gsap.timeline();

    friendsTimeline.to(
      ".phone-flow__friends",
      {
        transform: "translate(0,0vh)",
        scrollTrigger: {
          trigger: ".main-description__search",
          scroller: "body",
          start: "top 180%",
          end: "top center",
          scrub: 2,
        },
      },
      "<"
    );

    friendsTimeline.to(
      ".phone-flow__feed",
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ".main-description__search",
          scroller: "body",
          start: "top 160%",
          end: "top center",
          scrub: 2,
        },
      },
      "<"
    );

    friendsTimeline.to(".phone-flow__navbar", {
      zIndex: "0",
      scrollTrigger: {
        trigger: ".main-description__search",
        scroller: "body",
        start: "top 200%",
        end: "top center",
        scrub: 2,
      },
    });

    const searchTimeline = gsap.timeline();
    searchTimeline.to(
      ".phone-flow__search",
      {
        transform: "translate(0,0vh)",
        scrollTrigger: {
          trigger: ".main-description__news",
          scroller: "body",
          start: "top 100%",
          end: "top center",
          scrub: 2,
        },
      },
      "<"
    );
    searchTimeline.to(".phone-flow__friends", {
      opacity: "0",
      scrollTrigger: {
        trigger: ".main-description__news",
        scroller: "body",
        start: "top 80%",
        end: "top center",
        scrub: 2,
      },
    });

    const newsTimeline = gsap.timeline();
    newsTimeline.to(
      ".phone-flow__news",
      {
        transform: "translate(0,0vh)",
        scrollTrigger: {
          trigger: ".main-description__profile",
          scroller: "body",
          start: "top 100%",
          end: "top center",
          scrub: 2,
        },
      },
      "<"
    );
    newsTimeline.to(".phone-flow__search", {
      opacity: "0",
      scrollTrigger: {
        trigger: ".main-description__profile",
        scroller: "body",
        start: "top 80%",
        end: "top center",
        scrub: 2,
      },
    });

    const profileTimeline = gsap.timeline();
    profileTimeline.to(
      ".phone-flow__profile",
      {
        transform: "translate(0,0vh)",
        scrollTrigger: {
          trigger: ".main-description__slot",
          scroller: "body",
          start: "top 100%",
          end: "top center",
          scrub: 2,
        },
      },
      "<"
    );
    profileTimeline.to(".phone-flow__news", {
      opacity: "0",
      scrollTrigger: {
        trigger: ".main-description__slot",
        scroller: "body",
        start: "top 80%",
        end: "top center",
        scrub: 2,
      },
    });

    const slotsTimeline = gsap.timeline();
    slotsTimeline.to(
      ".phone-flow__slots",
      {
        transform: "translate(0,0vh)",
        scrollTrigger: {
          trigger: ".main-description__slot",
          scroller: "body",
          start: "top 0",
          end: "top -50%",
          scrub: 2,
        },
      },
      "<"
    );
    slotsTimeline.to(
      ".phone-flow__profile",
      {
        opacity: "0",
        scrollTrigger: {
          trigger: ".main-description__slot",
          scroller: "body",
          start: "top -20%",
          end: "top -50%",
          scrub: 2,
        },
      },
      "<"
    );

    slotsTimeline.to(
      ".phone-burst-box",
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".wide-space",
          start: "top 10%",
          end: "top 10%",
          scroller: "body",
          scrub: 2,
        },
      },
      "<"
    );
    slotsTimeline.to(
      ".phone-burst-box__image1,.phone-burst-box__image2,.phone-burst-box__image3,.phone-burst-box__image4,.phone-burst-box__image5,.phone-burst-box__image6",
      {
        borderRadius: "0px",
        scrollTrigger: {
          trigger: ".wide-space",
          start: "top 0",
          end: "top 0",
          scroller: "body",
          scrub: 2,
        },
      }
    );

    gsap.to(".phone-mockup, .phone-notch,.phone-flow__navbar", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".wide-space",
        start: "top 0",
        end: "top 0",
        scroller: "body",
        scrub: 2,
      },
    });
    gsap.to(".phone-flow__slots", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".wide-space",
        start: "top 0",
        end: "top -50%",
        scroller: "body",
        scrub: 2,
      },
    });

    const burstTimeline1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".wide-space",
        scroller: "body",
        start: "top 10%",
        end: "top -150%",
        scrub: 2,
      },
    });

    burstTimeline1.to(".phone-burst-box__image1", {
      transform: "translate(6vw,64vh) rotateZ(12deg)",
    });
    burstTimeline1.to(".phone-burst-box__image1", {
      transform: "translate(4vw,55vh) rotateZ(0deg)",
    });

    const burstTimeline2 = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".wide-space",
        scroller: "body",
        start: "top 10%",
        end: "top -150%",
        scrub: 2,
      },
    });

    burstTimeline2.to(".phone-burst-box__image2", {
      transform: "translate(0vw,42vh) rotateZ(-22deg)",
    });
    burstTimeline2.to(".phone-burst-box__image2", {
      transform: "translate(12vw,46vh) rotateZ(0deg)",
    });
    burstTimeline2.to(".phone-burst-box__image2", {
      transform: "translate(16vw,48vh) rotateZ(22deg)",
    });
    burstTimeline2.to(".phone-burst-box__image2", {
      transform: "translate(20vw,50vh) rotateZ(0deg)",
    });

    const burstTimeline3 = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".wide-space",
        scroller: "body",
        start: "top 10%",
        end: "top -150%",
        scrub: 2,
      },
    });
    burstTimeline3.to(".phone-burst-box__image3", {
      transform: "translate(25vw,20vh)",
    });

    const burstTimeline4 = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".wide-space",
        scroller: "body",
        start: "top 10%",
        end: "top -150%",
        scrub: 2,
      },
    });
    burstTimeline4.to(".phone-burst-box__image4", {
      transform: "translate(-1.15vw,2.88vh) rotateZ(-10deg)",
    });
    burstTimeline4.to(".phone-burst-box__image4", {
      transform: "translate(-2.3vw,12.3vh) rotateZ(13.2deg)",
    });
    burstTimeline4.to(".phone-burst-box__image4", {
      transform: "translate(10vw,30vh) rotateZ(0deg)",
    });

    const burstTimeline5 = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".wide-space",
        scroller: "body",
        start: "top 10%",
        end: "top -150%",
        scrub: 2,
      },
    });
    burstTimeline5.to(".phone-burst-box__image5", {
      transform: "translate(3.3vw,2.6vh) rotateZ(29deg)",
    });
    burstTimeline5.to(".phone-burst-box__image5", {
      transform: "translate(36vw,28vh) rotateZ(0deg)",
    });

    const burstTimeline6 = gsap.timeline({
      delay: 3,
      scrollTrigger: {
        trigger: ".wide-space",
        scroller: "body",
        start: "top 10%",
        end: "top -150%",
        scrub: 2,
      },
    });
    burstTimeline6.to(".phone-burst-box__image6", {
      transform: "translate(3vw,-0.1vh) rotateZ(26deg)",
    });
    burstTimeline6.to(".phone-burst-box__image6", {
      transform: "translate(34vw,-10vh) rotateZ(0deg)",
    });
  },
  addListeners: function () {
    document.addEventListener("DOMContentLoaded", this.initializeAnimations);
  },
};
myAnimations.addListeners();
