import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { ZooListComponent }  from './zoo-list.component';
import { EditZooComponent } from './edit-zoo.component';
import { NewZooComponent} from './new-zoo.component';
import { ViewAgePipe } from './viewAge.pipe';


@NgModule({
  imports: [ BrowserModule,
            FormsModule ],
  declarations: [ AppComponent, ZooListComponent, EditZooComponent, NewZooComponent, ViewAgePipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
