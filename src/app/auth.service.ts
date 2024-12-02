import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  async token () {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNzIxMTczNDYzNzU4LCJpYXQiOjE3MjExNDIzNTl9.-0ns-T9sUFN_4HdmPVqB2N2wuym7NdQk7EORu2AVGMc";
  }
}
