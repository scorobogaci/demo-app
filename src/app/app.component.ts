import {Component, ElementRef, ViewChild} from '@angular/core';

class Item {
  size: string;
  price: number;
  pcs: number;

  constructor(size: string, price: number) {
    this.size = size;
    this.price = price;
  }

  getTotalPrice() {
    return this.price * this.pcs;
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /*static data objects*/

  bigSizePhotos = [
    {
      id: 14,
      size: '40 x 50',
      price: 105,
      currency: 'MDL'
    },
    {
      id: 15,
      size: '50 x 60',
      price: 130,
      currency: 'MDL'
    },
    {
      id: 16,
      size: '60 x 80',
      price: 190,
      currency: 'MDL'
    },
    {
      id: 17,
      size: '60 x 90',
      price: 210,
      currency: 'MDL'
    },
    {
      id: 18,
      size: '90 x 120',
      price: 320,
      currency: 'MDL'
    },
    {
      id: 19,
      size: '90 x 150',
      price: 350,
      currency: 'MDL'
    },
  ];

  smallSizePhotos = [
    {
      id: 1,
      size: '10 x 15',
      price: 3,
      currency: 'MDL'
    },
    {
      id: 2,
      size: '15 x 20',
      price: 14,
      currency: 'MDL'
    },
    {
      id: 3,
      size: '13 x 18',
      price: 12,
      currency: 'MDL'
    },
    {
      id: 4,
      size: 'A4 21 x 29.7',
      price: 15,
      currency: 'MDL'
    },
  ];

  magnetSizePhotos = [
    {
      id: 5,
      size: '7 x 10',
      price: 30,
      currency: 'MDL'
    },
    {
      id: 6,
      size: '10 x 15',
      price: 40,
      currency: 'MDL'
    },
    {
      id: 7,
      size: '14 x 19',
      price: 50,
      currency: 'MDL'
    },
    {
      id: 8,
      size: '20 x 25',
      price: 80,
      currency: 'MDL'
    },
  ];

  clothSizePhotos = [
    {
      id: 9,
      size: '30 x 45',
      price: 420,
      currency: 'MDL'
    },
    {
      id: 10,
      size: '40 x 60',
      price: 590,
      currency: 'MDL'
    },
    {
      id: 11,
      size: '50 x 60',
      price: 650,
      currency: 'MDL'
    },
    {
      id: 12,
      size: '60 x 80',
      price: 750,
      currency: 'MDL'
    },
    {
      id: 13,
      size: '80 x 120',
      price: 1150,
      currency: 'MDL'
    },
  ];

  @ViewChild('input1')
  input1: ElementRef;
  warningMessageInput1 = false;
  bigSizeItems: Item[] = [];
  bigSizeTotalPrice = 0;
  currentItem1: Item;
  isOptionSelected1 = true;

  @ViewChild('input2')
  input2: ElementRef;
  warningMessageInput2 = false;
  smallSizeItems: Item[] = [];
  smallSizeTotalPrice = 0;
  currentItem2: Item;
  isOptionSelected2 = true;


  @ViewChild('input3')
  input3: ElementRef;
  warningMessageInput3 = false;
  magnetSizeItems: Item[] = [];
  magnetSizeTotalPrice = 0;
  currentItem3: Item;
  isOptionSelected3 = true;

  @ViewChild('input4')
  input4: ElementRef;
  warningMessageInput4 = false;
  clothSizeItems: Item[] = [];
  clothSizeTotalPrice = 0;
  currentItem4: Item;
  isOptionSelected4 = true;


  title = 'app';
  textMessage = 'Alege dimensiunea care se potriveste pentru tine si familia ta';


  //input1 handlers
  fileChangeInput1(event) {
    let currentPrice = 0;
    this.currentItem1.pcs = event.target.files.length;
    this.bigSizeItems.push(this.currentItem1);
    for (let item of this.bigSizeItems) {
      this.bigSizeTotalPrice = currentPrice += item.getTotalPrice();
    }
    //reset
    this.input1.nativeElement.value = "";
  }

  setCurrentItem1(object) {
    this.warningMessageInput1 = false;
    console.log(this.warningMessageInput1);
    this.isOptionSelected1 = false;
    this.currentItem1 = new Item(object.size, object.price);
  }

  removeItem1(item) {
    let index = this.bigSizeItems.indexOf(item);
    this.bigSizeItems.splice(index, 1);
    if (this.bigSizeItems.length > 0) {
      let currentPrice = 0;
      for (let item of this.bigSizeItems) {
        this.bigSizeTotalPrice = currentPrice += item.getTotalPrice();
      }
    }
    else {
      this.bigSizeTotalPrice = 0;
    }

  }


  //input2 handlers
  fileChangeInput2(event) {
    let currentPrice = 0;
    this.currentItem2.pcs = event.target.files.length;
    this.smallSizeItems.push(this.currentItem2);
    for (let item of this.smallSizeItems) {
      this.smallSizeTotalPrice = currentPrice += item.getTotalPrice();
    }
    //reset
    this.input2.nativeElement.value = "";
  }

  setCurrentItem2(object) {
    this.warningMessageInput2 = false;
    this.isOptionSelected2 = false;
    this.currentItem2 = new Item(object.size, object.price);
  }

  removeItem2(item) {
    let index = this.smallSizeItems.indexOf(item);
    this.smallSizeItems.splice(index, 1);
    if (this.smallSizeItems.length > 0) {
      let currentPrice = 0;
      for (let item of this.smallSizeItems) {
        this.smallSizeTotalPrice = currentPrice += item.getTotalPrice();
      }
    }
    else {
      this.smallSizeTotalPrice = 0;
    }
  }

  //input3 handlers
  fileChangeInput3(event) {
    let currentPrice = 0;
    this.currentItem3.pcs = event.target.files.length;
    this.magnetSizeItems.push(this.currentItem3);
    for (let item of this.magnetSizeItems) {
      this.magnetSizeTotalPrice = currentPrice += item.getTotalPrice();
    }
    //reset
    this.input3.nativeElement.value = "";
  }

  setCurrentItem3(object) {
    this.warningMessageInput3 = false;
    this.isOptionSelected3 = false;
    this.currentItem3 = new Item(object.size, object.price);
  }

  removeItem3(item) {
    let index = this.magnetSizeItems.indexOf(item);
    this.magnetSizeItems.splice(index, 1);
    if (this.magnetSizeItems.length > 0) {
      let currentPrice = 0;
      for (let item of this.magnetSizeItems) {
        this.magnetSizeTotalPrice = currentPrice += item.getTotalPrice();
      }
    }
    else {
      this.magnetSizeTotalPrice = 0;
    }
  }

  //input4 handlers
  fileChangeInput4(event) {
    let currentPrice = 0;
    this.currentItem4.pcs = event.target.files.length;
    this.clothSizeItems.push(this.currentItem4);
    for (let item of this.clothSizeItems) {
      this.clothSizeTotalPrice = currentPrice += item.getTotalPrice();
    }
    //reset
    this.input4.nativeElement.value = "";
  }

  setCurrentItem4(object) {
    this.warningMessageInput4 = false;
    this.isOptionSelected4 = false;
    this.currentItem4 = new Item(object.size, object.price);
  }

  removeItem4(item) {
    let index = this.clothSizeItems.indexOf(item);
    this.clothSizeItems.splice(index, 1);
    if (this.clothSizeItems.length > 0) {
      let currentPrice = 0;
      for (let item of this.clothSizeItems) {
        this.clothSizeTotalPrice = currentPrice += item.getTotalPrice();
      }
    }
    else {
      this.clothSizeTotalPrice = 0;
    }
  }

  applyWarningToMessage(input) {
    if (this.isOptionSelected1 && input === '#input1') {
      this.warningMessageInput1 = true;
      console.log(this.warningMessageInput1)
    } else if (this.isOptionSelected2 && input === '#input2') {
      this.warningMessageInput2 = true;
    } else if (this.isOptionSelected3 && input === '#input3') {
      this.warningMessageInput3 = true;
    } else if (this.isOptionSelected4 && input === '#input4') {
      this.warningMessageInput4 = true;
    }
  }
}

//VictoriaBank Payment Gateway / Credit Card Online	Module
