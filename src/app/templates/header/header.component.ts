import { ChangeDetectionStrategy, Component} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, MenubarModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.responsive.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent{

}
