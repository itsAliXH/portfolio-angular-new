import { Routes } from '@angular/router';
import { PortfolioShell } from './pages/portfolio-shell/portfolio-shell';

export const USER_ROUTES: Routes = [
  { path: '', component: PortfolioShell },
  { path: 'about', component: PortfolioShell },
  { path: 'projects', component: PortfolioShell },
  { path: 'contact', component: PortfolioShell },
];
