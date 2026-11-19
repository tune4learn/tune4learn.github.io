/* Tune4Learn · kids area (Ben Tıkır design system, T4L cast) */
(function () {
  const S = window.T4L || { VIDEOS: [] };
  const $ = (q, el = document) => el.querySelector(q);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const MONTHS = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };

  /* ---------- talking characters (text bubbles; voice files can be added later in VOICES) ---------- */
  const LINES = {
    t4l: ["Hi friends! I'm T4L! Let's play!"],
    timza: ["Tick-tock! I'm Timza and I keep our day on time!"],
    clacka: ["Hi, I'm Clacka! Let's count together. 1, 2, 3, 4, 5!"],
    labba: ["Hmm... hi, I'm Labba. Look closer! What do you see?"],
    hugza: ["Hi... I'm Hugza. How are you feeling today?"],
    jigla: ["Hey hey! I'm Jigla! Jump, spin, and freeze!"],
    abza: ["Hello! I'm Abza. A is for apple! Let's read together."],
    amara: ["Hi, I'm Amara! Good morning, everyone!"],
    ella: ["Hello, I'm Ella! Which color do you like best?"],
    kenji: ["Hi, I'm Kenji. Let's build a tall tower!"],
    layla: ["Hello, I'm Layla. Friends take care of each other."],
    leo: ["Hey, I'm Leo! Race you to the playground!"],
    mateo: ["Hola! I'm Mateo! Clap your hands with me!"],
    nora: ["Hi, I'm Nora. Is it sunny, cloudy, or rainy?"],
    priya: ["Hi, I'm Priya! Why is the sky blue?"],
    omar: ["Hi, I'm Omar! That cloud looks like a bunny!"]
  };
  const KIDS = ['amara', 'ella', 'kenji', 'layla', 'leo', 'mateo', 'nora', 'priya', 'omar'];
  const VOICES = (S.VOICES || {});            // e.g. { clacka: ['assets/voice/clacka_1.mp3', ...] }
  const count = {};
  /* mouth frames: [closed, half, open] — picked from the voice's loudness while it plays */
  const FRAMES = who => who === 't4l' ? ['assets/t4l/t4l_logo_closed.webp', 'assets/t4l/t4l_logo_half.webp', 'assets/t4l/t4l_logo_open.webp']
    : KIDS.includes(who) ? ['on', 'm1', 'm2'].map(p => `assets/kids/${who}_${p}.webp`)
    : [`assets/cast/${who}_on.webp`, `assets/cast/${who}_konusuyor.webp`, `assets/cast/${who}_konusuyor.webp`];
  const preload = {};
  function warm(who) { if (preload[who]) return; preload[who] = FRAMES(who).map(s => { const im = new Image(); im.src = s; return im; }); }
  document.querySelectorAll('.k-talker').forEach(b => { const w = b.dataset.who; if (w) setTimeout(() => warm(w), 1500); });
  let AC = null;
  function lipSync(a, img, frames, isOn) {
    let an = null, buf = null, lvl = 0, k = 0, last = -1, t0 = performance.now();
    try {
      AC = AC || new (window.AudioContext || window.webkitAudioContext)();
      if (AC.state === 'suspended') AC.resume();
      const src = AC.createMediaElementSource(a); an = AC.createAnalyser(); an.fftSize = 512;
      src.connect(an); an.connect(AC.destination); buf = new Uint8Array(an.fftSize);
    } catch (e) { an = null; }
    (function step() {
      if (!isOn()) return;
      let f;
      if (an) {
        an.getByteTimeDomainData(buf); let s = 0;
        for (let n = 0; n < buf.length; n++) { const x = (buf[n] - 128) / 128; s += x * x; }
        const rms = Math.sqrt(s / buf.length); lvl = Math.max(rms, lvl * 0.72);
        f = lvl > 0.075 ? 2 : lvl > 0.03 ? 1 : 0;
      } else {                                   // no Web Audio: simple chatter
        f = a.paused ? 0 : [0, 1, 2, 1][Math.floor((performance.now() - t0) / 110) % 4];
      }
      if (f !== last && (k++ % 2 === 0 || f === 0)) { img.src = frames[f]; last = f; }
      requestAnimationFrame(step);
    })();
  }
  function talk(btn) {
    const who = btn.dataset.who, lines = LINES[who] || ['Hi!'];
    const i = count[who] = ((count[who] ?? -1) + 1) % lines.length;
    const say = btn.querySelector('.k-say'), img = btn.querySelector('img');
    if (say) { say.textContent = lines[i]; say.classList.add('show'); }
    btn.classList.add('talk', 'talking');
    warm(who);
    let frames = FRAMES(who);
    if (btn.classList.contains('k-peek') && img) frames = [img.dataset.base || img.src, frames[1], frames[2]];
    if (img) img.dataset.base = img.dataset.base || img.getAttribute('src');
    let on = true;
    const done = () => {
      if (!on) return; on = false;
      btn.classList.remove('talk', 'talking');
      if (img && img.dataset.base) img.src = img.dataset.base;
      if (say && !btn.classList.contains('k-star')) say.classList.remove('show');
    };
    clearTimeout(btn._t);
    const v = VOICES[who];
    if (v && v.length) {
      try {
        if (talk.a) { talk.a.pause(); if (talk.done) talk.done(); }
        const a = talk.a = new Audio(v[i % v.length]); talk.done = done;
        a.onended = done; a.onerror = () => { btn._t = setTimeout(done, 1800); };
        a.play().then(() => { if (img) lipSync(a, img, frames, () => on); }).catch(() => { btn._t = setTimeout(done, 2500); });
        btn._t = setTimeout(done, 20000);
      } catch (e) { btn._t = setTimeout(done, 1800); }
    } else {
      if (img) { let n = 0; const iv = setInterval(() => { if (!on) return clearInterval(iv); img.src = frames[[0, 2, 1, 2][n++ % 4]]; }, 140); }
      btn._t = setTimeout(done, 1800);
    }
  }
  document.addEventListener('click', e => { const b = e.target.closest('.k-talker'); if (b) talk(b); });

  /* strip arrows */
  document.querySelectorAll('.k-arrow[data-for]').forEach(b => b.addEventListener('click', () => {
    const s = document.getElementById(b.dataset.for); if (s) s.scrollBy({ left: b.classList.contains('k-prev') ? -320 : 320, behavior: 'smooth' });
  }));

  /* ---------- cards ---------- */
  const thumb = id => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
  function card(v, opts = {}) {
    let badge = '';
    if (v.date && opts.date) { const [m, d] = v.date.split(' '); badge = `<span class="k-date"><b>${esc(d)}</b>${esc(m)}</span>`; }
    else if (v.new) badge = '<span class="k-new">NEW</span>';
    return `<li><button class="k-card" type="button" data-id="${esc(v.id)}" data-t="${esc(v.t)}" aria-label="${esc(v.t)}: watch">
      <span class="k-thumb"><img src="${thumb(v.id)}" width="320" height="180" alt="" loading="lazy">${badge}<span class="k-play" aria-hidden="true"></span></span>
      <span class="k-title">${esc(v.t)}</span></button></li>`;
  }
  /* songs by topic (each topic led by its character, Ben Tıkır style) */
  const TOPICS = [
    { k: 'all', who: 't4l', label: 'All', test: () => true },
    { k: 'day', who: 'timza', label: 'My Day', test: v => v.series === 'routines' || v.cat === 'health' },
    { k: 'num', who: 'clacka', label: 'Numbers', test: v => v.cat === 'math' },
    { k: 'sci', who: 'labba', label: 'Science', test: v => v.cat === 'science' },
    { k: 'feel', who: 'hugza', label: 'Feelings', test: v => (v.cat === 'values' && v.series !== 'routines') || v.cat === 'inclusion' },
    { k: 'move', who: 'jigla', label: 'Move & Dance', test: v => v.cat === 'seasonal' },
    { k: 'read', who: 'abza', label: 'Read & Art', test: v => v.cat === 'literacy' || v.cat === 'art' }
  ];
  const ORDER = { routines: 0, songs: 1, math: 2, days: 3 };
  const songs = S.VIDEOS.slice().sort((a, b) => (ORDER[a.series] ?? 9) - (ORDER[b.series] ?? 9));
  const face = who => who === 't4l' ? 'assets/t4l/t4l_face.webp' : `assets/cast/${who}_face.webp`;
  $('#topics').innerHTML = TOPICS.map((t, i) => `<button class="k-topic" type="button" role="tab" data-topic="${t.k}" data-who="${t.who}" aria-selected="${i === 0}">
      <span class="k-tface"><img src="${face(t.who)}" alt="" loading="lazy"></span><span class="k-tl">${esc(t.label)}</span></button>`).join('');
  function showTopic(k) {
    const t = TOPICS.find(x => x.k === k) || TOPICS[0];
    document.querySelectorAll('.k-topic').forEach(b => b.setAttribute('aria-selected', b.dataset.topic === t.k));
    const row = $('#songsRow'); row.innerHTML = songs.filter(t.test).map(v => card(v)).join(''); row.scrollLeft = 0; if (typeof arrows === 'function') setTimeout(arrows, 50);
  }
  $('#topics').addEventListener('click', e => { const b = e.target.closest('.k-topic'); if (b) showTopic(b.dataset.topic); });
  showTopic('all');

  /* cartoons: fill S.CARTOONS with {id, t} when episodes are ready */
  const CART = S.CARTOONS || [];
  $('#cartoonsRow').innerHTML = CART.length ? CART.map(v => card(v)).join('')
    : `<li class="k-cwide"><div class="k-soonbox"><div class="k-soonpals">${['clacka', 'labba', 'hugza'].map(w => `<img src="assets/cast/${w}_sevinc.webp" alt="" loading="lazy">`).join('')}<img class="k-soont4l" src="assets/t4l/t4l_logo.webp" alt="" loading="lazy">${['jigla', 'abza', 'timza'].map(w => `<img src="assets/cast/${w}_sevinc.webp" alt="" loading="lazy">`).join('')}</div>
      <p><b>T4L &amp; Friends cartoons</b><span>Coming soon!</span></p></div></li>`;

  /* row arrows: shown only when the row can scroll that way */
  document.querySelectorAll('.k-rarr').forEach(b => b.addEventListener('click', () => {
    const r = document.getElementById(b.dataset.row); if (!r) return;
    r.scrollBy({ left: (b.classList.contains('k-rl') ? -1 : 1) * Math.max(260, r.clientWidth * 0.8), behavior: 'smooth' });
  }));
  function arrows() {
    document.querySelectorAll('.k-row').forEach(r => {
      const w = r.parentElement, max = r.scrollWidth - r.clientWidth - 4;
      w.querySelector('.k-rl').hidden = r.scrollLeft <= 4;
      w.querySelector('.k-rr').hidden = r.scrollLeft >= max;
    });
  }
  document.querySelectorAll('.k-row').forEach(r => r.addEventListener('scroll', arrows, { passive: true }));
  addEventListener('resize', arrows); setTimeout(arrows, 300); arrows();

  /* special days: upcoming first */
  const today = new Date(); today.setHours(0, 0, 0, 0);
  function daysAway(d) {
    const [m, day] = d.split(' ');
    let t = new Date(today.getFullYear(), MONTHS[m], +day), diff = Math.round((t - today) / 864e5);
    if (diff < -2) { t = new Date(today.getFullYear() + 1, MONTHS[m], +day); diff = Math.round((t - today) / 864e5); }
    return diff;
  }
  const days = S.VIDEOS.filter(v => v.date).map(v => ({ v, d: daysAway(v.date) })).sort((a, b) => a.d - b.d);
  $('#daysRow').innerHTML = days.map(x => card(x.v, { date: true })).join('');
  const near = days.find(x => x.d >= -1 && x.d <= 6);
  if (near) {
    const t = $('#today'), when = near.d === 0 ? 'Today' : near.d === 1 ? 'Tomorrow' : near.d < 0 ? 'Yesterday' : near.v.date;
    t.innerHTML = `<b>${esc(when)}</b> ${esc(near.v.s.split('·')[0].trim())} <span class="k-tplay" aria-hidden="true"></span>`;
    t.dataset.id = near.v.id; t.dataset.t = near.v.t; t.hidden = false;
  }

  /* ---------- shelves ---------- */
  const shelf = $('#shelf');
  const SHELVES = {
    days: { t: 'All special days', who: 'hugza', c: '#F9B7D3', list: () => days.map(x => card(x.v, { date: true })) }
  };
  document.querySelectorAll('[data-shelf]').forEach(b => b.addEventListener('click', () => {
    const sh = SHELVES[b.dataset.shelf];
    $('.k-shelf-top').style.setProperty('--c', sh.c);
    $('#s-head').innerHTML = `<img src="assets/cast/${sh.who}_sevinc.webp" alt="">`;
    $('#s-title').textContent = sh.t; $('#s-list').innerHTML = sh.list().join('');
    shelf.showModal();
  }));
  $('#s-close').addEventListener('click', () => shelf.close());
  shelf.addEventListener('click', e => { if (e.target === shelf) shelf.close(); });

  /* ---------- player ---------- */
  const modal = $('#modal'), media = $('#m-media');
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-id]'); if (!b) return;
    const id = b.dataset.id, title = b.dataset.t;
    $('#m-title').textContent = title;
    media.innerHTML = location.protocol.startsWith('http')
      ? `<iframe src="https://www.youtube.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0&playsinline=1&origin=${encodeURIComponent(location.origin)}" title="${esc(title)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`
      : `<div class="k-fallback"><a href="https://www.youtube.com/watch?v=${encodeURIComponent(id)}" target="_blank" rel="noopener">Watch on YouTube</a></div>`;
    if (shelf.open) shelf.close();
    modal.showModal();
    if (window.gtag) gtag('event', 'video_open', { video_id: id, video_title: title });
  });
  $('#m-close').addEventListener('click', () => modal.close());
  modal.addEventListener('close', () => { media.innerHTML = ''; });
  modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
  document.querySelectorAll('.js-channel').forEach(a => { if (S.CHANNEL) a.href = S.CHANNEL; });
})();
