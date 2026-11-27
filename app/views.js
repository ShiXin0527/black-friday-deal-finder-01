// views.js — turns deal data into HTML strings. No network, no DOM writes
// here: main.js inserts what these functions return.
import { DEALS } from './data.js';

export function discountPct(deal) {
  return Math.round((1 - deal.price / deal.was) * 100);
}

export function savedAmount(deal) {
  return deal.was - deal.price;
}

export function money(n) {
  return '$' + n.toFixed(2).replace(/\.00$/, '');
}

export function verdictClass(verdict) {
  return 'v-' + verdict.toLowerCase().replace(/ /g, '-');
}

export function shortChecked(iso) {
  const d = new Date(iso);
  return d.toISOString().slice(0, 16).replace('T', ' ') + ' UTC';
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function dealCard(deal) {
  const pct = discountPct(deal);
  return '<article class="card">'
    + '<div class="card-top"><span class="pct">-' + pct + '%</span>'
    + '<span class="badge ' + verdictClass(deal.verdict) + '">' + esc(deal.verdict) + '</span></div>'
    + '<h3><a href="#/deal/' + deal.id + '">' + esc(deal.title) + '</a></h3>'
    + '<p class="meta">' + esc(deal.store) + ' &middot; ' + esc(deal.category) + '</p>'
    + '<p class="price"><strong>' + money(deal.price) + '</strong> <s>' + money(deal.was) + '</s>'
    + ' <span class="save">save ' + money(savedAmount(deal)) + '</span></p>'
    + '<p class="checked">Checked ' + shortChecked(deal.checked) + ' &middot; ' + esc(deal.source) + '</p>'
    + '<p class="actions"><a class="btn" href="#/deal/' + deal.id + '">Details</a> '
    + '<a class="btn store" href="' + esc(deal.url) + '" target="_blank" rel="noopener">View at ' + esc(deal.store) + ' &rarr;</a></p>'
    + '</article>';
}

export function dealListHtml(deals) {
  if (!deals.length) {
    return '<p class="empty">No deals match those filters. Try clearing the search or lowering the minimum discount.</p>';
  }
  return '<div class="grid">' + deals.map(dealCard).join('') + '</div>';
}

export function dealDetailHtml(deal) {
  const pct = discountPct(deal);
  const same = DEALS.filter((d) => d.category === deal.category && d.id !== deal.id).slice(0, 3);
  return '<p class="back"><a href="#/">&larr; All deals</a></p>'
    + '<article class="detail">'
    + '<div class="detail-top"><span class="pct big">-' + pct + '%</span>'
    + '<span class="badge ' + verdictClass(deal.verdict) + '">' + esc(deal.verdict) + '</span></div>'
    + '<h2>' + esc(deal.title) + '</h2>'
    + '<p class="meta">' + esc(deal.store) + ' &middot; ' + esc(deal.category) + '</p>'
    + '<p class="price big"><strong>' + money(deal.price) + '</strong> <s>' + money(deal.was) + '</s>'
    + ' <span class="save">you save ' + money(savedAmount(deal)) + ' (' + pct + '%)</span></p>'
    + '<h3>Why this verdict: ' + esc(deal.verdict) + '</h3>'
    + '<p class="note">' + esc(deal.note) + '</p>'
    + '<p class="checked">Price checked ' + shortChecked(deal.checked) + '. Source: ' + esc(deal.source) + '.</p>'
    + '<p class="actions"><a class="btn store big" href="' + esc(deal.url) + '" target="_blank" rel="noopener">View at ' + esc(deal.store) + ' &rarr;</a></p>'
    + '<p class="tip">Prices move fast on Black Friday. Check the price on the store page before you buy.</p>'
    + '</article>'
    + (same.length
      ? '<h3 class="related-h">More ' + esc(deal.category) + ' deals</h3><div class="grid">' + same.map(dealCard).join('') + '</div>'
      : '');
}

export function notFoundHtml(id) {
  return '<p class="empty">No deal with the id &ldquo;' + esc(id) + '&rdquo;. <a href="#/">Back to all deals</a>.</p>';
}
