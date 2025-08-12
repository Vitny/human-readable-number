module.exports = function toReadable(number) {
  if (number === 0) {
    return 'zero';
  }

  const digits = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  let str = '';
  let num = number;

  const hundredsDigit = Number(String(num)[0]);
  if (num >= 100) {
    str += `${digits[hundredsDigit]} hundred`;
    num = +String(num).slice(1);
    if (num > 0) str += ' ';
  }

  if (num < 20) {
    str += digits[num];
  } else {
    const [t, o] = String(num).split('').map(Number);
    str += tens[t];
    if (o > 0) str += ` ${digits[o]}`;
  }

  return str;
};
