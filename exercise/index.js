$(document).ready(() => {
  $('#cat-cards').prepend(`<div class="cat-quicklinks"></div>`);

  $('.anavmfe__accordion__item').each(function () {
    const filters = $(this)
      .find('.anavmfe__accordion__body > .anavmfe__accordion__row > input')
      .map(function () {
        return $(this).val();
      })
      .get()
      .join();

    const targetUrl = $(this)
      .find('.anavmfe__accordion__body > .anavmfe__accordion__row > a')
      .attr('href')
      .split('?')[0];

    const blockTitle = $(this).find('.anavmfe__accordion__item__name').text();

    $('.cat-quicklinks').append(
      `<a style='margin-right:10px;' href='${targetUrl}?appliedRefinements=${filters}'>${blockTitle}</a>`
    );
  });
});
