# Angular-QueryBuilder
Fork of [shout/Angular-QueryBuilder](https://github.com/shout/Angular-QueryBuilder).

A modernized Angular 16+ query builder based on jQuery QueryBuilder. Support for heavy customization with Angular 
components and provides a flexible way to handle custom data types.

# Getting Started

## Install
Angular 16

`npm install nx-angular16-query-builder`

## Legacy Install

- Angular 10-15 use [angular2-query-builder](https://www.npmjs.com/package/angular2-query-builder) 0.6.2
- Angular 9, use [angular2-query-builder](https://www.npmjs.com/package/angular2-query-builder) 0.6.0
- Angular 8, use [angular2-query-builder](https://www.npmjs.com/package/angular2-query-builder) 0.5.1
- Angular 6-7, use [angular2-query-builder](https://www.npmjs.com/package/angular2-query-builder) 0.4.2
- Angular 4-5, use [angular2-query-builder](https://www.npmjs.com/package/angular2-query-builder) 0.3.2

`npm install angular2-query-builder`

## Demo
Play with the [Demo here](https://shout.github.io/Angular-QueryBuilder/demo/).

[Editable Demo](https://shout.github.io/Angular-QueryBuilder/editor/)

## Documentation

[Documentation link](https://shout.github.io/Angular-QueryBuilder/)

# Examples

## Basic Usage

##### `app.module.ts`
```javascript
import { QueryBuilderModule } from "nx-angular-query-builder";
import { AppComponent } from "./app.component"

@NgModule(imports: [
  ...,
  QueryBuilderModule,
  IonicModule.forRoot(AppComponent) // (Optional) for IonicFramework 2+
])
export class AppModule { }
```

##### `app.component.html`
```html
...
<query-builder [groupFieldsConfig]="groupConfig" [(ngModel)]="query" [config]="config"></query-builder>
...
```
##### `app.component.ts`
```javascript
import { QueryBuilderConfig, GroupFieldsConfig } from 'nx-angular-query-builder';

export class AppComponent {
  query = {
    condition: 'and',
    rules: [
      {field: 'age', operator: '<=', value: 'Bob'},
      {field: 'gender', operator: '>=', value: 'm'}
    ]
  };
  
  config: QueryBuilderConfig = {
    fields: {
      age: {name: 'Age', type: 'number'},
      gender: {
        name: 'Gender',
        type: 'category',
        options: [
          {name: 'Male', value: 'm'},
          {name: 'Female', value: 'f'}
        ]
      },
      notes: { name: 'Notes', type: 'textarea', operators: ['=', '!='] },
      birthday: {
        name: 'Birthday', type: 'date', operators: ['=', '<=', '>'],
        defaultValue: (() => new Date())
      },
    }
  }
  
  groupConfig: Array<GroupFieldsConfig> = [
    {
      label: "Group 1",
      fields: ["Gender", "Name", "Age"]
    },
    {
      label: "Group 2",
      fields: ["Notes", "Birthday", "School"]
    }
  ]

}
```
