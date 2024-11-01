export interface ReqResLogResponse {
    token: string;
    user:  User;
}

export interface User {
    id:    string;
    name:  string;
    email: string;
}
