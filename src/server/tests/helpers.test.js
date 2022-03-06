const {
    validateData,
    sortCountries,
    calculateSummaryData
} = require("../helpers/processResponse");

describe("validateData", () => {
    test("returning correct value for null data", () => {
        let country1 = {
            name: "Sample",
            alphaCode1: 123,
            alphaCode2: 321,
            region: "Europe",
            subregion: "Scandinavia",
            population: 0,
            languages: []
        }

        let res = validateData(country1);

        expect(res.languages[0]).toEqual('No languages available');
        expect(res.population).toEqual('No population available');
        expect(res.name).toEqual("Sample");
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
    test("sort countries in descending order by code", () => {
        const country1 = {
            name: "French Guyana",
            code: 1
        }
        const country2 = {
            name: "Zanzibar",
            code: 4
        }
        const country3 = {
            name: "Azerbaijan",
            code: 3
        }
        const country4 = {
            name: "Nepal",
            code: 2
        }

        let answer = [country2, country3, country4, country1];
        let list1 = [country1, country4, country3, country2];
        let list2 = [country4, country2, country3, country1];

        expect(sortCountries(list1)).toEqual(answer);
        expect(sortCountries(list2)).toEqual(answer);
        expect(sortCountries([])).toEqual([]);
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

        expect(res.total).toBe(5);
        expect(res.regions["MENA"].length).toBe(3);
        expect(res.subregions["Gulf"].length).toBe(2);
        expect(res.subregions["Central Asia"].length).toBe(1);
    });
});