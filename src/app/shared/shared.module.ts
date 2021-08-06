import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserService } from './services/user.service';
import { PostComponent } from './components/post/post.component';
import { PostService } from './services/post.service';
import { HoverHightlightDirective } from './directives/hover-hightlight.directive';
import { RandomUppperCasePipe } from './pipes/random-uppper-case.pipe';

const components = [
    HeaderComponent,
    FooterComponent,
    PostComponent,
];

const directives = [
    HoverHightlightDirective,
];

const pipes = [
    RandomUppperCasePipe
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    declarations: [
        ...components,
        ...directives,
        ...pipes
    ],
    exports: [
        ...components,
        ...directives,
        ...pipes
    ],
    providers: [
        UserService,
        PostService
    ]
})
export class SharedModule { }
