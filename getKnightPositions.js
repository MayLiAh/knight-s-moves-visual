// Функция, рассчитывающая возможные ходы конем из стартовой позиции
const getKnightPositions = (startPosition) => {
  // Проверка корректности полученной позиции
  if (startPosition.length !== 2) {
    return 'Ошибка вычисления!<br>Введите корректное значение.';
  }
  // Определение буквы и цифры позиции
  const symbol = startPosition[0].toLowerCase();
  const number = Number(startPosition[1]);
  // Создание массивов с возможными буквами и цифрами для позиции
  const symbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  // Проверка корректности полученных символов
  if (symbols.indexOf(symbol) < 0 || numbers.indexOf(number) < 0) {
    return 'Ошибка вычисления!<br>Введите корректное значение.';
  }

  let result = '';

  // Вычисление индекса текущего и максимального индекса буквы
  const symbolPos = symbols.indexOf(symbol);
  const lastSymbolIndex = symbols.length - 1;
  // Проверка, можно ли пойти на 2 клетки вправо
  if (symbolPos + 2 <= lastSymbolIndex) {
    // Проверка, можно ли пойти на клетку вверх
    if (numbers.indexOf(number + 1) >= 0) {
      result += `${symbols[symbolPos + 2]}${number + 1} `;
    }
    // Проверка, можно ли пойти на клетку вниз
    if (numbers.indexOf(number - 1) >= 0) {
      result += `${symbols[symbolPos + 2]}${number - 1} `;
    }
  }

  // Проверка, можно ли пойти на 2 клетки влево
  if (symbolPos - 2 <= lastSymbolIndex && symbolPos - 2 >= 0) {
    // Проверка, можно ли пойти на клетку вверх
    if (numbers.indexOf(number + 1) >= 0) {
      result += `${symbols[symbolPos - 2]}${number + 1} `;
    }
    // Проверка, можно ли пойти на клетку вниз
    if (numbers.indexOf(number - 1) >= 0) {
      result += `${symbols[symbolPos - 2]}${number - 1} `;
    }
  }

  // Проверка, можно ли пойти на клетку вправо
  if (symbolPos + 1 <= lastSymbolIndex) {
    // Проверка, можно ли пойти на 2 клетки вверх
    if (numbers.indexOf(number + 2) >= 0) {
      result += `${symbols[symbolPos + 1]}${number + 2} `;
    }
    // Проверка, можно ли пойти на 2 клетки вниз
    if (numbers.indexOf(number - 2) >= 0) {
      result += `${symbols[symbolPos + 1]}${number - 2} `;
    }
  }

  // Проверка, можно ли пойти на клетку влево
  if (symbolPos - 1 <= lastSymbolIndex && symbolPos - 1 >= 0) {
    // Проверка, можно ли пойти на 2 клетки вверх
    if (numbers.indexOf(number + 2) >= 0) {
      result += `${symbols[symbolPos - 1]}${number + 2} `;
    }
    // Проверка, можно ли пойти на 2 клетки вниз
    if (numbers.indexOf(number - 2) >= 0) {
      result += `${symbols[symbolPos - 1]}${number - 2} `;
    }
  }

  return result.trim();
}
