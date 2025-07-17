package com.gabriel.Prueba_Tecnica_BackEnd.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import java.math.BigDecimal;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "producto")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre")
    @NotBlank(message = "Product name must not be empty")
    @Size(max = 100, message = "Product name must not exceed 100 characters")
    private String nombre;

    @Column(name = "categoria")
    @NotBlank(message = "Product category must not be empty")
    @Length(max = 50, message = "Product category must not exceed 50 characters")
    private String categoria;

    @Column(name = "cantidad", nullable = false)
    @NotNull(message = "Quantity is required")
    @Min(value = 1, message = "Quantity must be greater than zero")
    private int cantidad;

    @Column(name = "precio", nullable = false)
    @NotNull(message = "Price is required")
    @DecimalMin(value = "0.0", inclusive = false, message = "Price must be greater than 0")
    @Digits(integer = 10, fraction = 2, message = "Price must have at most 2 decimal places")
    private BigDecimal precio;

}

