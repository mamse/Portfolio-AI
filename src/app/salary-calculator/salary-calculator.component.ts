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

  calculateTimes() {
    this.yachtTime = this.calculateTimeToAfford(1000000);
    this.islandTime = this.calculateTimeToAfford(10000000);
  }

  private calculateTimeToAfford(price: number): string {
    const months = Math.ceil(price / this.monthlySalary);
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    const yearString = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
    const monthString = remainingMonths > 0 ? `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : '';

    return `${yearString}${yearString && monthString ? ' and ' : ''}${monthString}`;
  }
}

