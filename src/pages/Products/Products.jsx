import React from "react";

const products = [
  {
    id: 1,
    name: "Slides Deck",
    desc: "Beautiful, minimal slide deck for creative presentations.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    id: 2,
    name: "Portfolio Kit",
    desc: "Showcase your work with elegant layouts.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  // Add more products as needed
];

const styles = {
  page: {
    background: "#000",
    color: "#fff",
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    minHeight: "100vh",
    margin: 0,
    paddingBottom: "40px",
  },
  header: {
    textAlign: "center",
    margin: "48px 0 32px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 700,
    letterSpacing: "2px",
    marginBottom: "12px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#ccc",
    margin: 0,
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "40px",
    padding: "0 32px 64px",
  },
  card: {
    background: "#111",
    border: "1px solid #fff",
    borderRadius: "16px",
    width: "340px",
    textDecoration: "none",
    color: "inherit",
    overflow: "hidden",
    boxShadow: "0 2px 24px #000a",
    transition: "transform 0.2s, box-shadow 0.2s",
    display: "flex",
    flexDirection: "column",
  },
  cardHover: {
    transform: "translateY(-8px) scale(1.03)",
    boxShadow: "0 8px 32px #fff2",
  },
  imgWrap: {
    width: "100%",
    height: "220px",
    overflow: "hidden",
    background: "#222",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "grayscale(100%)",
    transition: "filter 0.3s",
  },
  info: {
    padding: "24px 20px 20px",
  },
  name: {
    fontSize: "1.4rem",
    fontWeight: 600,
    margin: "0 0 10px",
    letterSpacing: "1px",
  },
  desc: {
    fontSize: "1rem",
    color: "#bbb",
    margin: 0,
  },
};

export default function Products() {
  // For hover effect, use React state
  const [hovered, setHovered] = React.useState(null);

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Products</h1>
        <p style={styles.subtitle}>Minimal, creative assets for designers & creators.</p>
      </header>
      <section style={styles.list}>
        {products.map((p) => (
          <a
            href={p.link}
            style={{
              ...styles.card,
              ...(hovered === p.id ? styles.cardHover : {}),
            }}
            key={p.id}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={styles.imgWrap}>
              <img
                src={p.img}
                alt={p.name}
                style={{
                  ...styles.img,
                  filter: hovered === p.id ? "grayscale(0%)" : "grayscale(100%)",
                }}
              />
            </div>
            <div style={styles.info}>
              <h2 style={styles.name}>{p.name}</h2>
              <p style={styles.desc}>{p.desc}</p>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}