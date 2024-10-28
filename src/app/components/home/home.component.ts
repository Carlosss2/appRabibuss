import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { DatePipe } from '@angular/common';
import { MiPipePipe } from '../../pipes/mi-pipe.pipe';
import { ApiService } from '../../service/service.service'; // Import your ApiService
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule , HeaderComponent, FooterComponent, DatePipe, MiPipePipe,],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedDate: string | null = null;
  selectedDestino: string = '';
  
  // Properties for input fields
  origen: string = '';
  destino: string = '';
  asientosDisponibles: string = '';
  fecha: string = '';

  constructor(private apiService: ApiService) {} // Inject ApiService

  onDateChange(event: any) {
    this.selectedDate = event.target.value;
  }

  onDestino(event: any) {
    this.selectedDestino = event.target.value;
  }

  // Method to add a new viaje
  agregarViaje() {
    const registerRequest = {
      origen: this.origen,
      destino: this.destino,
      pasajeros: this.asientosDisponibles,
      fecha: this.fecha
    };

    this.apiService.addViaje(registerRequest).subscribe({
      next: (response) => {
        console.log('Viaje agregado:', response);
        // Optionally reset the form fields
        this.origen = '';
        this.destino = '';
        this.asientosDisponibles = '';
        this.fecha = '';
      },
      error: (error) => {
        console.error('Error al agregar viaje:', error);
      }
    });
  }
}
