(() => {
    const refs = {
      openModalBtn: document.querySelectorAll("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    console.log(refs.openModalBtn);
  
    refs.openModalBtn.forEach(function (btn) {
      btn.addEventListener("click", toggleModal);
    });
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("backdrop--is-hidden");
      document.body.classList.toggle("modal-open");
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelectorAll("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    console.log(refs.openModalBtn);
  
    refs.openModalBtn.forEach(function (btn) {
      btn.addEventListener("click", toggleModal);
    });
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("backdrop--is-hidden");
      document.body.classList.toggle("modal-open");
    }
  })();

    // JS FOR REVIEWS

    window.addEventListener('DOMContentLoaded', () => {
      const slides = document.querySelectorAll('.customer-wrapper__header'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next');
    
      let slideIndex = 1;
    
      showSlides();
    
      function showSlides(n) {
        if (n > slides.length) {
          slideIndex = 1;
        }
    
        if (n < 1) {
          slideIndex = slides.length;
        }
    
        slides.forEach(item => {
          item.style.display = 'none';
        });
    
        slides[slideIndex - 1].style.display = 'block';
      }
    
      function plusSlides(n) {
        showSlides((slideIndex += n));
      }
    
      prev.addEventListener('click', () => {
        plusSlides(-1);
      });
    
      next.addEventListener('click', () => {
        plusSlides(1);
      });
    });
    
    (() => {
      const refs = {
        openModalBtn: document.querySelector('[data-modal-open-icecream]'),
        closeModalBtn: document.querySelector('[data-modal-close-icecream]'),
        modal: document.querySelector('[data-modal-icecream]'),
      };
    
      refs.openModalBtn.addEventListener('click', toggleModal);
      refs.closeModalBtn.addEventListener('click', toggleModal);
    
      function toggleModal() {
        refs.modal.classList.toggle('modal--is-hidden');
      }
    })();
    (() => {
      const refs = {
        openModalBtn: document.querySelector('[data-modal-open-icecoffee]'),
        closeModalBtn: document.querySelector('[data-modal-close-icecoffee]'),
        modal: document.querySelector('[data-modal-icecoffee]'),
      };
    
      refs.openModalBtn.addEventListener('click', toggleModal);
      refs.closeModalBtn.addEventListener('click', toggleModal);
    
      function toggleModal() {
        refs.modal.classList.toggle('modal--is-hidden');
      }
    })();
    () => {
      const refs = {
        openModalBtn: document.querySelector('[data-modal-open-milkshake]'),
        closeModalBtn: document.querySelector('[data-modal-close-milkshake]'),
        modal: document.querySelector('[data-modal-milkshake]'),
      };
    
      refs.openModalBtn.addEventListener('click', toggleModal);
      refs.closeModalBtn.addEventListener('click', toggleModal);
    
      function toggleModal() {
        refs.modal.classList.toggle('modal--is-hidden');
      }
    };
  
  