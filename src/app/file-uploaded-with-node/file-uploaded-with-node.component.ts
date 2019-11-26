import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'app-file-uploaded-with-node',
  templateUrl: './file-uploaded-with-node.component.html',
  styleUrls: ['./file-uploaded-with-node.component.css']
})
export class FileUploadedWithNodeComponent implements OnInit {

  title = 'fileUpload';
  images;
  multipleImages = [];
  source: LocalDataSource = new LocalDataSource();
 
  settings = {
    actions: {
      delete : false,
      add: false,
      edit:false,
      position: 'right',
    },
    add: {
      confirmCreate: false,
    },
    edit: {
      confirmSave: false,
    },
    pager: {
      display: true,
      perPage: 5
    },

    columns: {
      Country: {
        title: 'Country',
      },
      Age: {
        title: 'Age',
      },
      "First Name": {
        title: 'First Name',
      },
      Date: {
        title: 'Date',
      },
    },
  };

  // data = [
  //   {
  //     id: 1,
  //     name: "Leanne Graham",
  //     username: "Bret",
  //     email: "Sincere@april.biz"
  //   },
  //   {
  //     id: 2,
  //     name: "Ervin Howell",
  //     username: "Antonette",
  //     email: "Shanna@melissa.tv"
  //   },

  //   // ... list of items

  //   {
  //     id: 11,
  //     name: "Nicholas DuBuque",
  //     username: "Nicholas.Stanton",
  //     email: "Rey.Padberg@rosamond.biz"
  //   },
  //   {
  //     id: 3,
  //     name: "Leanne Graham",
  //     username: "Bret",
  //     email: "Sincere@april.biz"
  //   },
  //   {
  //     id: 4,
  //     name: "Ervin Howell",
  //     username: "Antonette",
  //     email: "Shanna@melissa.tv"
  //   },

  //   // ... list of items

  //   {
  //     id: 5,
  //     name: "Nicholas DuBuque",
  //     username: "Nicholas.Stanton",
  //     email: "Rey.Padberg@rosamond.biz"
  //   },
  //   {
  //     id: 6,
  //     name: "Leanne Graham",
  //     username: "Bret",
  //     email: "Sincere@april.biz"
  //   },
  //   {
  //     id: 7,
  //     name: "Ervin Howell",
  //     username: "Antonette",
  //     email: "Shanna@melissa.tv"
  //   },

  //   // ... list of items

  //   {
  //     id: 8,
  //     name: "Nicholas DuBuque",
  //     username: "Nicholas.Stanton",
  //     email: "Rey.Padberg@rosamond.biz"
  //   }
  // ];


  constructor(private http :HttpClient) {
    this.setdata();
  }
  ngOnInit() {

  }

  onDeleteConfirm(event) {
    console.log("Delete Event In Console")
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    console.log("Create Event In Console")
    console.log(event);

  }

  onSaveConfirm(event) {
    console.log("Edit Event In Console")
    console.log(event);
  }

  setdata() {
   // this.source.load(this.data)
  }



  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  selectMultipleImage(event){
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.images);

    this.http.post<any>('http://localhost:3000/docs', formData).subscribe(res=>{
      console.log(res);
      this.source.load(res)
      
  });
  }
}
