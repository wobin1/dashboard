import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatCardModule} from '@angular/material/card'
import {MatTableModule} from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';



const Material = [MatToolbarModule,
                  MatSidenavModule,
                  MatIconModule,
                  MatListModule,
                  MatGridListModule,
                  MatCardModule,
                  MatTableModule,
                  MatFormFieldModule,
                  MatPaginatorModule,
                  MatButtonModule
                  
                  ]


@NgModule({
  declarations: [],
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
