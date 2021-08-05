import { of } from "rxjs";
import { LoginReponse, UserDetailReponse } from "../../models/user";

export const mockDataLoginTokenData: LoginReponse = {
    token: 'QpwL5tke4Pnpja21217X4'
};

export const mockDataGetUserDetailData: UserDetailReponse = {
    data: {
        id: 1,
        email: 'george.bluth@reqres.in',
        first_name: 'George',
        last_name: 'Bluth',
        avatar: 'https://reqres.in/img/faces/1-image.jpg'
    },
    support: {
        url: 'https://reqres.in/#support-heading',
        text: 'To keep ReqRes free, contributions towards server costs are appreciated!'
    }
}

export class MockUserServices {
    login(email: string, password: string) {
        return of(mockDataLoginTokenData)
    }

    getUserDetail(id: number) {
        const mockDataClone = { ...mockDataGetUserDetailData };
        mockDataClone.data.id = id;
        return of(mockDataClone);
    }
}
