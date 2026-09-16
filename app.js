/**
 * OTUS Soluções Auditivas - Interatividades & Micro-animações
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Atualização dinâmica do ano no rodapé
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Header Fixo & Transição ao Rolar a Página
  const siteHeader = document.getElementById('siteHeader');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Menu Mobile (Drawer & Overlay)
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const openDrawer = () => {
    mobileToggle.classList.add('active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileToggle.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeDrawer);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // 4. Carrossel de Depoimentos Interativo
  const carouselContainer = document.getElementById('testimonialsCarousel');
  if (carouselContainer) {
    const slides = carouselContainer.querySelectorAll('.testimonial-slide');
    const dots = carouselContainer.querySelectorAll('.dot-indicator');
    let currentIndex = 0;
    let autoPlayTimer = null;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      currentIndex = index;
    };

    const nextSlide = () => {
      const next = (currentIndex + 1) % slides.length;
      showSlide(next);
    };

    const startAutoplay = () => {
      stopAutoplay();
      autoPlayTimer = setInterval(nextSlide, 6500);
    };

    const stopAutoplay = () => {
      if (autoPlayTimer) clearInterval(autoPlayTimer);
    };

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const slideIdx = parseInt(dot.getAttribute('data-slide'), 10);
        showSlide(slideIdx);
        startAutoplay();
      });
    });

    carouselContainer.addEventListener('mouseenter', stopAutoplay);
    carouselContainer.addEventListener('mouseleave', startAutoplay);

    startAutoplay();
  }

  // 5. Acordeão de Dúvidas Frequentes (FAQ)
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha outros itens para comportamento accordion limpo
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          otherItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      // Alterna o item atual
      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Abre a primeira pergunta por padrão para incentivar a leitura
  if (faqItems.length > 0) {
    const firstItem = faqItems[0];
    const firstBtn = firstItem.querySelector('.faq-question');
    const firstAnswer = firstItem.querySelector('.faq-answer');
    firstItem.classList.add('active');
    firstBtn.setAttribute('aria-expanded', 'true');
    firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
  }

  // 6. ScrollSpy / Destaque de Link de Navegação
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.style.color = 'var(--color-primary)';
          } else {
            link.style.color = '';
          }
        });
      }
    });
  };
  window.addEventListener('scroll', highlightNav, { passive: true });
});
