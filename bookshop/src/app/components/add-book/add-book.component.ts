import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private toastr: ToastrService
    ) {
    this.bookForm = this.formBuilder.group({
      name: [''],
      price: [''],
      author: ['']
    })
  }
  ngOnInit(): void { }

  onSubmit(): any {
    this.crudService.AddBook(this.bookForm.value).subscribe(() =>{
      console.log('Data added successfully')
      this.toastr.success('Data added successfully!', 'Success');
      this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
      }, (err) =>{
        console.log(err);
    });
  }
}
