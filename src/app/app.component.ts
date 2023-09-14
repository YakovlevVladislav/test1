import { Component, OnInit } from '@angular/core';
import { ProductsService } from './product/service/products.service';
import { Daum } from './product/product.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'ang';
	products: Daum[] = []
	constructor(private _productService: ProductsService) { }
	
	ngOnInit() {
		this._productService.getProducts().subscribe(resp => {
			this.products = resp.data
			console.log('this.products', this.products)
		})
	}

}
