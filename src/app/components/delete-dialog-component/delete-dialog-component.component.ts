import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../service/service.service'; // Importa tu servicio

import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDialogClose } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog-component',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './delete-dialog-component.component.html',
  styleUrls: ['./delete-dialog-component.component.scss']
})
export class DeleteDialogComponentComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private apiService: ApiService // Inyecta tu servicio
  ) {
    console.log('ID recibido en el diálogo:', this.data.id); // Agrega esto
  }
  

  // Método para confirmar la eliminación
  confirmDelete(): void {
    if (this.data.id) {
      this.apiService.deleteViaje(this.data.id).subscribe({
        next: () => {
          console.log('Viaje eliminado con éxito');
          this.dialogRef.close(true); // Cierra el diálogo y retorna true
        },
        error: (error) => {
          console.error('Error al eliminar el viaje:', error);
          this.dialogRef.close(false); // Cierra el diálogo y retorna false
        }
      });
    } else {
      console.error('ID del viaje es undefined');
      this.dialogRef.close(false);
    }
  
}





}
