import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../service/service.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-update-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
  ],
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent {
  id: string = '';
  origen: string = '';
  destino: string = '';

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { viaje_id: string, origen: string, destino: string }
  ) {
    this.id = data.viaje_id;
    this.origen = data.origen;
    this.destino = data.destino;
  }
  

  actualizarRuta(): void {
    this.apiService.updateViaje(this.id, this.origen, this.destino).subscribe({
      next: (response) => {
        console.log('Ruta actualizada:', response);
        this.dialogRef.close(true);
      },
      error: (error) => {
        console.error('Error al actualizar la ruta:', error);
      }
    });
  }
  
  
  

  cancel(): void {
    this.dialogRef.close();  // Cierra el diálogo sin actualizar
  }
}
