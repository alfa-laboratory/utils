import { secondsToTime } from '.';

describe('seconds to time', () => {
    it('should return object with zero-padded hours, minutes and seconds', () => {
        expect(secondsToTime(3600)).toMatchObject({
            hours: '01',
            minutes: '00',
            seconds: '00',
        });

        expect(secondsToTime(404)).toMatchObject({
            hours: '00',
            minutes: '06',
            seconds: '44',
        });

        expect(secondsToTime(5)).toMatchObject({
            hours: '00',
            minutes: '00',
            seconds: '05',
        });
    });
});
