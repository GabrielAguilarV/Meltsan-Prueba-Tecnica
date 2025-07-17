package com.gabriel.Prueba_Tecnica_BackEnd.controller;

import com.gabriel.Prueba_Tecnica_BackEnd.dto.ProductStockDto;
import com.gabriel.Prueba_Tecnica_BackEnd.entity.Product;
import com.gabriel.Prueba_Tecnica_BackEnd.exception.ProductConflictException;
import com.gabriel.Prueba_Tecnica_BackEnd.exception.ProductNotFoundException;
import com.gabriel.Prueba_Tecnica_BackEnd.service.ProductService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@AllArgsConstructor
public class ProductController {

    private ProductService productService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Product> getAllProducts() {

        return productService.getAllProducts();
    }

    @GetMapping("/stock/{productName}")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductStockDto> getProductStockDtoByName(@PathVariable String productName) throws ProductNotFoundException {

        return productService.getProductStockDtoByName(productName);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Product createProduct(@Valid @RequestBody Product product) throws ProductConflictException {

        return productService.createProduct(product);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Product updateProduct(@PathVariable Long id, @Valid @RequestBody Product product) throws ProductNotFoundException {

        return productService.updateProduct(id, product);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable Long id) throws ProductNotFoundException {

        productService.deleteProduct(id);
    }
}
