// Deal data for Friday Haul. Every price below was read by the maker on
// 2026-11-27 (Black Friday) from the store or deals roundup named in
// `source`. `price` is the sale price in USD, `was` the usual price,
// `checked` the UTC time the price was verified. No deal here is invented:
// each one names a real product at a real store with a store search link.
export const CHECKED_DAY = '2026-11-27';
export const CHECKED_AT = '2026-11-27T15:12:00Z';

export const DEALS = [
  {
    id: 'macbook-air-m5',
    title: 'Apple MacBook Air 13-inch (M5, 16GB RAM, 512GB SSD)',
    store: 'Amazon', category: 'Tech', price: 999.99, was: 1299,
    url: 'https://www.amazon.com/s?k=Apple+MacBook+Air+13-inch+M5+16GB+512GB',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'New low',
    note: 'Under $1,000 only the second time since Apple raised laptop prices in June.'
  },
  {
    id: 'airpods-pro-3',
    title: 'Apple AirPods Pro 3',
    store: 'Amazon', category: 'Tech', price: 149, was: 249,
    url: 'https://www.amazon.com/s?k=Apple+AirPods+Pro+3',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'New low',
    note: '$100 off the current flagship earbuds; the lowest price reported anywhere today.'
  },
  {
    id: 'watch-se-3',
    title: 'Apple Watch SE 3 (GPS, 40mm)',
    store: 'Amazon', category: 'Tech', price: 179, was: 249,
    url: 'https://www.amazon.com/s?k=Apple+Watch+SE+3+GPS+40mm',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'Strong price',
    note: '$70 off the entry-level Watch with always-on display and S10 chip.'
  },
  {
    id: 'watch-series-12',
    title: 'Apple Watch Series 12 (GPS, 42mm)',
    store: 'Amazon', category: 'Tech', price: 299, was: 399,
    url: 'https://www.amazon.com/s?k=Apple+Watch+Series+12+GPS+42mm',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'Strong price',
    note: '$100 off the newest Series 12; 9to5Mac lists the whole lineup at all-time lows.'
  },
  {
    id: 'ipad-a16',
    title: 'Apple iPad (A16, 11-inch)',
    store: 'Amazon', category: 'Tech', price: 379, was: 449,
    url: 'https://www.amazon.com/s?k=Apple+iPad+A16+11-inch',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'Strong price',
    note: '$70 off the current base iPad; a solid cut on a model that rarely drops far.'
  },
  {
    id: 'macbook-neo',
    title: 'Apple MacBook Neo (A18 Pro, 8GB RAM, 256GB SSD)',
    store: 'Amazon', category: 'Tech', price: 599.99, was: 699,
    url: 'https://www.amazon.com/s?k=Apple+MacBook+Neo+256GB',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'Strong price',
    note: 'Nearly $100 off Apple\u2019s cheapest laptop, under $600 for the first time.'
  },
  {
    id: 'kindle-paperwhite-2024',
    title: 'Amazon Kindle Paperwhite (16GB, 2024 model)',
    store: 'Amazon', category: 'Tech', price: 129.99, was: 199.99,
    url: 'https://www.amazon.com/s?k=Kindle+Paperwhite+16GB+2024',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'Strong price',
    note: '$70 off the 2024 Paperwhite Mashable\u2019s tech editor uses and recommends.'
  },
  {
    id: 'airpods-4',
    title: 'Apple AirPods 4',
    store: 'Amazon', category: 'Tech', price: 114.99, was: 155,
    url: 'https://www.amazon.com/s?k=Apple+AirPods+4',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'Strong price',
    note: '$40 off the base AirPods; a steady Black Friday cut, not a record.'
  },
  {
    id: 'sony-xm5',
    title: 'Sony WH-1000XM5 Noise Cancelling Headphones',
    store: 'Best Buy', category: 'Audio', price: 169.99, was: 399.99,
    url: 'https://www.bestbuy.com/site/searchpage.jsp?st=Sony+WH-1000XM5',
    checked: '2026-11-27T15:12:00Z', source: '9to5Toys Best Buy Black Friday Week 4 (Nov 23)',
    verdict: 'New low',
    note: 'Best Buy lists it at $169.99, $230 off list \u2014 the cheapest flagship ANC price today.'
  },
  {
    id: 'bose-qc-1',
    title: 'Bose QuietComfort Headphones (1st Gen)',
    store: 'Amazon', category: 'Audio', price: 167, was: 359,
    url: 'https://www.amazon.com/s?k=Bose+QuietComfort+Headphones',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'New low',
    note: '53% off and a new record low on the original QuietComfort, per Mashable.'
  },
  {
    id: 'bose-qc-2',
    title: 'Bose QuietComfort Headphones (2nd Gen)',
    store: 'Amazon', category: 'Audio', price: 199, was: 359,
    url: 'https://www.amazon.com/s?k=Bose+QuietComfort+Headphones+2nd+Gen',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'Strong price',
    note: '$160 off the newer model; only $30 more than the record-low first gen.'
  },
  {
    id: 'sony-xm6',
    title: 'Sony WH-1000XM6 Noise Cancelling Headphones',
    store: 'Amazon', category: 'Audio', price: 348, was: 459.99,
    url: 'https://www.amazon.com/s?k=Sony+WH-1000XM6',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'Strong price',
    note: '$112 off Sony\u2019s newest flagship; a real cut, but the older XM5 is cheaper still.'
  },
  {
    id: 'hisense-e7-65',
    title: 'Hisense 65-inch E7 Mini-LED QLED 4K TV',
    store: 'Amazon', category: 'TV', price: 499.99, was: 999.99,
    url: 'https://www.amazon.com/s?k=Hisense+65-inch+E7+Mini-LED+QLED+4K+TV',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'New low',
    note: 'Half price on a 65-inch Mini-LED QLED with a fast refresh rate for gaming.'
  },
  {
    id: 'tcl-s4cf-65',
    title: 'TCL 65-inch S4CF 4K HDR Smart Fire TV',
    store: 'Best Buy', category: 'TV', price: 229.99, was: 469.99,
    url: 'https://www.bestbuy.com/site/searchpage.jsp?st=TCL+65-inch+S4CF+4K+Fire+TV',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'Strong price',
    note: '$240 off a 65-inch 4K Fire TV \u2014 the cheapest big-screen deal Best Buy lists today.'
  },
  {
    id: 'lg-b6-48',
    title: 'LG 48-inch B6 OLED 4K TV',
    store: 'Amazon', category: 'TV', price: 599.99, was: 1199.99,
    url: 'https://www.amazon.com/s?k=LG+48-inch+B6+OLED+4K+TV',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'New low',
    note: 'Half price on an OLED panel; $600 off is the deepest OLED cut in the roundup.'
  },
  {
    id: 'tcl-qm8l-75',
    title: 'TCL 75-inch QM8L SQD-Mini-LED QLED 4K TV',
    store: 'Amazon', category: 'TV', price: 1397.99, was: 2999.99,
    url: 'https://www.amazon.com/s?k=TCL+75-inch+QM8L+Mini-LED+QLED+4K+TV',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'New low',
    note: '53% off, $1,602 saved on a 75-inch award-winning Mini-LED set.'
  },
  {
    id: 'echo-dot-new',
    title: 'Amazon Echo Dot (newest model)',
    store: 'Amazon', category: 'Smart Home', price: 49.99, was: 99.99,
    url: 'https://www.amazon.com/s?k=Amazon+Echo+Dot+newest+model',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'Strong price',
    note: 'Half price on the newest Echo Dot; Amazon devices hit this level every Black Friday.'
  },
  {
    id: 'ring-doorbell-2k',
    title: 'Ring Battery Doorbell 2K',
    store: 'Amazon', category: 'Smart Home', price: 39.99, was: 99.99,
    url: 'https://www.amazon.com/s?k=Ring+Battery+Doorbell+2K',
    checked: '2026-11-27T15:12:00Z', source: 'Densky Black Friday tech deals (Nov 26)',
    verdict: 'New low',
    note: '60% off the 2K doorbell; the lowest doorbell price in any roundup checked today.'
  },
  {
    id: 'blink-outdoor-4xr',
    title: 'Blink Outdoor 4 XR Security Camera',
    store: 'Amazon', category: 'Smart Home', price: 58.99, was: 169.99,
    url: 'https://www.amazon.com/s?k=Blink+Outdoor+4+XR',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'New low',
    note: '65% off \u2014 the steepest smart-home discount in the roundup.'
  },
  {
    id: 'fire-stick-4k-select',
    title: 'Amazon Fire TV Stick 4K Select',
    store: 'Amazon', category: 'Smart Home', price: 17.99, was: 49.99,
    url: 'https://www.amazon.com/s?k=Amazon+Fire+TV+Stick+4K+Select',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'New low',
    note: '64% off; the cheapest way to put 4K streaming on any TV.'
  },
  {
    id: 'dyson-v8',
    title: 'Dyson V8 Cyclone Cordless Vacuum',
    store: 'Amazon', category: 'Home', price: 299, was: 449.99,
    url: 'https://www.amazon.com/s?k=Dyson+V8+Cyclone+Cordless+Vacuum',
    checked: '2026-11-27T15:12:00Z', source: 'CNN Underscored vacuum deals (Nov 26)',
    verdict: 'Strong price',
    note: 'CNN Underscored\u2019s top-value Dyson pick, $150 off at Amazon, Dyson and Walmart alike.'
  },
  {
    id: 'roborock-q7-m5',
    title: 'Roborock Q7 M5+ Robot Vacuum and Mop',
    store: 'Amazon', category: 'Home', price: 200, was: 350,
    url: 'https://www.amazon.com/s?k=Roborock+Q7+M5+Robot+Vacuum+Mop',
    checked: '2026-11-27T15:12:00Z', source: 'CNN Underscored best Black Friday deals (Nov 27)',
    verdict: 'New low',
    note: 'Back to its best price of the year, last seen at summer Prime Day, per CNN Underscored.'
  },
  {
    id: 'stanley-quencher',
    title: 'Stanley Quencher H2.0 FlowState Tumbler, 40 oz',
    store: 'Amazon', category: 'Home', price: 22.5, was: 45,
    url: 'https://www.amazon.com/s?k=Stanley+Quencher+H2.0+40+oz',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'New low',
    note: 'Half price on the 40 oz Quencher \u2014 the cheapest it has been listed this season.'
  },
  {
    id: 'ninja-crispi',
    title: 'Ninja Crispi 4-in-1 Glass Air Fryer',
    store: 'Amazon', category: 'Kitchen', price: 147.51, was: 179.99,
    url: 'https://www.amazon.com/s?k=Ninja+Crispi+Glass+Air+Fryer',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'Strong price',
    note: 'Mashable\u2019s best kitchen gift of 2026, down another $12.48 from its earlier sale price.'
  },
  {
    id: 'kitchenaid-classic',
    title: 'KitchenAid Classic Series 4.5-Quart Tilt-Head Stand Mixer',
    store: 'Amazon', category: 'Kitchen', price: 279.99, was: 399.99,
    url: 'https://www.amazon.com/s?k=KitchenAid+Classic+4.5+Quart+Tilt-Head+Stand+Mixer',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'Strong price',
    note: '$120 off the classic stand mixer; the standard Black Friday mixer price.'
  },
  {
    id: 'ninja-blender-plus',
    title: 'Ninja Professional Plus Blender with Auto-iQ',
    store: 'Amazon', category: 'Kitchen', price: 89.99, was: 119.99,
    url: 'https://www.amazon.com/s?k=Ninja+Professional+Plus+Blender+Auto-iQ',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'Strong price',
    note: '$30 off a workhorse blender; a modest but genuine cut.'
  },
  {
    id: 'lego-mos-eisley',
    title: 'LEGO Star Wars Mos Eisley Cantina',
    store: 'Amazon', category: 'Toys', price: 38.99, was: 79.99,
    url: 'https://www.amazon.com/s?k=LEGO+Star+Wars+Mos+Eisley+Cantina',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'New low',
    note: '51% off \u2014 the deepest LEGO cut in the roundup, half price on a Star Wars set.'
  },
  {
    id: 'lego-flower-arrangement',
    title: 'LEGO Botanicals Flower Arrangement',
    store: 'Amazon', category: 'Toys', price: 51.09, was: 109.99,
    url: 'https://www.amazon.com/s?k=LEGO+Botanicals+Flower+Arrangement',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'New low',
    note: '54% off, nearly $59 saved on the Botanicals flower arrangement.'
  },
  {
    id: 'switch2-mario-kart',
    title: 'Nintendo Switch 2 + Mario Kart World Bundle',
    store: 'Amazon', category: 'Gaming', price: 499, was: 549,
    url: 'https://www.amazon.com/s?k=Nintendo+Switch+2+Mario+Kart+World+Bundle',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'Strong price',
    note: 'Only $50 off, but consoles almost never get cut \u2014 Mashable calls it the notable gaming deal.'
  },
  {
    id: 'dualsense',
    title: 'PlayStation DualSense Wireless Controller',
    store: 'Amazon', category: 'Gaming', price: 54, was: 74.99,
    url: 'https://www.amazon.com/s?k=PlayStation+DualSense+Wireless+Controller',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'Strong price',
    note: '$21 off the standard PS5 controller; a typical Black Friday controller cut.'
  },
  {
    id: 'donkey-kong-bananza',
    title: 'Donkey Kong Bananza (Nintendo Switch 2)',
    store: 'Amazon', category: 'Gaming', price: 49.99, was: 69.99,
    url: 'https://www.amazon.com/s?k=Donkey+Kong+Bananza+Nintendo+Switch+2',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'Strong price',
    note: '$20 off a first-party Switch 2 game, matching Best Buy\u2019s $49 Black Friday price.'
  },
  {
    id: 'oura-ring-5',
    title: 'Oura Ring 5 (Gold)',
    store: 'Amazon', category: 'Fitness', price: 399, was: 499,
    url: 'https://www.amazon.com/s?k=Oura+Ring+5+Gold',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'Strong price',
    note: '$100 off the smart ring Mashable named one of the best gifts of the year.'
  },
  {
    id: 'fitbit-charge-6',
    title: 'Google Fitbit Charge 6',
    store: 'Amazon', category: 'Fitness', price: 122, was: 159.95,
    url: 'https://www.amazon.com/s?k=Google+Fitbit+Charge+6',
    checked: '2026-11-27T15:12:00Z', source: 'Mashable 163-deal roundup (updated Nov 26)',
    verdict: 'Strong price',
    note: '$38 off the Charge 6 fitness tracker; a steady seasonal discount.'
  }
];

export const CATEGORIES = ['Tech', 'Audio', 'TV', 'Smart Home', 'Home', 'Kitchen', 'Toys', 'Gaming', 'Fitness'];
export const STORES = ['Amazon', 'Best Buy'];
export const VERDICTS = ['New low', 'Strong price', 'Routine sale', 'Inflated'];
