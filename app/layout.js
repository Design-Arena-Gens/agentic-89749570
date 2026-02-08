export const metadata = {
  title: 'Palette Pastello Vivace',
  description: 'Generatore di palette colori pastello con energia e creatività',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
