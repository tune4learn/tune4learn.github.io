/* Tune4Learn · families & teachers */
(function () {
  const S = window.T4L || { VIDEOS: [], PACKS: [] };
  const $ = (q, el = document) => el.querySelector(q);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const MONTH_FULL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  /* ---------- nav ---------- */
  const burger = $('.nav-burger'), links = $('#navLinks');
  burger.addEventListener('click', () => { const o = links.classList.toggle('open'); burger.setAttribute('aria-expanded', o); });
  links.addEventListener('click', e => { if (e.target.tagName === 'A') links.classList.remove('open'); });

  /* ---------- subjects ---------- */
  const SUBJECTS = [
    { k: '', label: 'All' },
    { k: 'routines', label: 'Routines', test: v => v.series === 'routines' },
    { k: 'math', label: 'Math', test: v => v.cat === 'math' },
    { k: 'science', label: 'Science & Nature', test: v => v.cat === 'science' },
    { k: 'values', label: 'Feelings & Values', test: v => v.cat === 'values' && v.series !== 'routines' },
    { k: 'inclusion', label: 'Inclusion', test: v => v.cat === 'inclusion' },
    { k: 'health', label: 'Health', test: v => v.cat === 'health' },
    { k: 'lit', label: 'Reading & Art', test: v => v.cat === 'literacy' || v.cat === 'art' },
    { k: 'seasonal', label: 'Seasons & Fun', test: v => v.cat === 'seasonal' },
    { k: 'days', label: 'Special Days', test: v => !!v.date }
  ];
  const packsByVid = {};
  (S.PACKS || []).forEach(p => { if (p.vid && p.files) (packsByVid[p.vid] = packsByVid[p.vid] || []).push(p); });

  const state = { q: '', subj: '', age: '', month: '', shown: 12 };
  const chips = $('#chips');
  chips.innerHTML = SUBJECTS.map(s => `<button class="chip" type="button" data-k="${s.k}" aria-pressed="${s.k === ''}">${esc(s.label)}</button>`).join('');
  chips.addEventListener('click', e => { const b = e.target.closest('.chip'); if (!b) return; setSubj(b.dataset.k); });
  function setSubj(k) { state.subj = k; state.shown = 12; chips.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', c.dataset.k === k)); render(); }

  const fMonth = $('#fMonth');
  fMonth.insertAdjacentHTML('beforeend', MONTHS.map((m, i) => `<option value="${m}">${MONTH_FULL[i]}</option>`).join(''));
  $('#q').addEventListener('input', e => { state.q = e.target.value.trim().toLowerCase(); state.shown = 12; render(); });
  $('#fAge').addEventListener('change', e => { state.age = e.target.value; state.shown = 12; render(); });
  fMonth.addEventListener('change', e => { state.month = e.target.value; state.shown = 12; render(); });
  $('#fClear').addEventListener('click', () => { $('#q').value = ''; $('#fAge').value = ''; fMonth.value = ''; state.q = state.age = state.month = ''; setSubj(''); });
  $('#fMore').addEventListener('click', () => { state.shown += 12; render(); });

  const thumb = id => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
  const ageTags = a => (a || '').split(' ').map(x => x === 'prek' ? 'Pre-K' : x === 'k2' ? 'K–2' : x === 'k3' ? 'Gr 3' : '').filter(Boolean);
  function fileBtns(files) {
    return files.map(f => f.id
      ? `<button class="btn btn-sun btn-sm" type="button" data-doc="${esc(f.id)}" data-t="${esc(f.label)}">📄 ${esc(f.label)}</button>`
      : `<a class="btn btn-sun btn-sm" href="${esc(f.url)}" target="_blank" rel="noopener">📄 ${esc(f.label)}</a>`).join('');
  }
  function item(v) {
    const subj = SUBJECTS.find(s => s.test && s.k !== 'days' && s.test(v));
    const tags = [subj ? subj.label : v.label].concat(ageTags(v.age)).map(t => `<span class="tag">${esc(t)}</span>`).join('') + (v.new ? '<span class="tag new">NEW</span>' : '');
    const packs = (packsByVid[v.id] || []).flatMap(p => p.files);
    return `<li class="item">
      <button class="th" type="button" data-vid="${esc(v.id)}" data-t="${esc(v.t)}" aria-label="Watch ${esc(v.t)}"><img src="${thumb(v.id)}" alt="" loading="lazy" width="320" height="180"></button>
      <div><h3>${esc(v.e)} ${esc(v.t)}</h3><p>${esc(v.s)}</p><div class="tags">${tags}</div>
      <div class="acts"><button class="btn btn-ink btn-sm" type="button" data-vid="${esc(v.id)}" data-t="${esc(v.t)}">▶ Watch</button>${fileBtns(packs)}</div></div></li>`;
  }
  function render() {
    const subj = SUBJECTS.find(s => s.k === state.subj);
    let list = S.VIDEOS.filter(v =>
      (!subj || !subj.test || subj.test(v)) &&
      (!state.age || (v.age || '').split(' ').includes(state.age)) &&
      (!state.month || (v.date || '').startsWith(state.month + ' ')) &&
      (!state.q || (v.t + ' ' + v.s + ' ' + v.label + ' ' + v.cat).toLowerCase().includes(state.q)));
    if (state.month) list = list.slice().sort((a, b) => parseInt(a.date.split(' ')[1]) - parseInt(b.date.split(' ')[1]));
    $('#fCount').textContent = list.length === 1 ? '1 song' : list.length + ' songs';
    $('#fList').innerHTML = list.slice(0, state.shown).map(item).join('') || '<li class="intro">No songs match. Try another word or clear the filters.</li>';
    $('#fMore').hidden = list.length <= state.shown;
  }
  render();

  /* ---------- series ---------- */
  const SERIES = [
    { k: 'routines', ic: '🔔', c: '#2ED573', t: 'Daily Routines', d: 'Hello, attendance, weather and feelings: songs for the same moment every day.' },
    { k: 'math', ic: '🔢', c: '#FF6B35', t: 'Kindergarten Math', d: 'Counting, writing numbers, more and fewer, comparing and one more, one less.' },
    { k: 'days', ic: '📅', c: '#9B59B6', t: 'Special Days', d: 'International days and celebrations through the school year.' },
    { k: 'science', ic: '🔬', c: '#23BFEF', t: 'Science & Nature', d: 'Seasons, weather, plants, animals, Earth and space.' },
    { k: 'values', ic: '💛', c: '#FF4757', t: 'Feelings & Values', d: 'Kindness, friendship, family and children’s rights.' },
    { k: 'seasonal', ic: '🍂', c: '#E0A800', t: 'Seasons & Fun', d: 'Dance songs for fall, winter, spring and summer.' }
  ];
  $('#seriesList').innerHTML = SERIES.map(s => {
    const subj = SUBJECTS.find(x => x.k === s.k);
    const n = S.VIDEOS.filter(subj.test).length;
    return `<li><button type="button" data-series="${s.k}" style="--c:${s.c}"><span class="ic">${s.ic}</span><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p><span class="n">${n} songs →</span></button></li>`;
  }).join('');
  $('#seriesList').addEventListener('click', e => {
    const b = e.target.closest('[data-series]'); if (!b) return;
    setSubj(b.dataset.series); $('#finder').scrollIntoView({ behavior: 'smooth' });
  });

  /* ---------- free printables ---------- */
  $('#featured').innerHTML = (S.FEATURED || []).map(f => `<li class="feat"><span class="ic">${esc(f.e)}</span><div>
      <span class="free-badge">FREE on TPT</span><h3>${esc(f.t)}</h3><p>${esc(f.s)}</p>
      <div class="acts"><a class="btn btn-red btn-sm" href="${esc(f.url || S.TPT)}" target="_blank" rel="noopener">Get it free</a>
      ${f.vid ? `<button class="btn btn-ink btn-sm" type="button" data-vid="${esc(f.vid)}" data-t="${esc(f.t)}">▶ Song</button>` : ''}</div></div></li>`).join('');

  const packs = (S.PACKS || []).filter(p => p.files);
  const pc = $('#pChips');
  const P_SUBJ = [['', 'All'], ['math', 'Math'], ['science', 'Science'], ['values', 'Values'], ['seasonal', 'Seasons & Fun']];
  pc.innerHTML = P_SUBJ.map(([k, l]) => `<button class="chip" type="button" data-k="${k}" aria-pressed="${k === ''}">${l}</button>`).join('');
  function renderPacks(k) {
    pc.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', c.dataset.k === k));
    $('#packs').innerHTML = packs.filter(p => !k || p.cat === k).map(p => `<li class="pack"><span class="ic">${esc(p.e)}</span>
      <h3>${esc(p.t)}</h3><p>${esc(p.s)}${p.age ? ' · ' + esc(p.age) : ''}</p>
      <div class="acts">${fileBtns(p.files)}${p.vid ? `<button class="btn btn-ghost btn-sm" type="button" data-vid="${esc(p.vid)}" data-t="${esc(p.t)}">▶ Song</button>` : ''}</div></li>`).join('');
  }
  pc.addEventListener('click', e => { const b = e.target.closest('.chip'); if (b) renderPacks(b.dataset.k); });
  renderPacks('');


  /* ---------- hero stats ---------- */
  const nPacks = (S.PACKS || []).filter(p => p.files).length;
  $('#stats').innerHTML = [[S.VIDEOS.length, 'songs'], [nPacks, 'free printable packs'], ['Pre-K–2', 'ages 3 to 8']]
    .map(([n, t]) => `<li><b>${esc(n)}</b>${esc(t)}</li>`).join('');

  /* ---------- a school day ---------- */
  const DAY = [
    { when: 'Arrival', c: '#2ED573', vid: 'H9uHCSzXslc', who: 'kids/amara_on', d: 'Greet friends in many languages as children come in.' },
    { when: 'Attendance', c: '#23BFEF', vid: 'hmRgj73ulZQ', who: 'cast/timza_on', d: 'Call names and count who is here today.' },
    { when: 'Weather', c: '#FF9F1C', vid: 'L2FuS6K9W30', who: 'cast/labba_on', d: 'Look outside, name the weather and the season.' },
    { when: 'Feelings', c: '#FF4757', vid: 'SMF7CvnOzKg', who: 'cast/hugza_on', d: 'Check in, name a feeling and try a calm-down strategy.' },
    { when: 'Math time', c: '#FF6B35', vid: 'wkZ2irzG2u0', who: 'cast/clacka_on', d: 'Count objects to 10, then try the rest of the K Math series.' },
    { when: 'Brain break', c: '#9B59B6', vid: 'smToX54V-lI', who: 'cast/jigla_on', d: 'Stand up and move together between activities.' }
  ];
  const vById = Object.fromEntries(S.VIDEOS.map(v => [v.id, v]));
  $('#dayLine').innerHTML = DAY.filter(x => vById[x.vid]).map(x => {
    const v = vById[x.vid];
    return `<li style="--c:${x.c}"><span class="when">${esc(x.when)}</span><img class="who" src="assets/${x.who}.webp" alt="" loading="lazy">
      <h3>${esc(v.t)}</h3><p>${esc(x.d)}</p>
      <button class="th" type="button" data-vid="${esc(v.id)}" data-t="${esc(v.t)}" aria-label="Watch ${esc(v.t)}"><img src="${thumb(v.id)}" alt="" loading="lazy" width="320" height="180"></button></li>`;
  }).join('');

  /* ---------- characters ---------- */
  const MASCOTS = [
    ['timza', 'Timza', '#E0A800', 'Routines & time'], ['clacka', 'Clacka', '#FF6B35', 'Math & counting'],
    ['labba', 'Labba', '#2ED573', 'Science & nature'], ['hugza', 'Hugza', '#FF6FA8', 'Feelings & kindness'],
    ['jigla', 'Jigla', '#FF4757', 'Movement & dance'], ['abza', 'Abza', '#9B59B6', 'Letters & reading']];
  const KIDS = [['amara', 'Amara'], ['leo', 'Leo'], ['layla', 'Layla'], ['kenji', 'Kenji'], ['priya', 'Priya'], ['mateo', 'Mateo'], ['nora', 'Nora'], ['ella', 'Ella'], ['omar', 'Omar']];
  const KC = ['#9B59B6', '#23BFEF', '#16A39A', '#FF6B35', '#FF6FA8', '#FF4757', '#E0A800', '#2ED573', '#3E7BD6'];
  $('#castMascots').innerHTML = `<li><button type="button" data-voice="t4l" style="--c:#23BFEF"><img src="assets/t4l/t4l_logo.webp" alt="" loading="lazy"><h4>T4L</h4><span>Host & song leader</span><span class="hear">▶ Hear me</span></button></li>` +
    MASCOTS.map(([k, n, c, r]) => `<li><button type="button" data-voice="${k}" style="--c:${c}"><img src="assets/cast/${k}_el_salliyor.webp" alt="" loading="lazy"><h4>${n}</h4><span>${r}</span><span class="hear">▶ Hear me</span></button></li>`).join('');
  $('#castKids').innerHTML = KIDS.map(([k, n], i) => `<li><button type="button" data-voice="${k}" style="--c:${KC[i]}"><img src="assets/kids/${k}_on.webp" alt="" loading="lazy"><h4>${n}</h4><span class="hear">▶ Hear me</span></button></li>`).join('');
  let castA = null;
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-voice]'); if (!b) return;
    const src = (S.VOICES || {})[b.dataset.voice]; if (!src) return;
    if (castA) castA.pause();
    document.querySelectorAll('[data-voice].on').forEach(x => x.classList.remove('on'));
    castA = new Audio(src[0]); b.classList.add('on'); castA.onended = () => b.classList.remove('on'); castA.play().catch(() => b.classList.remove('on'));
  });

  /* ---------- social ---------- */
  $('#social').innerHTML = [['YouTube', S.CHANNEL], ['Spotify', S.SPOTIFY], ['Apple Music', S.APPLE], ['TPT Store', S.TPT], ['TikTok', S.TIKTOK], ['Instagram', S.INSTAGRAM]]
    .filter(x => x[1]).map(([l, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${l}</a>`).join('');
  document.querySelectorAll('.js-channel').forEach(a => { if (S.CHANNEL) a.href = S.CHANNEL; });

  /* ---------- modal: video + Drive preview ---------- */
  const modal = $('#modal'), media = $('#m-media');
  const live = location.protocol.startsWith('http');
  document.addEventListener('click', e => {
    const v = e.target.closest('[data-vid]'), d = e.target.closest('[data-doc]');
    if (!v && !d) return;
    if (v) {
      media.className = 'media';
      media.innerHTML = live
        ? `<iframe src="https://www.youtube.com/embed/${encodeURIComponent(v.dataset.vid)}?autoplay=1&rel=0&playsinline=1&origin=${encodeURIComponent(location.origin)}" title="${esc(v.dataset.t)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`
        : `<div class="fallback"><a class="btn btn-red" href="https://www.youtube.com/watch?v=${encodeURIComponent(v.dataset.vid)}" target="_blank" rel="noopener">Watch on YouTube</a></div>`;
      $('#m-title').textContent = v.dataset.t; $('#m-extra').innerHTML = '';
      if (window.gtag) gtag('event', 'video_open', { video_id: v.dataset.vid, video_title: v.dataset.t });
    } else {
      const id = encodeURIComponent(d.dataset.doc);
      media.className = 'media doc';
      media.innerHTML = `<iframe src="https://drive.google.com/file/d/${id}/preview" title="${esc(d.dataset.t)}" allow="autoplay"></iframe>`;
      $('#m-title').textContent = d.dataset.t;
      $('#m-extra').innerHTML = `<a class="btn btn-sun btn-sm" href="https://drive.google.com/uc?export=download&id=${id}" target="_blank" rel="noopener">⬇ Download</a>`;
      if (window.gtag) gtag('event', 'pack_preview', { file_id: d.dataset.doc, file_label: d.dataset.t });
    }
    modal.showModal();
  });
  $('#m-close').addEventListener('click', () => modal.close());
  modal.addEventListener('close', () => { media.innerHTML = ''; });
  modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
})();
