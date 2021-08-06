import { of } from "rxjs";

export const mockListPostReponseData = {
    page: 1,
    per_page: 6,
    total: 12,
    total_pages: 2,
    data: [
        {
            id: 1,
            name: 'cerulean',
            year: 2000,
            color: '#98B2D1',
            pantone_value: '15-4020'
        },
        {
            id: 2,
            name: 'fuchsia rose',
            year: 2001,
            color: '#C74375',
            pantone_value: '17-2031'
        },
    ],
    support: {
        url: 'https://reqres.in/#support-heading',
        text: 'To keep ReqRes free, contributions towards server costs are appreciated!'
    }
};

export const mockEmptyListPostReponseData = {
    page: 1,
    per_page: 6,
    total: 0,
    total_pages: 1,
    data: [],
    support: {
        url: 'https://reqres.in/#support-heading',
        text: 'To keep ReqRes free, contributions towards server costs are appreciated!'
    }
};

export class MockPostServices {
    getListPost() {
        const mockDataClone = JSON.parse(JSON.stringify(mockListPostReponseData));
        return of(mockDataClone);
    }
}
