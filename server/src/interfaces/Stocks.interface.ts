export interface Trade {
    company: string
    date_trade: string
    unit_price: string | number
    color: string
    quanity: string | number
    total: string | number
    brokerage: string | number
}

export interface Stock {
    company: string
    sector: Sector
    ticker: string
}

enum Sector {
    Bank = 'Bank',
    Retail = 'Retail',
    Energy_And_Cements = 'Energy and Cements',
    Aeronautics = 'Aeronautics',
    Energy = 'Energy',
    Construction = 'Construction',
    Holding = 'Holding',
    Stationer = 'Stationer',
    Industrial = 'Industrial',
    Agricultural = 'Agricultural',
    Oil = 'Oil',
    Tech = 'Tech',
    Eating = 'Eating',
    Gas = 'Gas'
}