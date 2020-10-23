import { countries, CountryRaw } from '@alfalab/data';

export type Country = {
    name: string;
    iso2: string;
    dialCode: string;
    priority?: number;
    areaCodes: string[] | null;
};

export type CountriesMap = { [iso2: string]: Country };

const formatCountry = (country: CountryRaw): Country => ({
    name: country[1],
    iso2: country[2],
    dialCode: country[3],
    priority: country[4],
    areaCodes: country[5] || null,
});

export const getCountries = () =>
    countries.map(formatCountry).sort((a, b) => a.name.localeCompare(b.name));

export const getCountriesMap = () =>
    countries.reduce((acc: CountriesMap, country) => {
        const iso2 = country[2];

        acc[iso2] = formatCountry(country);

        return acc;
    }, {});
