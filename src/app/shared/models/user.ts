export class User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string
}


export class LoginReponse {
    token: string
}


export class UserDetailReponse {
    data: User;
    support: any;
}
