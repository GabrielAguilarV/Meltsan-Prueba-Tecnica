package com.gabriel.Prueba_Tecnica_BackEnd.service;

import com.gabriel.Prueba_Tecnica_BackEnd.dto.ProductStockDto;
import com.gabriel.Prueba_Tecnica_BackEnd.entity.Product;
import com.gabriel.Prueba_Tecnica_BackEnd.exception.ProductConflictException;
import com.gabriel.Prueba_Tecnica_BackEnd.exception.ProductNotFoundException;
import com.gabriel.Prueba_Tecnica_BackEnd.repository.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;

    @Override
    public Product createProduct(Product product) throws ProductConflictException {

        Optional<Product> existingProduct = productRepository.findByNombre((product.getNombre()));
        if (existingProduct.isPresent()) {
            throw new ProductConflictException("Product already exists with name: " + product.getNombre());
        }

        return productRepository.save(product);
    }

    @Override
    public Product getProductById(Long id) throws ProductNotFoundException {

        Optional<Product> product = productRepository.findById(id);
        if (product.isEmpty()) {
            throw new ProductNotFoundException("Product not found with id: " + id);
        }

        return product.get();
    }

    @Override
    public List<Product> getAllProducts() throws ProductNotFoundException {
        var productList = productRepository.findAll();
        if (productList.isEmpty()) {
            throw new ProductNotFoundException("No products found.");
        }
        return productList;
    }

    @Override
    public List<ProductStockDto> getProductStockDtoByName(String productName) throws ProductNotFoundException {

        List<Product> productList = productRepository.findByNombreContainsIgnoreCase(productName);

        if (!productList.isEmpty()) {
            return productList.stream()
                    .map(product -> ProductStockDto.builder()
                            .id(product.getId())
                            .nombre(product.getNombre())
                            .cantidad(product.getCantidad())
                            .build())
                    .collect(Collectors.toList());
        }
        else {
            throw new ProductNotFoundException("Product not found with name: " + productName);
        }

    }

    @Override
    public Product updateProduct(Long id, Product updatedProduct) throws ProductNotFoundException {

        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found with id: " + id));

        existingProduct.setNombre(updatedProduct.getNombre());
        existingProduct.setCantidad(updatedProduct.getCantidad());
        existingProduct.setPrecio(updatedProduct.getPrecio());
        existingProduct.setCategoria(updatedProduct.getCategoria());

        return productRepository.save(existingProduct);
    }

    @Override
    public void deleteProduct(Long id) throws ProductNotFoundException {

        if (!productRepository.existsById(id)) {
            throw new ProductNotFoundException("Product not found with id: " + id);
        }

        productRepository.deleteById(id);
    }
}
