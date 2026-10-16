(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // header shrink on scroll
  const header = $('.site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  addEventListener('scroll', onScroll, { passive: true });

  // mobile menu
  const menu = $('.mobile-menu');
  const openBtn = $('.burger');
  const closeBtn = $('.mobile-menu .close');
  const toggle = (open) => {
    menu.classList.toggle('open', open);
    openBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };
  openBtn.addEventListener('click', () => toggle(true));
  closeBtn.addEventListener('click', () => toggle(false));
  $$('.mobile-menu a').forEach((a) => a.addEventListener('click', () => toggle(false)));
  addEventListener('keydown', (e) => e.key === 'Escape' && toggle(false));

  // scroll reveal
  const items = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach((el, i) => { el.style.setProperty('--d', `${(i % 4) * 60}ms`); io.observe(el); });
  } else {
    items.forEach((el) => el.classList.add('in'));
  }

  // menu tabs
  const tabs = $$('.tab');
  if (tabs.length) {
    const select = (id) => {
      tabs.forEach((t) => t.setAttribute('aria-selected', String(t.dataset.tab === id)));
      $$('.panel').forEach((p) => { p.hidden = p.id !== id; });
      history.replaceState(null, '', '#' + id);
    };
    tabs.forEach((t) => t.addEventListener('click', () => select(t.dataset.tab)));
    const hash = location.hash.slice(1);
    select(tabs.some((t) => t.dataset.tab === hash) ? hash : tabs[0].dataset.tab);
  }

  // reservation form (frontend only – bez odeslání na server)
  const form = $('#reservation');
  if (form) {
    const date = $('#date');
    const today = new Date();
    date.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

    const rules = {
      name: (v) => v.trim().length >= 2 || 'Napiš nám, jak ti máme říkat.',
      phone: (v) => /^(\+?\d[\d\s]{8,14})$/.test(v.trim()) || 'Zadej celé telefonní číslo.',
      email: (v) => v === '' || /^\S+@\S+\.\S+$/.test(v) || 'Zkontroluj e-mail.',
      date: (v) => v !== '' || 'Vyber datum.',
      time: (v) => v !== '' || 'Vyber čas.',
      guests: (v) => (+v >= 1 && +v <= 20) || 'Počet osob 1–20. Pro více nám zavolej.',
    };
    const check = (input) => {
      const rule = rules[input.name];
      if (!rule) return true;
      const res = rule(input.value);
      const msg = res === true ? '' : res;
      input.setAttribute('aria-invalid', String(Boolean(msg)));
      $('#' + input.id + '-err').textContent = msg;
      return !msg;
    };
    $$('.input', form).forEach((i) => {
      i.addEventListener('blur', () => check(i));
      i.addEventListener('input', () => i.getAttribute('aria-invalid') === 'true' && check(i));
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = $$('.input', form).filter((i) => rules[i.name]);
      const ok = inputs.map(check).every(Boolean);
      const age = $('#age');
      $('#age-err').textContent = age.checked ? '' : 'Potvrď prosím, že je vám 18 a více.';
      if (!ok || !age.checked) {
        (inputs.find((i) => i.getAttribute('aria-invalid') === 'true') || age).focus();
        return;
      }
      // TODO: napojit na backend / rezervační systém
      const data = Object.fromEntries(new FormData(form));
      console.info('Rezervace (zatím jen lokálně):', data);
      form.hidden = true;
      $('#summary').textContent = `${data.guests} os. · ${new Date(data.date).toLocaleDateString('cs-CZ')} v ${data.time}`;
      $('.form-ok').classList.add('show');
      $('.form-ok').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
})();
