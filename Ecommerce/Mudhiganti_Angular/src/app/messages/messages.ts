
export class MyItems {

  constructor(
    public firstName: string,
    public lastName: string
    
  ) {  }

}
export class Update {

  constructor(
    public userid?: string,
    public keywords?: string,
    public latest?: string,
    public categoryids?: string
    
  ) {  }

}
export class Delete {

  constructor(
    public itemid: string
    
  ) {  }

}

export class Message {

  constructor(
    public itemid: string,
    public sender: string,
    public receiver: string,
    public message: string
    
  ) {  }

}
