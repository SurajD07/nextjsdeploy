export interface OrderItem {
    id: string
    name: string
    color: string
    size: string
    quantity: number
    price: number
    originalPrice?: number
    discount?: number
    image: string
}

// export interface ShippingAddress {
//     id: string
//     name: string
//     address: string
//     city: string
//     state: string
//     pincode: string
//     isSelected?: boolean
// }
export interface ShippingAddress {
    id: string
    name: string
    address: string
    city?: string
    state?: string
    pincode?: string
    isSelected: boolean
    company?: string 
}


export interface PaymentInfo {
    method: 'credit' | 'netbanking' | 'upi' | 'cod'
    cardNumber?: string
    cardName?: string
    expiryDate?: string
}
