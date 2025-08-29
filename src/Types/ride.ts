export interface Ride {
    _id: Id;
    user: User;
    pickupLocation: string;
    dropLocation: string;
    payment: number;
    status: string;
    createdAt: CreatedAt;
    updatedAt: UpdatedAt;
    driver: Driver;
}

export interface Id {
    $oid: string;
}

export interface User {
    $oid: string;
}

export interface CreatedAt {
    $date: string;
}

export interface UpdatedAt {
    $date: string;
}

export interface Driver {
    $oid: string;
}
