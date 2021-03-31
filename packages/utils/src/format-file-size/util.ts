const UNITS = ['B', 'KB', 'MB', 'GB'];

type FileSize = string | number;

const humanizeNumberPartOfFileSize = (value: number, factor: number): string => {
    const maxFactor = UNITS.length - 1;
    if (value > 99 && factor === maxFactor) return '99+';

    return `${Number(value.toFixed(2))}`;
};

const parseFileSize = (fileSize: FileSize): number => {
    const parsedFileSize = Number(fileSize);
    if (Number.isNaN(parsedFileSize)) return 0;

    return parsedFileSize;
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
 * 0 B - Если приходит строка, которую невозможно привести к числу
 */
export const formatFileSize = (fileSize: FileSize): string => {
    const maxFactor = UNITS.length - 1;
    let humanSize: number = parseFileSize(fileSize);
    let factor = 0;

    while (humanSize >= 1024 && factor < maxFactor) {
        humanSize /= 1024;
        factor += 1;
    }

    return `${humanizeNumberPartOfFileSize(humanSize, factor)} ${UNITS[factor]}`;
};
