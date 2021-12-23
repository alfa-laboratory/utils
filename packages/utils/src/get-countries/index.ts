import { countries, CountryRaw } from '@alfalab/data/countries';

export type Country = {
    name: string;
    iso2: string;
    dialCode: string;
    priority?: number;
    areaCodes: string[] | null;
};

export type CountriesHash = { [iso2: string]: Country };

const formatCountry = ([_, name, iso2, dialCode, priority, areaCodes]: CountryRaw): Country => ({
    name,
    iso2,
    dialCode,
    priority,
    areaCodes: areaCodes ?? null,
});

export const getCountries = (): Country[] =>
    countries.map(formatCountry).sort((a, b) => a.name.localeCompare(b.name));

export const getCountriesHash = (): CountriesHash =>
    countries.reduce((acc: CountriesHash, country) => {
        const iso2 = country[2];

        acc[iso2] = formatCountry(country);

        return acc;
    }, {});
