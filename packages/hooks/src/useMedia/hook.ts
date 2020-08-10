/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-confusing-arrow */
import React from 'react';

type Query<T> = [T, string];
type QueryTuple<T> = [T, MediaQueryList];
type QueryList<T> = Array<QueryTuple<T>>;

type Params<T> = Array<Query<T>>;

function getValue<T>(list: QueryList<T>): T[] {
    return list.map(
        ([value, query]) => query.matches ? value : null,
    ).filter(Boolean) as any;
}

export function useMedia<T>(qeuries: Params<T>, defaultValue: T): T[] {
    const [value, setValue] = React.useState<T[]>([defaultValue]);
    const [mediaQueryList, setMediaQueryList] = React.useState<QueryList<T>>([]);

    React.useEffect(() => {
        const queryList: QueryList<T> = qeuries.map(
            ([x, y]) => [x, window.matchMedia(y)],
        );

        setMediaQueryList(queryList);
        setValue(getValue(queryList));
    }, []);

    React.useEffect(() => {
        const handler = () => {
            setValue(getValue(mediaQueryList));
        };

        mediaQueryList.forEach(
            ([_, mediaQuery]) => mediaQuery.addListener(handler),
        );

        return () => {
            mediaQueryList
                .forEach(
                    ([_, mediaQuery]) => mediaQuery.removeListener(handler),
                );
        };
    }, [value, mediaQueryList]);

    return value;
}
