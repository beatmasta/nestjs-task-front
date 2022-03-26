export interface Employee {
    name: string;
    email: string;
    phone: string;
    city: string;
    zip: string;
    address1: string;
    address2: string;
}

export interface RequestError {
    message: string;
}

export interface PaginationObject {
    page: number;
    limit: number;
}
