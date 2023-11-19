// salary-calculator.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.scss']
})
export class SalaryCalculatorComponent {
  monthlySalary = 0;
  yachtTime: string | undefined;
  islandTime: string | undefined;
  iphoneTime: string | undefined;
  ferrariTime: string | undefined;

  calculateTimes() {
    this.iphoneTime = this.calculateTimeToAfford(1000);
    this.ferrariTime = this.calculateTimeToAfford(500000);
    this.yachtTime = this.calculateTimeToAfford(1000000);
    this.islandTime = this.calculateTimeToAfford(10000000);
  }

  private calculateTimeToAfford(price: number): string {
    const months = Math.floor(price / this.monthlySalary);
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    const days = Math.floor((price / this.monthlySalary) * 30); // Assuming an average month has 30 days

    if (years >= 1) {
      const yearString = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
      const monthString = remainingMonths > 0 ? `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : '';
      return `${yearString}${yearString && monthString ? ' and ' : ''}${monthString}`;
    } else if (remainingMonths >= 1) {
      return `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    } else {
      return `${days} day${days > 1 ? 's' : ''}`;
    }
  }
}


