
export class RestaurauntDTO {
  id: string
  title: string
  description: string
  image: string
  slot: Slot[]
}

export class RestaurauntTranformDTO {
  id: string
  title: string
  description: string
  image: string
  slot: Slot[][]
}

class Slot {
  slotId: string
  customerName: string
  date: string
  time: string
}
