// Вычисление индекса текущего и максимального индекса буквы
// Получение всех элементов с классом ceil
const ceils = document.querySelectorAll('.ceil');
const blackCeils = document.querySelectorAll('.ceil-black');

document.addEventListener('click', (element) => {
  // Проверка того, что клик произошел по элементу с нужным классом
  if (element.target.className === 'ceil' || element.target.className === 'ceil-black') {
    // Удаление цветов у клеток
    Array.from(ceils).forEach((el) => {
        el.classList.remove('green');
        el.classList.remove('blue');
    });

    Array.from(blackCeils).forEach((el) => {
      el.classList.remove('green');
      el.classList.remove('blue');
    });

    // Получение id клетки, по которой кликнули
    const id = element.target.id;
    // Получение массива с позициями возможных ходов
    const positions = getKnightPositions(id).split(' ');
    // Добавление синего цвета клетке, по которой кликнули
    document.querySelector(`#${id}`).classList.add('blue');

    // Добавление зеленого цвета клеткам, на которые можно сходить
    positions.forEach((position) => {
      document.querySelector(`#${position}`).classList.add('green');
    });
  }
});
