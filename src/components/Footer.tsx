import amiami from "@/assets/amiami.jpg"
import solaris from "@/assets/solaris.jpg"
import cdj from "@/assets/cdj.png"

function Footer() {
  return (
    <footer>
      <div className="footerUp flex flex-row justify-evenly">
        <div>
          <h2>Alshop</h2>
          <p>Real products(not)</p>
          <p>Real prices(not...)</p>
        </div>
        <div>
          <h2>Important</h2>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <h2>Help</h2>
          <p>FAQ</p>
          <p>Contact us</p>
          <p>Shipping</p>
        </div>
      </div>
      <div className="footerDown flex justify-evenly">
        <div className="text-end text-muted-foreground">
          <p>© 2026 Alshop. No rights reserved.</p>
          <p>
            I do not own or sell any of these products. This is merely a
            development project.
          </p>
        </div>
        <div className="socials">
          <ul className="flex flex-row gap-2">
            <li>
              <a href="https://www.amiami.com/eng/">
                <img
                  src={amiami}
                  alt="amiami link"
                  className="w-8 rounded-full"
                />
              </a>
            </li>
            <li>
              <a href="https://solarisjapan.com/">
                <img
                  src={solaris}
                  alt="solarisjapan link"
                  className="w-8 rounded-full"
                />
              </a>
            </li>
            <li>
              <a href="https://www.cdjapan.co.jp/">
                <img
                  src={cdj}
                  alt="cdjapan link"
                  className="w-8 rounded-full"
                />
              </a>
            </li>
          </ul>
          <p className="text-muted-foreground">Inspiration sites</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
