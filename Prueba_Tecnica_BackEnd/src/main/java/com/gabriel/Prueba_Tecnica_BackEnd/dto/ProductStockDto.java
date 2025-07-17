package com.gabriel.Prueba_Tecnica_BackEnd.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder

public class ProductStockDto implements Serializable {

    private Long id;
    private String nombre;
    private int cantidad;
}
