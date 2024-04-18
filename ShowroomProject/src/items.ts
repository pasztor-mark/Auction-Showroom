export interface AuctionItems {
    AuctionItems: AuctionItem[]
  }
  
  export interface AuctionItem {

    name: string
    img1: string
    img2: string
    description: string
    year: number
    mileage: number
    displacement: number
    condition: string
    hp: number
    currentBid: number
  }
  