import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { DeleteDialogComponentComponent } from '../delete-dialog-component/delete-dialog-component.component';
import { ApiService } from '../../service/service.service';
import { Viajes } from '../../models/viajes';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-table-material',
  standalone: true,
  imports: [MatTableModule, MatDialogModule],
  templateUrl: './table-material.component.html',
  styleUrls: ['./table-material.component.scss']
})
export class TableMaterialComponent implements OnInit {
  displayedColumns: string[] = ['id', 'origen', 'destino','options']; // Update this array to match your column definitions
  dataSource: Viajes[] = [];

  constructor(private dialog: MatDialog, private apiService: ApiService) {
    this.loadViajes();
  }

  ngOnInit(): void {
    this.loadViajes();
  }

  // Método para cargar los registros
  loadViajes(): void {
    this.apiService.getViajes().subscribe({
      next: (viajes) => {
        this.dataSource = viajes;
        console.log('Viajes cargados:', this.dataSource); // Agrega esto para verificar
      },
      error: (error) => {
        console.error('Error al cargar los registros:', error);
      }
    });
  }
  

  openDialogDelete(viajeId: number): void {
    const dialogRef = this.dialog.open(DeleteDialogComponentComponent, {
      data: { id: viajeId } // Aquí se pasa el ID del viaje
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadViajes(); // Recarga la lista de viajes si se eliminó con éxito
      } else {
        console.log('Eliminación cancelada o fallida');
      }
    });
  }
  
  
  openDialog(viaje: Viajes): void {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: { 
        viaje_id: viaje.id, 
        origen: viaje.origen,
        destino: viaje.destino
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadViajes();
      } else {
        console.log('Actualización cancelada o fallida');
      }
    });
  }
  

  updateElement(element: Viajes): void {
    console.log("Actualizar", element);
    this.openDialog(element); // Abre el diálogo con los datos del viaje
  }
 
    
  deleteElement(viajeId: number): void {
    this.openDialogDelete(viajeId); // Pasa el ID correcto aquí
    console.log(viajeId)
  }
  
}
