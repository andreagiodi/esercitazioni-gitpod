export interface Root {
    get: string
    parameters: Parameters
    errors: any[]
    results: number
    paging: Paging
    response: Response[]
}

export interface Parameters {
    id: string
}

export interface Paging {
    current: number
    total: number
}

export interface Response {
    team: Team
    venue: Venue
}

export interface Team {
    id: number
    name: string
    code: any
    country: string
    founded: any
    national: boolean
    logo: string
}

export interface Venue {
    id: any
    name: any
    address: any
    city: any
    capacity: any
    surface: any
    image: any
}
