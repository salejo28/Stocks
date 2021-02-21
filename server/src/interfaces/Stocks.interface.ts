export interface Trade {
    company: string
    ticker: string
    sector: Sector
    date_trade: string
    unit_price: string | number
    color: string
    quantity: string | number
    sold: string | boolean
    total: string | number
    brokerage: string | number
    actual_value?: string | number
    user_id: string | number
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