import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>W cieniu gry – Ebook</title>
        <meta name="description" content="Psychologiczny thriller z duchowym przesłaniem. Pobierz ebook już teraz!" />
      </Head>
      <main style={{ padding: "2rem", fontFamily: "Arial" }}>
        <h1>📘 W cieniu gry</h1>
        <p>Thriller psychologiczny, który zmienia sposób myślenia.</p>
        <p>Zanurz się w historię pełną symboliki, napięcia i duchowego przesłania.</p>
        <a href="/W_cieniu_gry_FINAL_z_okladka.pdf" download style={{ 
          display: "inline-block", 
          padding: "1rem 2rem", 
          backgroundColor: "#111", 
          color: "#fff", 
          borderRadius: "8px", 
          marginTop: "1rem",
          textDecoration: "none"
        }}>
          Pobierz ebook (PDF)
        </a>
      </main>
    </>
  )
}
