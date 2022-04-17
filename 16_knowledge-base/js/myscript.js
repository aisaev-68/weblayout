const element = document.querySelector("select");
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
  allowHTML: true,
});

ymaps.ready(function () {
  var newMap = new ymaps.Map(
      "mymap",
      {
        center: [48.872185, 2.354224],
        zoom: 12,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(
      newMap.getCenter(),
      {
        hintContent:
          "Франция, Иль-де-Франс, Париж, X округ Парижа, улица дю Фобур Сен Дени 54",
        balloonContent:
          "Франция, Иль-де-Франс, Париж, X округ Парижа, улица дю Фобур Сен Дени 54",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "image/Subtract.gif",
        // Размеры метки.
        iconImageSize: [28, 40],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38],
      }
    );
  newMap.geoObjects.add(myPlacemark);
});

var selector = document.querySelector("input[type='tel']");

    var im = new Inputmask("+7 (999) 999-99-99");
    im.mask(selector);

    new JustValidate('.form', {
      rules: {
        name: {
          required: true,
          minLength: 2
        },
        phone: {
          required: true,
          function: (name, value) => {
            const num = selector.inputmask.unmaskedvalue()
            return Number(num) && num.length === 10
          }
        },
        email: {
          required: true,
          email: true
        },
      },
      messages: {
        name: "Как вас зовут?",
        phone: "Укажите ваш телефон",
        email: "Укажите ваш e-mail"
      }
    })

$(function () {
  $(".marker").tooltip({
    items: "span.marker",
    content: "Глава 2, страница 176",
    show: "fold",
    position: {
      my: "center bottom",
      at: "center top-10",
      collision: "none",
    },
    close: function (event, ui) {
      ui.tooltip.hover(
        function () {
          $(this).stop(true).fadeTo(500, 1);
        },
        function () {
          $(this).fadeOut("500", function () {
            $(this).remove();
          });
        }
      );
    },
  });
});
