// Initialize the map
// [-37.81254, 144.95919] are the MEL CBD of latitude and longitude
var mymap = L
  .map('mapid')
  .setView([-37.81254, 144.95919], 600);

// Add a tile to the map

  L.tileLayer(
  'http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  maxZoom: 10
}).addTo(mymap);

//Add text information on the location
    L.marker([-37.75066766433552, 145.04593862181048]).addTo(mymap)
    .bindPopup('Local Council:  City of Banyule.<br> UV: 68')
    .openPopup();

    L.marker([-37.93416707894355, 145.01764686801332]).addTo(mymap)
    .bindPopup('Local Council: City of Bayside.<br> UV:  70')
    .openPopup();

    L.marker([-37.81607334092429, 145.0601825098683]).addTo(mymap)
    .bindPopup('Local Council: City of Boroondara.<br> UV: 70')
    .openPopup();

    L.marker([-37.7510143377241, 144.80540682454813]).addTo(mymap)
    .bindPopup('Local Council: City of Brimbank.<br> UV:  65')
    .openPopup();

    L.marker([-38.05500827128635, 145.4163156952099]).addTo(mymap)
    .bindPopup('Local Council: Cardinia Shire.<br> UV:  61')
    .openPopup();

    L.marker([-38.10048480762796, 145.2924786077192]).addTo(mymap)
    .bindPopup('Local Council: City of Casey.<br> UV:  57')
    .openPopup();

    L.marker([-38.0017435025683, 145.20567030567324]).addTo(mymap)
    .bindPopup('Local Council: City of Greater Dandenong.<br> UV:  68')
    .openPopup();

    L.marker([-37.723981928876036, 145.01605329405533]).addTo(mymap)
    .bindPopup('Local Council: City of Darebin.<br> UV:  66')
    .openPopup();

    L.marker([-38.13053745983204, 145.16045757774646]).addTo(mymap)
    .bindPopup('Local Council: City of Frankston.<br> UV:  67')
    .openPopup();

    L.marker([-37.90037080431025, 145.03853747553316]).addTo(mymap)
    .bindPopup('Local Council: City of Glen Eira.<br> UV:  68')
    .openPopup();

    L.marker([-37.830687681806026, 144.8390595528184]).addTo(mymap)
    .bindPopup('Local Council: City of City of Hobsons Bay.<br> UV:  67')
    .openPopup();

    L.marker([-37.588167672922985, 144.83149934443233]).addTo(mymap)
    .bindPopup('Local Council: City of Hume.<br> UV:  66')
    .openPopup();

    L.marker([-37.97597640575366, 145.10382948666646]).addTo(mymap)
    .bindPopup('Local Council: City of Kingston.<br> UV:  66')
    .openPopup();

    L.marker([-37.87011720752387, 145.248139054417]).addTo(mymap)
    .bindPopup('Local Council: City of Knox.<br> UV:  66')
    .openPopup();

    L.marker([37.76241060930846, 145.15843862745214]).addTo(mymap)
    .bindPopup('Local Council: City of Manningham.<br> UV:  67')
    .openPopup();

    L.marker([-37.79108690635401, 144.88449846362877]).addTo(mymap)
    .bindPopup('Local Council: City of Maribyrnong.<br> UV:  69')
    .openPopup();

    L.marker([-37.807286667598, 145.2586636870736]).addTo(mymap)
    .bindPopup('Local Council: City of Maroondah.<br> UV:  65')
    .openPopup();

    L.marker([-37.804124304742956, 144.92766945219392]).addTo(mymap)
    .bindPopup('Local Council: City of Melbourne.<br> UV:  73')
    .openPopup();

    L.marker([-37.67511052859251, 144.58112256784045]).addTo(mymap)
    .bindPopup('Local Council: City of Melton.<br> UV:  76')
    .openPopup();

    L.marker([-37.9001965196246, 145.11543044079332]).addTo(mymap)
    .bindPopup('Local Council: City of Monash.<br> UV:  69')
    .openPopup();

    L.marker([-37.74229286261103, 144.90650982259103]).addTo(mymap)
    .bindPopup('Local Council: City of Moonee Valley.<br> UV:  67')
    .openPopup();

    L.marker([-37.72124531900663, 144.9509923720216]).addTo(mymap)
    .bindPopup('Local Council: City of Moreland.<br> UV:  61')
    .openPopup();

    L.marker([-38.26653614580256, 145.09278781777908]).addTo(mymap)
    .bindPopup('Local Council: Mornington Peninsula Shire.<br> UV:  61')
    .openPopup();

    L.marker([-37.684886198429496, 145.10823560682448]).addTo(mymap)
    .bindPopup('Local Council: Nillumbik Shire.<br> UV:  64')
    .openPopup();

    L.marker([-37.84131520454622, 144.96651387677196]).addTo(mymap)
    .bindPopup('Local Council: City of Port Phillip.<br> UV:  65')
    .openPopup();

    L.marker([-37.85671589254246, 145.0333046637242]).addTo(mymap)
    .bindPopup('Local Council: City of Stonnington.<br> UV:  70')
    .openPopup();

    L.marker([-37.825609068660334, 145.1484128195543]).addTo(mymap)
    .bindPopup('Local Council: City of Whitehorse.<br> UV:  69')
    .openPopup();

    L.marker([-37.90156608010814, 144.6505787552167]).addTo(mymap)
    .bindPopup('Local Council: City of Wyndham.<br> UV:  68')
    .openPopup();

    L.marker([-37.79407126620888, 144.9888413022065]).addTo(mymap)
    .bindPopup('Local Council: City of Yarra.<br> UV:  68')
    .openPopup();

    L.marker([-37.732874076717934, 145.7116224804499]).addTo(mymap)
    .bindPopup('Local Council: Yarra Ranges Shire.<br> UV:  62')
    .openPopup();

    L.marker([-37.53074285590001, 145.09477785365678]).addTo(mymap)
    .bindPopup('Local Council: City of Whittlesea.<br> UV:  72')
    .openPopup();



