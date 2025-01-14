import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GroupFieldsConfig } from './query-builder/query-builder.interfaces';

@Injectable({
  providedIn: 'root'
})
export class QueryBuilderService {

  private _groupedFields: Array<GroupFieldsConfig> = [];
  private _source = new Subject();
  public currentMessage = this._source.asObservable();

  constructor() { }

  changeMessage(message: any) {
    this._source.next(message);
  }

  setGroupedFields(data: Array<GroupFieldsConfig>) {
    this._groupedFields = JSON.parse(JSON.stringify(data));
  }

  getGroupedFields(): Array<GroupFieldsConfig> {
    return this._groupedFields;
  }

}
