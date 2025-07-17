package com.gabriel.Prueba_Tecnica_BackEnd.service;

import com.gabriel.Prueba_Tecnica_BackEnd.dto.ProductStockDto;
import com.gabriel.Prueba_Tecnica_BackEnd.entity.Product;
import com.gabriel.Prueba_Tecnica_BackEnd.exception.ProductConflictException;
import com.gabriel.Prueba_Tecnica_BackEnd.exception.ProductNotFoundException;

import java.util.List;

public interface ProductService {

    Product createProduct(Product product) throws ProductConflictException;
    Product getProductById(Long id) throws ProductNotFoundException;
    List<Product> getAllProducts();
    List<ProductStockDto> getProductStockDtoByName(String productName) throws ProductNotFoundException;
    Product updateProduct(Long id ,Product product) throws ProductNotFoundException;
    void deleteProduct(Long id) throws ProductNotFoundException;
}
