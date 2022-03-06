import {
    validateData,
    sortCountries,
    calculateSummaryData
} from "../helpers/processResponse";

describe("validateData", () => {
    test("returning correct value for null data", () => {
        let country1 = {
            name: "Sample",
            alphaCode1: 123,
            alphaCode2: 321,
            region: "Europe",
            subregion: "Scandinavia",
            population: undefined,
            languages: []
        }

        let res = validateData(country1);

        expect(res.languages[0]).toBe('Information for languages is unavailable');
        expect(res.population).toBe('Information for population is unavailable');
        expect(res.name).toBe("Sample");
    });
    test("No changes for complete data", () => {
        let country2 = {
            name: "Another Name",
            alphaCode1: 444,
            alphaCode2: 765,
            region: "MENA",
            subregion: "Levant",
            population: 9000000,
            languages: ['Arabic']
        }

        let res = validateData(country2);

        expect(res.languages[0]).toBe('Arabic');
        expect(res.population).toBe(9000000);
        expect(res.name).toBe("Another Name");
        expect(res.region).toBe("MENA");
        expect(res.alphaCode1).toBe(444);
        expect(res.alphaCode2).toBe(765);
    });
});

describe("sortCountries", () => {
    test("sort countries in descending order by name", () => {
        const country1 = {
            name: "Azerbaijan"
        }
        const country2 = {
            name: "Zanzibar"
        }
        const country3 = {
            name: "Nepal"
        }
        const country4 = {
            name: "French Guyana"
        }

        let answer = [country1, country4, country3, country2];
        let list1 = [country1, country4, country3, country2];
        let list2 = [country4, country2, country3, country1];

        expect(sortCountries(list1)).toBe(answer);
        expect(sortCountries(list2)).toBe(answer);
        expect(sortCountries([])).toBe([]);
    });
});

describe("calculateSummaryData", () => {
    test("correctly calculate summary data", () => {
        const c1 = {
            name: "Iraq",
            region: "MENA",
            subregion: "Gulf"
        }
        const c2 = {
            name: "Bahrain",
            region: "MENA",
            subregion: "Gulf"
        }
        const c3 = {
            name: "Lebanon",
            region: "MENA",
            subregion: "Levant"
        }
        const c4 = {
            name: "Barbados",
            region: "Caribbean",
            subregion: "Lesser Antilles"
        }
        const c5 = {
            name: "Kyrgystan",            
            region: "Asia",
            subregion: "Central Asia"
        }

        let res = calculateSummaryData([c1, c2, c3, c4, c5]);

        expect(res.countries).toBe(5);
        expect(res.regions["MENA"]).toBe(3);
        expect(res.subregions["Gulf"]).toBe(2);
        expect(res.subregions["Central Asia"]).toBe(1);
    });
});