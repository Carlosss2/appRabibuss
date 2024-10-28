import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

import { TableMaterialComponent } from '../table-material/table-material.component';
import { Viajes } from '../../models/viajes';
import { ApiService } from '../../service/service.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-viajes',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,TableMaterialComponent,HttpClientModule,FormsModule],
  templateUrl: './viajes.component.html',
  styleUrl: './viajes.component.scss'
})
export class ViajesComponent {

  searchId: number = 0;  // ID de búsqueda
  viaje: Viajes | null = null;  // Resultado de búsqueda
  
  constructor(private apiService: ApiService) {}

  buscarPorId(): void {
    if (this.searchId) {
      this.apiService.getViajeById(this.searchId).subscribe({
        next: (data) => {
          this.viaje = data;
          console.log('Registro encontrado:', data);
        },
        error: (error) => {
          console.error('Error al buscar el registro:', error);
          this.viaje = null;
        }
      });
    }
  }

}
