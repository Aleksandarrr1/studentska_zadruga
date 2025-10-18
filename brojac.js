const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / 100); // koliko se dodaje

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    const handleScroll = () => {
      const rect = counter.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        updateCount();
        window.removeEventListener('scroll', handleScroll); // samo jednom
      }
    };

    window.addEventListener('scroll', handleScroll);
  });