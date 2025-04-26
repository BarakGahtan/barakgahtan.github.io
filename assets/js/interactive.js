document.addEventListener('DOMContentLoaded', function() {
  // Add scrolled class to masthead when page is scrolled
  const masthead = document.querySelector('.masthead');

  function handleScroll() {
    if (window.pageYOffset > 0) {
      masthead.classList.add('scrolled');
    } else {
      masthead.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  // Add active class to current nav item
  const currentPath = window.location.pathname;
  document.querySelectorAll('.greedy-nav .visible-links a').forEach(link => {
    if (link.getAttribute('href') === currentPath ||
        (link.getAttribute('href') !== '/' && currentPath.includes(link.getAttribute('href')))) {
      link.classList.add('active');
    }
  });

  // Back to top button
  const backToTopButton = document.createElement('a');
  backToTopButton.href = '#';
  backToTopButton.classList.add('back-to-top');
  backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Add smooth scrolling to all anchor links
  document.querySelectorAll('a[href^="#"]:not(.back-to-top)').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector('.greedy-nav button.menu-toggle');
  const visibleLinks = document.querySelector('.greedy-nav .visible-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      visibleLinks.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!menuToggle.contains(e.target) && !visibleLinks.contains(e.target)) {
        visibleLinks.classList.remove('show');
      }
    });

    // Handle dropdown on mobile
    document.querySelectorAll('.greedy-nav .visible-links li.has-dropdown').forEach(dropdown => {
      dropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          this.classList.toggle('open');
          const submenu = this.querySelector('.dropdown');
          if (submenu) {
            if (submenu.style.maxHeight) {
              submenu.style.maxHeight = null;
            } else {
              submenu.style.maxHeight = submenu.scrollHeight + "px";
            }
          }
        }
      });
    });
  }

  // Initialize accordions
  const accordions = document.querySelectorAll('.accordion-header');
  if (accordions.length > 0) {
    accordions.forEach(accordion => {
      accordion.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.classList.contains('active')) {
          content.classList.remove('active');
        } else {
          content.classList.add('active');
        }
      });
    });
  }

  // Initialize tabs
  const tabLinks = document.querySelectorAll('.tab-link');
  if (tabLinks.length > 0) {
    tabLinks.forEach(link => {
      link.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');

        // Remove active class from all tabs and contents
        document.querySelectorAll('.tab-link').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));

        // Add active class to current tab and content
        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
      });
    });

    // Activate first tab by default
    if (tabLinks.length > 0) {
      tabLinks[0].click();
    }
  }

  // Add animation classes to elements when they enter viewport
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  function checkIfInView() {
    const windowHeight = window.innerHeight;
    const windowTopPosition = window.scrollY;
    const windowBottomPosition = (windowTopPosition + windowHeight);

    animatedElements.forEach(function(element) {
      const elementHeight = element.offsetHeight;
      const elementTopPosition = element.getBoundingClientRect().top + windowTopPosition;
      const elementBottomPosition = (elementTopPosition + elementHeight);

      // Check if element is in viewport
      if ((elementBottomPosition >= windowTopPosition) &&
          (elementTopPosition <= windowBottomPosition)) {
        element.classList.add('in-view');
      }
    });
  }

  // Run on page load
  checkIfInView();

  // Run on scroll
  window.addEventListener('scroll', checkIfInView);

  // Add tooltips functionality
  const tooltips = document.querySelectorAll('.tooltip');
  if (tooltips.length > 0) {
    tooltips.forEach(tooltip => {
      const tooltipText = tooltip.querySelector('.tooltip-text');

      // Position tooltip based on viewport edges
      if (tooltipText) {
        tooltip.addEventListener('mouseenter', function() {
          const rect = tooltipText.getBoundingClientRect();

          // Check if tooltip goes off screen to the right
          if (rect.right > window.innerWidth) {
            tooltipText.style.left = 'auto';
            tooltipText.style.right = '0';
            tooltipText.style.marginLeft = '0';
          }

          // Check if tooltip goes off screen to the left
          if (rect.left < 0) {
            tooltipText.style.left = '0';
            tooltipText.style.right = 'auto';
            tooltipText.style.marginLeft = '0';
          }
        });
      }
    });
  }
});