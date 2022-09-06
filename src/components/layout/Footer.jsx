export default function Footer() {
  
  const footerYear = new Date().getFullYear()

  return (
    <footer className="footer bg-gray-700 text-primary-content py-2 footer-center mt-20">
      <p>Copyright &copy; {footerYear}</p>
    </footer>
  )
}
