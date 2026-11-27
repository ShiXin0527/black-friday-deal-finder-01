// main.js — state, filtering, sorting and hash routing for Friday Haul.
// Reads DEALS from data.js, renders through views.js, nothing fetched.
import { DEALS, CATEGORIES, STORES } from './data.js';
import { dealListHtml, dealDetailHtml, notFoundHtml, discountPct } from './views.js';

const app = document.getElementById('app');
const searchBox = document.getElementById('search');
const categorySel = document.getElementById('category');
const storeSel = document.getElementById('store');
const discountSel = document.getElementById('discount');
const sortSel = document.getElementById('sort');
const countLine = document.getElementById('count');
const controls = document.getElementById('controls');

const state = { q: '', category: 'All', store: 'All', minDiscount: 0, sort: 'discount' };

const stats = document.getElementById('verdict-stats');
const lows = DEALS.filter((d) => d.verdict === 'New low').length;
const strong = DEALS.filter((d) => d.verdict === 'Strong price').length;
stats.textContent = lows + ' new lows \u00b7 ' + strong + ' strong prices \u00b7 checked ' + DEALS.length + ' deals today';

function fillSelect(select, items) {
  for (const item of items) {
    const opt = document.createElement('option');
    opt.value = item;
    opt.textContent = item;
    select.appendChild(opt);
  }
}
fillSelect(categorySel, CATEGORIES);
fillSelect(storeSel, STORES);

function applyFilters() {
  const q = state.q.trim().toLowerCase();
  let list = DEALS.filter((d) => {
    if (state.category !== 'All' && d.category !== state.category) return false;
    if (state.store !== 'All' && d.store !== state.store) return false;
    if (discountPct(d) < state.minDiscount) return false;
    if (q && !(d.title + ' ' + d.store + ' ' + d.category).toLowerCase().includes(q)) return false;
    return true;
  });
  if (state.sort === 'discount') list.sort((a, b) => discountPct(b) - discountPct(a));
  if (state.sort === 'price') list.sort((a, b) => a.price - b.price);
  if (state.sort === 'verdict') {
    const rank = { 'New low': 0, 'Strong price': 1, 'Routine sale': 2, 'Inflated': 3 };
    list.sort((a, b) => rank[a.verdict] - rank[b.verdict] || discountPct(b) - discountPct(a));
  }
  return list;
}

function renderList() {
  controls.style.display = '';
  const list = applyFilters();
  const best = list.length ? Math.max(...list.map(discountPct)) : 0;
  countLine.textContent = list.length + ' of ' + DEALS.length + ' deals'
    + (list.length ? ' \u00b7 biggest discount shown: ' + best + '%' : '');
  app.innerHTML = dealListHtml(list);
}

function renderRoute() {
  const hash = window.location.hash || '#/';
  const match = hash.match(/^#\/deal\/([\w-]+)$/);
  if (match) {
    controls.style.display = 'none';
    const deal = DEALS.find((d) => d.id === match[1]);
    countLine.textContent = deal ? deal.category + ' \u00b7 ' + deal.store : '';
    app.innerHTML = deal ? dealDetailHtml(deal) : notFoundHtml(match[1]);
    window.scrollTo(0, 0);
    return;
  }
  renderList();
}

searchBox.addEventListener('input', () => { state.q = searchBox.value; renderList(); });
categorySel.addEventListener('change', () => { state.category = categorySel.value; renderList(); });
storeSel.addEventListener('change', () => { state.store = storeSel.value; renderList(); });
discountSel.addEventListener('change', () => { state.minDiscount = Number(discountSel.value); renderList(); });
sortSel.addEventListener('change', () => { state.sort = sortSel.value; renderList(); });
window.addEventListener('hashchange', renderRoute);

renderRoute();
