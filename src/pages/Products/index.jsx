import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
];

const styles = {
  page: {
 background: `
      radial-gradient(ellipse at 50% 0%, #222 0%, #000 80%),
      repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, transparent 2px, transparent 40px),
      repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px)
    `,    minHeight: "100vh",
    width: "100vw",
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  },
  banner: {
    width: "100vw",
    minHeight: "100vh",
    // background: `
    //   radial-gradient(ellipse at 50% 0%, #222 0%, #000 80%),
    //   repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, transparent 2px, transparent 40px),
    //   repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px)
    // `,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    padding: "0 24px",
    position: "relative",
    textAlign: "center",
    overflow: "hidden",
  },
  bannerBadge: {
    display: "inline-block",
    background: "#222",
    color: "#fff",
    fontWeight: 600,
    fontSize: "1rem",
    borderRadius: "20px",
    padding: "10px 28px",
    marginBottom: "32px",
    letterSpacing: "1px",
    marginTop: "24px",
    boxShadow: "0 2px 16px #0008",
  },
  bannerTitle: {
    fontSize: "4rem",
    fontWeight: 800,
    color: "#e3e6ee",
    marginBottom: "18px",
    lineHeight: 1.1,
    letterSpacing: "-2px",
    textShadow: "0 4px 32px #fff2",
  },
  bannerSubtitle: {
    fontSize: "3rem",
    fontWeight: 700,
    color: "#e3e6ee",
    marginBottom: "32px",
    lineHeight: 1.1,
    letterSpacing: "-1px",
    textShadow: "0 4px 32px #fff2",
  },
  bannerDesc: {
    fontSize: "1.25rem",
    color: "#bfc4d1",
    marginBottom: "40px",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: 1.6,
    textShadow: "0 2px 16px #fff2",
  },
  bannerButton: {
    background: "#fff",
    color: "#222",
    fontWeight: 600,
    fontSize: "1.15rem",
    borderRadius: "10px",
    padding: "16px 38px",
    textDecoration: "none",
    boxShadow: "0 2px 8px #fff2",
    border: "none",
    cursor: "pointer",
    marginTop: "12px",
    transition: "background 0.2s, color 0.2s",
    display: "inline-block",
  },
  section: {
    marginBottom: "48px",
  },
  featuresRow: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "0 40px",
    display: "flex",
    gap: "40px",
  },
  featureCard: {
    flex: 1,
    background: "rgba(30,30,30,0.98)",
    border: "2px solid #C0C0C0",
    borderRadius: "28px",
    padding: "40px 32px",
    boxSizing: "border-box",
    boxShadow: "0 2px 24px #000a",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    color: "#fff",
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    padding: "40px 0",
    maxWidth: "1200px",
    margin: "40px auto",
    border: "2px solid #C0C0C0",
    borderRadius: "28px",
    boxSizing: "border-box",
    boxShadow: "0 2px 32px #000a",
    background: "#000",
  },
  left: {
    flex: 1,
    padding: "0 48px",
    maxWidth: "540px",
  },
  badge: {
    display: "inline-block",
    background: "#222",
    color: "#fff",
    fontWeight: 600,
    fontSize: "1rem",
    borderRadius: "20px",
    padding: "8px 20px",
    marginBottom: "24px",
    letterSpacing: "1px",
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: 700,
    marginBottom: "18px",
    lineHeight: 1.1,
  },
  desc: {
    fontSize: "1.15rem",
    color: "#ccc",
    marginBottom: "32px",
    lineHeight: 1.6,
  },
  button: {
    display: "inline-block",
    background: "#fff",
    color: "#000",
    fontWeight: 600,
    fontSize: "1.1rem",
    borderRadius: "8px",
    padding: "14px 28px",
    textDecoration: "none",
    marginTop: "12px",
    boxShadow: "0 2px 8px #0002",
    transition: "background 0.2s, color 0.2s",
  },
  buttonHover: {
    background: "#222",
    color: "#fff",
  },
  right: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "340px",
    height: "420px",
    position: "relative",
    overflow: "hidden",
    borderRadius: "24px",
    background: "#222",
    boxShadow: "0 2px 32px #000a",
  },
  slider: {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  slideImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "18px",
    boxShadow: "0 2px 12px #0006",
    filter: "grayscale(100%)",
    transition: "opacity 0.6s, filter 0.3s",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0,
  },
  slideImgActive: {
    opacity: 1,
    filter: "grayscale(0%)",
    zIndex: 2,
  },
};

export default function ProductsHero() {
  const [buttonHover, setButtonHover] = useState(false);
  const [offset, setOffset] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setOffset((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div style={styles.page}>
      {/* Banner Section - Full page, shiny black gradient with subtle pattern */}
      <section style={styles.banner}>
        <div style={styles.bannerBadge}>CREATE A STUNNING WEBSITE</div>
        <div style={styles.bannerTitle}>No-Code</div>
        <div style={styles.bannerSubtitle}>Website Builder</div>
        <div style={styles.bannerDesc}>
          Slides is a fast, intuitive website builder to generate beautiful, animated
          websites without a single line of coding. Choose from hundreds of premade UI
          blocks or use a template, then just drag and drop them into place.
        </div>
        <button style={styles.bannerButton}>Open Editor</button>
      </section>

      {/* Section 1: Hero with silver border */}
      <section style={styles.hero}>
        <div style={styles.left}>
          <div style={styles.badge}>SLIDE & SCROLL UX</div>
          <div style={styles.title}>Fluid scroll & slide</div>
          <div style={styles.desc}>
            Seamless animations are pre-built into all Slides pages, whether you want
            your website to{" "}
            <span
              style={{
                background: "#fff",
                color: "#000",
                borderRadius: "8px",
                padding: "2px 8px",
                fontWeight: 600,
              }}
            >
              Slide
            </span>{" "}
            <span
              style={{
                background: "#222",
                color: "#fff",
                borderRadius: "8px",
                padding: "2px 8px",
                fontWeight: 600,
                marginLeft: "6px",
              }}
            >
              Scroll
            </span>
            . Slide is best for presentations, scroll is best for everything else.
          </div>
          <a
            href="#"
            style={
              buttonHover
                ? { ...styles.button, ...styles.buttonHover }
                : styles.button
            }
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            Try for Free in The Editor &rarr;
          </a>
        </div>
        <div style={styles.right}>
          <div style={styles.slider}>
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`slide-${i}`}
                style={{
                  ...styles.slideImg,
                  ...(i === offset ? styles.slideImgActive : {}),
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Two-column features (no outside border, just cards) */}
      <div style={styles.featuresRow}>
        {/* Left Card */}
        <div style={styles.featureCard}>
          <div
            style={{
              display: "inline-block",
              background: "#222",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1rem",
              borderRadius: "20px",
              padding: "8px 20px",
              marginBottom: "24px",
              letterSpacing: "1px",
            }}
          >
            LIGHT & DARK THEMES
          </div>
          <div
            style={{
              fontSize: "2.2rem",
              fontWeight: 700,
              marginBottom: "18px",
              lineHeight: 1.1,
            }}
          >
            Beautiful themes for
            <br />
            both night and day
          </div>
          <div style={{ display: "flex", gap: "12px", marginBottom: "18px" }}>
            <button
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "none",
                background: "rgba(255,255,255,0.2)",
                color: "#fff",
                fontSize: "1.3rem",
                cursor: "pointer",
                boxShadow: "0 2px 8px #0002",
              }}
            >
              &#8592;
            </button>
            <button
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "none",
                background: "rgba(255,255,255,0.2)",
                color: "#fff",
                fontSize: "1.3rem",
                cursor: "pointer",
                boxShadow: "0 2px 8px #0002",
              }}
            >
              &#8594;
            </button>
          </div>
          <div
            style={{
              fontSize: "1.1rem",
              color: "#bbb",
              marginBottom: "24px",
              lineHeight: 1.6,
            }}
          >
            Whichever theme you choose in the website builder, you can pick either a{" "}
            <span
              style={{
                background: "#fff",
                color: "#222",
                borderRadius: "8px",
                padding: "2px 8px",
                fontWeight: 600,
              }}
            >
              Light
            </span>{" "}
            <span
              style={{
                background: "#222",
                color: "#fff",
                borderRadius: "8px",
                padding: "2px 8px",
                fontWeight: 600,
                marginLeft: "6px",
              }}
            >
              Dark
            </span>{" "}
            version – and switch between them while building with a single click.
          </div>
          {/* Example image block */}
          <div
            style={{
              background: "#111",
              borderRadius: "16px",
              padding: "18px",
              marginTop: "12px",
              boxShadow: "0 2px 12px #0006",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
              alt="Theme Example"
              style={{
                width: "100%",
                borderRadius: "12px",
                marginBottom: "10px",
                objectFit: "cover",
              }}
            />
            <div style={{ color: "#fff", fontWeight: 600 }}>Emma Sort</div>
            <div style={{ color: "#bbb", fontSize: "0.95rem", marginBottom: "8px" }}>
              When weak and weary, when rest is gone and faith withered. There always remains a glimmer, a little fleeting fire.
            </div>
            <button
              style={{
                background: "#fff",
                color: "#222",
                borderRadius: "6px",
                padding: "6px 16px",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "0.95rem",
              }}
            >
              Browse Works
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div style={styles.featureCard}>
          <div
            style={{
              display: "inline-block",
              background: "#222",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1rem",
              borderRadius: "20px",
              padding: "8px 20px",
              marginBottom: "24px",
              letterSpacing: "1px",
            }}
          >
            CUSTOM DOMAIN NAME
          </div>
          <div
            style={{
              fontSize: "2.2rem",
              fontWeight: 700,
              marginBottom: "18px",
              lineHeight: 1.1,
            }}
          >
            Your website,
            <br />
            your domain
          </div>
          <div
            style={{
              fontSize: "1.1rem",
              color: "#bbb",
              marginBottom: "32px",
              lineHeight: 1.6,
            }}
          >
            Host your website with our free subdomain or connect your own custom domain in just a few clicks. An SSL certificate will be automatically applied to your domain within seconds.
          </div>
          <div
            style={{
              background: "#fff",
              color: "#222",
              borderRadius: "12px",
              padding: "18px 32px",
              fontWeight: 600,
              fontSize: "1.2rem",
              boxShadow: "0 2px 12px #0006",
              alignSelf: "flex-start",
            }}
          >
            hello-there
            <span style={{ color: "#bbb" }}>.slides.website</span>
          </div>
        </div>
      </div>
    </div>
  );
}