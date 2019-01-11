<template>
  <div class="app">

        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
          <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">Afrizal</a>
            <button class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item mx-0 mx-lg-1">
                  <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
                </li>
                <li class="nav-item mx-0 mx-lg-1">
                  <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#skill">Skill</a>
                </li>
                <li class="nav-item mx-0 mx-lg-1">
                  <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a>
                </li>
                <li class="nav-item mx-0 mx-lg-1">
                  <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="https://afrizal-my.xyz">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <!-- Header -->
        <header class="masthead bg-primary text-white text-center">
          <div class="container">
            <img class="img-fluid mb-5 d-block mx-auto rounded-circle" src="../../assets/img/2.png" alt="">
            <h1 class="text-uppercase mb-0">Afrizal Muhammad Yasin</h1>
            <hr class="star-light">
            <h2 class="font-weight-light mb-0">Web Developer - Junior Networking - Linux & Cloud Enthusiast</h2>
          </div>
        </header>

        <!-- About Section -->
        <section class="text-black mb-0" id="about">
          <div class="container">
            <h2 class="text-center text-uppercase text-black">About</h2>
            <hr class="star-dark mb-5">
            <div class="row">
              <div class="col-lg-4 ml-auto">
                <p class="lead text-uppercase text-black"><h3>Description</h3></p>
                <p class="">hello, I'm Afrizal. I am a web developer who focuses on the backend, for example: PHP, API, JSON. And I'm also a fan of Linux distro distributions that are open source. Besides that I also like things related to computer networks, such as: Cloud, networking, VM. I come from the city of Surabaya, East Java Province, Indonesia.</p>
              </div>
              <div class="col-lg-4 mr-auto">
                  <p class="lead text-uppercase text-black"><h3>Education</h3></p>
                <p class="">Public Elementary School<span><br>SDN Babat Jerawat 1, Surabaya, EastJava, Indonesia<br>2005-2011</span></p>
                <p class="">Public Junior High School<span><br>SMPN 14, Surabaya, EastJava, Indonesia<br>2011-2014</span></p>
                <p class="">Vocational High School<span><br>Majoring in computer and network engineering<br>SMK Antartika, Surabaya, EastJava, Indonesia<br>2014-2017</span></p>
                <p class="">Undergraduate Programs<span><br>Universitas Pembangunan Nasional "<i>Veteran</i>" Jawa Timur, Surabaya, EastJava, Indonesia<br>2017-Current</span></p>
              </div>
            </div>
          </div>
        </section>

        <!-- Skill Section -->
        <section id="skill">
      <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2>I Know, I do, I like</h2>
                <hr class="star-primary">
            </div>
        </div>
        <div class="row ">
          <div class="col-sm-6 col-md-3">
              <div class="fas fa-network-wired text-center w-100" style="font-size:60px;"></div>
            <div class="hobby-item">
              <h4>Junior Networking</h4>
              <p>I have known computer networks since elementary school. Where in the past I studied computer networks in an internet cafe, and I accidentally logged in the network, a little nosy changing the network configuration. That's where I began to deepen computer network science</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="fab fa-soundcloud text-center w-100" style="font-size:60px;"></div>
            <div class="hobby-item">

              <h4>Cloud</h4>
              <p>I have known the cloud since I started vocational high school. Outside of school hours I sometimes learn about cloud technology whether it's about deployment, web server, and more. And in the future I will deepen about the cloud, for example the API obtained from the cloud for the face recognition process, I implement it through the web and mobile.</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
              <div class="fas fa-server text-center w-100" style="font-size:60px;"></div>
            <div class="hobby-item">
              <h4>Backend Developer</h4>
              <p>I learned and deepened about backend developers since vocational high school. outside of school time I learned about backend, I used to learn to use the PHP programming language. In PHP I deepened about OOP, PDO after that I used a framework like Laravel, CodeIgniter. in this college I will learn about docker containers.</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
              <div class="fab fa-linux text-center w-100" style="font-size:60px;"></div>
            <div class="hobby-item">
              <h4>Linux Enthusiast</h4>
              <p>I am a big fan of the Linux operating system. Because of what? because Linux is open source and runs on any device. My laptop uses the Ubuntu distro that I use to work on projects. Because this OS is easier to use and I like it more than others.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

        <!-- Portfolio Grid Section -->
    <section class="bg-primary portfolio" id="portfolio">
      <div class="container">
        <h2 class="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        <hr class="star-light mb-5">
        <h4 class="text-center"><i>Still working on editing</i><br>to know more about visiting my other website<br><a href="https://afrizal-my.xyz" class="text-white">click here!</a></h4>
        <!--
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i class="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/cabin.png" alt="">
            </a>
          </div>
          <div class="col-md-6 col-lg-4">
            <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i class="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/cake.png" alt="">
            </a>
          </div>
          <div class="col-md-6 col-lg-4">
            <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i class="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/circus.png" alt="">
            </a>
          </div>
          <div class="col-md-6 col-lg-4">
            <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i class="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/game.png" alt="">
            </a>
          </div>
          <div class="col-md-6 col-lg-4">
            <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i class="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/safe.png" alt="">
            </a>
          </div>
          <div class="col-md-6 col-lg-4">
            <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
              <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i class="fas fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/submarine.png" alt="">
            </a>
          </div>
        </div> -->
      </div>
    </section>



        <!-- Contact Section --
        <section id="contact">
          <div class="container">
            <h2 class="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
            <hr class="star-dark mb-5">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. --
                <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. --
                <form name="sentMessage" id="contactForm" novalidate="novalidate">
                  <div class="control-group">
                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Name</label>
                      <input class="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name.">
                      <p class="help-block text-danger"></p>
                    </div>
                  </div>
                  <div class="control-group">
                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Email Address</label>
                      <input class="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address.">
                      <p class="help-block text-danger"></p>
                    </div>
                  </div>
                  <div class="control-group">
                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Phone Number</label>
                      <input class="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number.">
                      <p class="help-block text-danger"></p>
                    </div>
                  </div>
                  <div class="control-group">
                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Message</label>
                      <textarea class="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                      <p class="help-block text-danger"></p>
                    </div>
                  </div>
                  <br>
                  <div id="success"></div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>-->

        <!-- Footer -->
        <footer class="footer text-center">
          <div class="container">
            <div class="row">
              <div class="col-md-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Location</h4>
            <p class="lead mb-0">Pondok benowo indah, Surabaya
              <br>east java, Indonesia 60197</p>
          </div>
              <div class="col-md-4 mb-5 mb-lg-0">
                <h4 class="text-uppercase mb-4">Around the Web</h4>
                <ul class="list-inline mb-0">
                  <li class="list-inline-item">
                    <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i class="fab fa-fw fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i class="fab fa-fw fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i class="fab fa-fw fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i class="fab fa-fw fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i class="fab fa-fw fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <h4 class="text-uppercase mb-4">Quotes</h4>
                <p class="lead mb-0">“<i>Technology makes things faster and more cost-effective, but it’s not perfect. It requires you to be as flexible as you can be.</i>” — John Phillips</p>
              </div>
            </div>
          </div>
        </footer>

        <div class="copyright py-4 text-center text-white">
          <div class="container">
            <small>Copyright &copy; Afrizal Muhammad yasin 2019</small>
          </div>
        </div>

        <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
        <div class="scroll-to-top d-lg-none position-fixed ">
          <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
            <i class="fa fa-chevron-up"></i>
          </a>
        </div>

        <!-- Portfolio Modals -->

        <!-- Portfolio Modal 1 -->
        <div class="portfolio-modal mfp-hide" id="portfolio-modal-1">
          <div class="portfolio-modal-dialog bg-white">
            <a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
              <i class="fa fa-3x fa-times"></i>
            </a>
            <div class="container text-center">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <h2 class="text-secondary text-uppercase mb-0">Project Name</h2>
                  <hr class="star-dark mb-5">
                  <img class="img-fluid mb-5" src="img/portfolio/cabin.png" alt="">
                  <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                    <i class="fa fa-close"></i>
                    Close Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Portfolio Modal 2 -->
        <div class="portfolio-modal mfp-hide" id="portfolio-modal-2">
          <div class="portfolio-modal-dialog bg-white">
            <a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
              <i class="fa fa-3x fa-times"></i>
            </a>
            <div class="container text-center">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <h2 class="text-secondary text-uppercase mb-0">Project Name</h2>
                  <hr class="star-dark mb-5">
                  <img class="img-fluid mb-5" src="img/portfolio/cake.png" alt="">
                  <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                    <i class="fa fa-close"></i>
                    Close Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Portfolio Modal 3 -->
        <div class="portfolio-modal mfp-hide" id="portfolio-modal-3">
          <div class="portfolio-modal-dialog bg-white">
            <a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
              <i class="fa fa-3x fa-times"></i>
            </a>
            <div class="container text-center">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <h2 class="text-secondary text-uppercase mb-0">Project Name</h2>
                  <hr class="star-dark mb-5">
                  <img class="img-fluid mb-5" src="img/portfolio/circus.png" alt="">
                  <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                    <i class="fa fa-close"></i>
                    Close Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Portfolio Modal 4 -->
        <div class="portfolio-modal mfp-hide" id="portfolio-modal-4">
          <div class="portfolio-modal-dialog bg-white">
            <a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
              <i class="fa fa-3x fa-times"></i>
            </a>
            <div class="container text-center">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <h2 class="text-secondary text-uppercase mb-0">Project Name</h2>
                  <hr class="star-dark mb-5">
                  <img class="img-fluid mb-5" src="img/portfolio/game.png" alt="">
                  <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                    <i class="fa fa-close"></i>
                    Close Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Portfolio Modal 5 -->
        <div class="portfolio-modal mfp-hide" id="portfolio-modal-5">
          <div class="portfolio-modal-dialog bg-white">
            <a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
              <i class="fa fa-3x fa-times"></i>
            </a>
            <div class="container text-center">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <h2 class="text-secondary text-uppercase mb-0">Project Name</h2>
                  <hr class="star-dark mb-5">
                  <img class="img-fluid mb-5" src="img/portfolio/safe.png" alt="">
                  <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                    <i class="fa fa-close"></i>
                    Close Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Portfolio Modal 6 -->
        <div class="portfolio-modal mfp-hide" id="portfolio-modal-6">
          <div class="portfolio-modal-dialog bg-white">
            <a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
              <i class="fa fa-3x fa-times"></i>
            </a>
            <div class="container text-center">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <h2 class="text-secondary text-uppercase mb-0">Project Name</h2>
                  <hr class="star-dark mb-5">
                  <img class="img-fluid mb-5" src="img/portfolio/submarine.png" alt="">
                  <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                    <i class="fa fa-close"></i>
                    Close Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  head: {
    script: [
      { src: './assets/js/freelancer.min.js' },
      { src: './assets/vendor/jquery/jquery.min.js' },
      { src: './assets/vendor/bootstrap/js/bootstrap.bundle.min.js' },
      { src: './assets/jquery-easing/jquery.easing.min.js' },
      { src: './assets/magnific-popup/jquery.magnific-popup.min.js' },
      { src: './assets/js/jqBootstrapValidation.js' },
      { src: './assets/js/contact_me.js' }
    ],
    link: [
      { rel: 'stylesheet', href: './assets/vendor/bootstrap/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: './assets/vendor/fontawesome-free/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css', integrity: 'sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/', crossorigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic' },
      { rel: 'stylesheet', href: './assets/vendor/magnific-popup/magnific-popup.css' },
      { rel: 'stylesheet', href: './assets/css/freelancer.min.css' }
    ]
  },
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
