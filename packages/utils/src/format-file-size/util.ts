const UNITS = ['B', 'KB', 'MB', 'GB'];

const getStringHumanSize = (value: number, factor: number): string => {
    const maxFactor = UNITS.length - 1;
    if (value > 99 && factor === maxFactor) return '99+';

    return `${Number(value.toFixed(2))}`;
};

const getNumber = (value: string | number): number => {
    const parsedValue = Number(value);
    if (Number.isNaN(parsedValue)) return 0;

    return parsedValue;
};

/**
 * Возвращает отформатированное значение размера файла.
 * Разделяет пробелом число и единицу измерения.
 *
 * Примеры:
 * 976.56 KB,
 * 1000 B,
 * 93.13 GB,
 * 99+ GB - Если файл превышает 99 GB,
 * 0 B - Если приходит строка не число
 */
export const formatFileSize = (size: string | number): string => {
    const maxFactor = UNITS.length - 1;
    let humanSize: number = getNumber(size);
    let factor = 0;

    while (humanSize >= 1024 && factor < maxFactor) {
        humanSize /= 1024;
        factor += 1;
    }

    return `${getStringHumanSize(humanSize, factor)} ${UNITS[factor]}`;
};
