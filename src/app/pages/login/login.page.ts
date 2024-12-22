import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  activeCard: number | null = null;

  cards = [
    { title: 'Mobil', color: '#059eac', cardImgSrc: 'assets/img/turk.png' },
    { title: 'Evde İnternet', color: '#006776', cardImgSrc: 'assets/img/english.png' },
    { title: 'Ev Telefonu', color: '#0082ca', cardImgSrc: 'assets/img/profil_avatar.png' },
  ];

  history = [
    {
      description: 'Aldığımız Ödüller',
      image: 'assets/img/turk.png',
    },
    {
      description: 'iPhone 16 Kazan',
      image: 'assets/img/english.png',
    },
    {
      description: 'Muud Look',
      image: 'assets/img/arabia.png',
    },
    {
      description: 'Fırsatı Kaçırma',
      image: 'assets/imgs/deals-icon.png',
    },
  ];

  isModalOpen = false;
  selectedStory: any;
  progress = 0;
  storyIndex = 0;

  constructor() {}

  ngOnInit() {}


  toggleCard(index: number) {
    this.activeCard = this.activeCard === index ? null : index;
  }

  onButtonClick(event: Event) {
    event.stopPropagation();
    console.log('Buton tıklandı!');
  }


  openModal(index: number) {
    this.storyIndex = index;
    this.selectedStory = this.history[index];
    this.isModalOpen = true;
    this.startStoryTimer();
  }

  closeModal() {
    this.isModalOpen = false;
    this.progress = 0;
  }

  startStoryTimer() {
    this.progress = 0;
    const interval = setInterval(() => {
      this.progress += 1;
      if (this.progress >= 100) {
        clearInterval(interval);
        this.nextStory();
      }
    }, 90); // 90ms * 100 = 9 seconds
  }

  nextStory() {
    if (this.storyIndex < this.history.length - 1) {
      this.storyIndex++;
      this.selectedStory = this.history[this.storyIndex];
      this.startStoryTimer();
    } else {
      this.closeModal(); // Tüm hikayeler bittiğinde modal kapanır
    }
  }
}
