const UNITS = ['B', 'KB', 'MB', 'GB'];

const getStringHumanSize = (value: number, factor: number): string => {
    const maxFactor = UNITS.length - 1;
    if (value > 99 && factor === maxFactor) return '99+';

    return `${Number(value.toFixed(2))}`;
};

export const formatFileSize = (size: string | number): string => {
    const maxFactor = UNITS.length - 1;
    let humanSize: string | number = Number(size);
    let factor = 0;

    while (humanSize >= 1024 && factor < maxFactor) {
        humanSize /= 1024;
        factor += 1;
    }

    return `${getStringHumanSize(humanSize, factor)} ${UNITS[factor]}`;
};
