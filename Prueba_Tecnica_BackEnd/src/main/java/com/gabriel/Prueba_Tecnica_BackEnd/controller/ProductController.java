package com.gabriel.Prueba_Tecnica_BackEnd.controller;

import com.gabriel.Prueba_Tecnica_BackEnd.dto.ProductStockDto;
import com.gabriel.Prueba_Tecnica_BackEnd.entity.Product;
import com.gabriel.Prueba_Tecnica_BackEnd.exception.ProductConflictException;
import com.gabriel.Prueba_Tecnica_BackEnd.exception.ProductNotFoundException;
import com.gabriel.Prueba_Tecnica_BackEnd.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
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

    @Operation(summary = "Obtener todos los productos")
    @ApiResponse(responseCode = "200", description = "Lista de todos los productos")
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @Operation(summary = "Obtener productos por nombre con su stock",
            description = "Devuelve productos que coincidan con el nombre, incluyendo su información de stock.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Productos encontrados"),
            @ApiResponse(responseCode = "404", description = "Producto no encontrado")
    })
    @GetMapping("/stock/{productName}")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductStockDto> getProductStockDtoByName(
            @Parameter(description = "Nombre del producto") @PathVariable String productName)
            throws ProductNotFoundException {
        return productService.getProductStockDtoByName(productName);
    }

    @Operation(summary = "Crear un nuevo producto")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Producto creado exitosamente"),
            @ApiResponse(responseCode = "409", description = "Conflicto: el producto ya existe"),
            @ApiResponse(responseCode = "400", description = "Solicitud inválida")
            
    })
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Product createProduct(
            @Parameter(description = "Datos del nuevo producto") @Valid @RequestBody Product product)
            throws ProductConflictException {
        return productService.createProduct(product);
    }

    @Operation(summary = "Actualizar un producto existente por ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Producto actualizado exitosamente"),
            @ApiResponse(responseCode = "404", description = "Producto no encontrado")
    })
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Product updateProduct(
            @Parameter(description = "ID del producto a actualizar") @PathVariable Long id,
            @Parameter(description = "Datos actualizados del producto") @Valid @RequestBody Product product)
            throws ProductNotFoundException {
        return productService.updateProduct(id, product);
    }

    @Operation(summary = "Eliminar un producto por ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Producto eliminado exitosamente"),
            @ApiResponse(responseCode = "404", description = "Producto no encontrado")
    })
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(
            @Parameter(description = "ID del producto a eliminar") @PathVariable Long id)
            throws ProductNotFoundException {
        productService.deleteProduct(id);
    }
}
