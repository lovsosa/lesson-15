const options = {
  url: "https://restcountries.com/v2/all?fields=name,flag,capital,population",
  getValue: "name",
  list: {
    match: {
      enabled: true
    }
  },
  template: {
    type: "custom",
    method: function (value, item) {
      return `
        <span style="color: gray">${value}</span>
        <span style="color: gray">${item.capital}</span>
      `;
    }
  }
};
$('.form__country').easyAutocomplete(options);

let formVal = $(`.content__notes>form`).on(`submit`, function (e) {
  e.preventDefault();
  let formСountry = $(`.form__country`).val()
  let formDate = $(`.form__date`).val()
  let reviewMassage = $(`.review__massage`).val()
  let div = $(`<div></div>`).text(formСountry, formDate, reviewMassage)
  $(`sidebar__content`).append(div)
  
})