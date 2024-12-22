import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-code-page',
  templateUrl: './example-code-page.page.html',
  styleUrls: ['./example-code-page.page.scss'],
})
export class ExampleCodePagePage implements OnInit {
  activeCard: number | null = null;

  cards = [
    { title: 'Mobil', color: '#059eac', cardImgSrc: 'assets/img/turk.png' },
    { title: 'Evde İnternet', color: '#006776', cardImgSrc: 'assets/img/english.png' },
    { title: 'Ev Telefonu', color: '#0082ca', cardImgSrc: 'assets/img/profil_avatar.png' },
  ];

  history = [
    {
      description: 'Aldığımız Ödüller',
      image: 'assets/imgs/awards-icon.png',
    },
    {
      description: 'iPhone 16 Kazan',
      image: 'assets/imgs/iphone-icon.png',
    },
    {
      description: 'Muud Look',
      image: 'assets/imgs/muud-icon.png',
    },
    {
      description: 'Fırsatı Kaçırma',
      image: 'assets/imgs/deals-icon.png',
    },
  ];

  toggleCard(index: number) {
    this.activeCard = this.activeCard === index ? null : index;
  }

  onButtonClick(event: Event) {
    event.stopPropagation();
    console.log('Buton tıklandı!');
  }

  ngOnInit() {}
}
