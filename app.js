chillBtn = document.querySelector('.chill');
adventurousBtn = document.querySelector('.adventurous');
contemplativeBtn = document.querySelector('.contemplative');
celebratoryBtn = document.querySelector('.celebratory');

const viewBackdrop = document.querySelector('.backdrop');
const viewModal = document.querySelector('.modal');

// Beer List
const beerList = [
  {
    image:
      'https://untappd.akamaized.net/site/beer_logos/beer-3337159_601c4_sm.jpeg',
    title: 'Participation Award',
    type: 'Blonde Ale',
    description:
      'Smooth and toasty with a touch of Honey-like sweetness. Beer flavored beer that satisfies.'
  },
  {
    image:
      'https://untappd.akamaized.net/site/beer_logos/beer-4089900_16dec_sm.jpeg',
    title: 'Pulp Up the Volume',
    type: 'IPA - Milkshake',
    description:
      'Now is not the time to be quiet. Turn it up with this soft and creamy NE IPA infused with Fresh Orange, Madagascar Vanilla and a touch of Lactose to accent the bunches of Citra, Azacca and Mandarina Hops. Get Pulped Up!'
  },
  {
    image:
      'https://untappd.akamaized.net/site/beer_logos/beer-3441651_634b7_sm.jpeg',
    title: 'Blix',
    type: 'Coffee Stout',
    description:
      'Black as midnight, black as pitch. A rich and creamy Oatmeal Stout with Organic Sumatra coffee and smooth Tahitian Vanilla. Embrace the darkness.'
  },
  {
    image:
      'https://untappd.akamaized.net/site/beer_logos/beer-3337162_c95b8_sm.jpeg',
    title: 'Juicey McJuiceface',
    type: 'New England IPA',
    description:
      'Low bitterness and tons of Flaked Oats provides a silky smooth body to support an obscene amounts of Tropical American Hops.'
  }
];

const renderModal = index => {
  viewModal.innerHTML = `
    <img src=${beerList[index].image} alt=${beerList[index].title} class="beerImage">
    <h2 class="beerTitle">${beerList[index].title}</h2>
    <h3 class="beerType">${beerList[index].type}</h3>
    <p class="beerDescription">${beerList[index].description}</p>
  `;
};

const toggleModal = () => {
  if (
    (viewBackdrop.style.display = 'none') &&
    (viewModal.style.display = 'none')
  ) {
    viewModal.style.display = 'block';
    viewBackdrop.style.display = 'block';
  }
};

const chillBtnHandler = () => {
  toggleModal();
  renderModal(0);
};

const adventurousBtnHandler = () => {
  toggleModal();
  renderModal(1);
};

const contemplativeBtnHandler = () => {
  toggleModal();
  renderModal(2);
};

const celebratoryBtnHandler = () => {
  toggleModal();
  renderModal(3);
};

chillBtn.addEventListener('click', chillBtnHandler);
adventurousBtn.addEventListener('click', adventurousBtnHandler);
contemplativeBtn.addEventListener('click', contemplativeBtnHandler);
celebratoryBtn.addEventListener('click', celebratoryBtnHandler);
viewBackdrop.addEventListener('click', () => {
  if ((viewBackdrop.style.display = 'block')) {
    viewBackdrop.style.display = 'none';
    viewModal.style.display = 'none';
  }
});
