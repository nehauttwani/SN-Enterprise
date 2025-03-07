class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer id="footer" class="footer">
    <div class="container">
      <div class="row gy-3">
        <div class="col-lg-3 col-md-6 d-flex">
          <i class="bi bi-geo-alt icon"></i>
          <div>
            <h4>Office Address</h4>
            <p>
              Nr. Gota Crossroads, off S.G Highway, Ahmedabad, Gujarat - 382481
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 d-flex">
          <i class="bi bi-geo-alt icon"></i>
          <div>
            <h4>Warehouse Address</h4>
            <p>
              Shed No.-1, Nr. Parul Bunglows<br />
              opp. Silver Oak College, S.G Highway, Gota<br />
              Ahmedabad, Gujarat, 382481-India
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 footer-links d-flex">
          <i class="bi bi-telephone icon"></i>
          <div>
            <h4>Reservations</h4>
            <p>
              <strong>Phone:</strong> +91 97278 89459<br />
              <strong>Email:</strong> nimeshshrey@gmail.com<br />
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 footer-links d-flex">
          <i class="bi bi-clock icon"></i>
          <div>
            <h4>Opening Hours</h4>
            <p>
              <strong>Mon-Sat: 11AM</strong> - 23PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>

        <!-- <div class="col-lg-3 col-md-6 footer-links">
          <h4>Follow Us</h4>
          <div class="social-links d-flex">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div> -->
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>sntileworld</span></strong
        >. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/ -->
      </div>
    </div>
  </footer>
    `;
  }
}

customElements.define('footer-component', Footer);