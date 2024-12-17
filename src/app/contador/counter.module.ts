import { NgModule } from "@angular/core";
import { ContadorComponent } from "./components/conter/contador.component";

@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ]
})
export class CounterModule{}