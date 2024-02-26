import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {


  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrolled = window.scrollY > 50; // Change '20' to the scroll position where you want to apply the background
  }


  ngOnInit(): void {

  }

  contact = [
    { icon: 'bi bi-phone', phone: 'Phone', number: '+91 9065106006' },
    { icon: 'bi bi-envelope-open', phone: 'Email', number: 'danishjamil000@gmail.com' },
    { icon: 'bi bi-geo-alt-fill', phone: 'Location', number: 'Hyderabad' },
    { icon: 'bi bi-calendar2-day', phone: 'Birthday', number: 'Nov 04, 2001' },
  ]

  experiance = [
    { img: 'assets/images/icons/1.svg', name: 'Ui/Ux Design', description: ' I descriptionam a frontend developer from Hyderabad, India, skilled in creating visually appealing and functional websites that provide exceptional user experiences. ' },
    { img: 'assets/images/icons/2.svg', name: 'Web Developer', description: ' I descriptionam a frontend developer from Hyderabad, India, skilled in creating visually appealing and functional websites that provide exceptional user experiences. ' },
    { img: 'assets/images/icons/3.svg', name: 'Web Designer', description: ' I descriptionam a frontend developer from Hyderabad, India, skilled in creating visually appealing and functional websites that provide exceptional user experiences. ' },
    { img: 'assets/images/icons/1.svg', name: 'Ui/Ux Design', description: ' I descriptionam a frontend developer from Hyderabad, India, skilled in creating visually appealing and functional websites that provide exceptional user experiences. ' }
  ]
  icons = [
    { name: 'bi bi-facebook', color: '#1877F2' },
    { name: 'bi bi-instagram', color: '#cd486b' },
    { name: 'bi bi-linkedin', color: '#0072b1' },
    { name: 'bi bi-twitter', color: '#1877F2' },
    { name: 'bi bi-github', color: '#fff' },
  ]

  skills = [
    { name: 'HTML', progress: '75%', precentage: '75%' },
    { name: 'CSS', progress: '50%', precentage: '50%' },
    { name: 'JAVASRIPT', progress: '25%', precentage: '25%' },
    { name: 'TYPESCRIPT', progress: '20%', precentage: '20%' },
    { name: 'ANGULAR', progress: '45%', precentage: '45%' },
    { name: 'JAVA', progress: '35%', precentage: '35%' },
  ]

  items = [
    { icon: 'bi bi-hexagon', img: 'assets/images/skills/html.png', pvalue: '75%' },
    { icon: 'bi bi-hexagon', img: 'assets/images/skills/css.png', pvalue: '50%' },
    { icon: 'bi bi-hexagon', img: 'assets/images/skills/javascript.png', pvalue: '25%' },
    { icon: 'bi bi-hexagon', img: 'assets/images/skills/typesccript.png', pvalue: '20%' },
    { icon: 'bi bi-hexagon', img: 'assets/images/skills/angular.png', pvalue: '45%' },
    { icon: 'bi bi-hexagon', img: 'assets/images/skills/java.png', pvalue: '35%' },
  ]

  showProgressBar = false;
  progress = 0;

  showProgress(percent: number) {
    this.showProgressBar = true;
    this.progress = percent;
  }

  resetProgress() {
    this.showProgressBar = false;
    this.progress = 0;
  }

  projects = [
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkiWZ58ytFUl3FYocuS4rhe_qikRQB7docA&usqp=CAU', name: 'Customer Churn Prediction', view: 'View Project' },
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkiWZ58ytFUl3FYocuS4rhe_qikRQB7docA&usqp=CAU', name: 'Customer Churn Prediction', view: 'View Project' },
  ]
  submitForm() {
    // Handle form submission logic here
    // For example, you can access form values using this.contactForm.value
    // console.log(this.contactForm.value);
  }
}
