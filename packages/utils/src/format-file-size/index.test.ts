import { formatFileSize } from '.';

describe('formatFileSize', () => {
    const cases = [
        ['10dd', '0 B'],
        [1, '1 B'],
        [10, '10 B'],
        [100, '100 B'],
        [1000, '1000 B'],
        [10000, '9.77 KB'],
        [100000, '97.66 KB'],
        [1000000, '976.56 KB'],
        [10000000, '9.54 MB'],
        [100000000, '95.37 MB'],
        [1000000000, '953.67 MB'],
        [10000000000, '9.31 GB'],
        [100000000000, '93.13 GB'],
        [1000000000000, '99+ GB'],
        [10000000000000, '99+ GB'],
        ['d10000000000000', '0 B'],
    ];

    it.each(cases)('formatFileSize(%i)', (fileSize, expected) => {
        expect(formatFileSize(fileSize)).toBe(expected);
    });
});
